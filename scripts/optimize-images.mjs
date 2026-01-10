#!/usr/bin/env node

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const ASSETS_DIR = './public/assets';
const BACKUP_DIR = './public/assets-backup';

// Configuration for different image types
const configs = {
  hero: { maxWidth: 2048, quality: 85 },
  services: { maxWidth: 1200, quality: 80 },
  team: { maxWidth: 600, quality: 80 },
  misc: { maxWidth: 1200, quality: 80 },
  insurance: { maxWidth: 300, quality: 85 },
  logos: { maxWidth: 400, quality: 90 },
};

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getConfig(filePath) {
  if (filePath.includes('hero') || filePath.includes('abstract-healing')) {
    return configs.hero;
  }
  if (filePath.includes('/services/')) return configs.services;
  if (filePath.includes('/team-photos/')) return configs.team;
  if (filePath.includes('/insurance/')) return configs.insurance;
  if (filePath.includes('/logos/')) return configs.logos;
  return configs.misc;
}

async function optimizeImage(filePath) {
  const config = getConfig(filePath);
  const stats = await stat(filePath);
  const sizeBefore = stats.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip if already small enough
    if (sizeBefore < 100 * 1024) {
      console.log(`SKIP: ${basename(filePath)} (already < 100KB)`);
      return { skipped: true };
    }

    // Resize if wider than maxWidth
    let pipeline = image;
    if (metadata.width > config.maxWidth) {
      pipeline = pipeline.resize(config.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Optimize based on format
    const ext = extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: config.quality,
        mozjpeg: true
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        compressionLevel: 9,
        adaptiveFiltering: true
      });
    }

    // Write to buffer first, then back to file
    const buffer = await pipeline.toBuffer();
    const sizeAfter = buffer.length;

    // Only save if we actually reduced size
    if (sizeAfter < sizeBefore) {
      await sharp(buffer).toFile(filePath);
      const savings = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      console.log(`OK: ${basename(filePath)}: ${formatSize(sizeBefore)} → ${formatSize(sizeAfter)} (${savings}% saved)`);
      return { sizeBefore, sizeAfter };
    } else {
      console.log(`SKIP: ${basename(filePath)} (optimization would increase size)`);
      return { skipped: true };
    }
  } catch (error) {
    console.error(`ERROR: ${basename(filePath)}: ${error.message}`);
    return { error: true };
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function main() {
  console.log('Image Optimization Script');
  console.log('='.repeat(50));

  const files = await getImageFiles(ASSETS_DIR);
  console.log(`Found ${files.length} images to process\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result.skipped) {
      skipped++;
    } else if (!result.error) {
      totalBefore += result.sizeBefore;
      totalAfter += result.sizeAfter;
      processed++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Processed: ${processed} files`);
  console.log(`Skipped: ${skipped} files`);
  if (processed > 0) {
    const totalSavings = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(1);
    console.log(`Total saved: ${formatSize(totalBefore - totalAfter)} (${totalSavings}%)`);
  }
}

main().catch(console.error);
