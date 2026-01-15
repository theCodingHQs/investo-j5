interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "highlight";
}

const Badge = ({ children, variant = "default" }: BadgeProps) => {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium border";
  const variantClasses =
    variant === "highlight"
      ? "bg-link/20 text-link border-link-border"
      : "bg-background text-muted-foreground border-link-border";

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>;
};

export default Badge;
