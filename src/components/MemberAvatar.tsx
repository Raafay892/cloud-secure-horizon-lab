import { cn } from "@/lib/utils";
import { initials, type TeamMember } from "@/data/team";

interface MemberAvatarProps {
  member: Pick<TeamMember, "name" | "image">;
  className?: string;
}

const MemberAvatar: React.FC<MemberAvatarProps> = ({ member, className }) =>
  member.image ? (
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      className={cn("rounded-full bg-brand-background-alt object-cover object-center", className)}
    />
  ) : (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-brand-primary-soft font-serif font-semibold text-brand-primary",
        className
      )}
      aria-label={member.name}
      role="img"
    >
      {initials(member.name)}
    </div>
  );

export default MemberAvatar;
