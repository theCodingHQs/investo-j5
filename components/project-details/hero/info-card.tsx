interface InfoCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const InfoCard = ({ label, value, icon }: InfoCardProps) => {
  return (
    <div className="bg-info-card border border-info-card-border rounded-lg px-4 py-4 text-center">
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
