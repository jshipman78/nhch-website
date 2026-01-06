import Image from "next/image";
import { TeamMember } from "@/lib/team-data";

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: "full" | "compact" | "inactive";
}

export default function TeamMemberCard({
  member,
  variant = "full",
}: TeamMemberCardProps) {
  const isInactive = variant === "inactive" || !member.acceptingPatients;

  return (
    <div
      className={`bg-white rounded-xl border border-border overflow-hidden shadow-sm ${
        isInactive ? "opacity-75" : ""
      }`}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className={`object-cover object-top ${
              isInactive ? "grayscale" : ""
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center">
            <span className="text-4xl font-bold text-white/80">
              {member.initials}
            </span>
          </div>
        )}

        {/* Status badge */}
        {isInactive && (
          <div className="absolute top-2 right-2 bg-warmgray text-white text-xs font-medium px-2 py-1 rounded">
            Not Accepting Patients
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-forest mb-1">{member.name}</h3>
        <p className="text-gold text-sm font-medium mb-1">{member.title}</p>
        {member.supervisor && (
          <p className="text-warmgray text-xs mb-2">
            Supervised by {member.supervisor}
          </p>
        )}
        {member.note && (
          <p className="text-warmgray text-xs italic mb-2">{member.note}</p>
        )}
        {variant === "full" && member.bio && (
          <p className="text-warmgray text-sm leading-relaxed line-clamp-4 mt-2">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
}

interface AdminStaffCardProps {
  name: string;
  title: string;
  photo?: string;
  initials: string;
}

export function AdminStaffCard({
  name,
  title,
  photo,
  initials,
}: AdminStaffCardProps) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg border border-border p-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
        {photo ? (
          <Image src={photo} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center">
            <span className="text-lg font-bold text-white/80">{initials}</span>
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-forest">{name}</h4>
        <p className="text-warmgray text-sm">{title}</p>
      </div>
    </div>
  );
}

interface MemoriamCardProps {
  member: TeamMember;
}

export function MemoriamCard({ member }: MemoriamCardProps) {
  return (
    <div className="bg-gradient-to-br from-forest to-forest-dark rounded-xl overflow-hidden text-white">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover grayscale"
              />
            ) : (
              <div className="w-full h-full bg-forest-dark flex items-center justify-center">
                <span className="text-4xl font-bold text-white/60">
                  {member.initials}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-2/3 p-6 lg:p-8">
          <p className="text-gold text-sm font-medium mb-2">In Memoriam</p>
          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
          {member.note && (
            <p className="text-white/70 text-sm mb-2">{member.note}</p>
          )}
          <p className="text-gold text-sm mb-4">{member.title}</p>
          <p className="text-white/90 leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}
