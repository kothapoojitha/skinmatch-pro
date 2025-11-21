import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkinTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const SkinTypeCard = ({ icon: Icon, title, description, selected, onClick }: SkinTypeCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-soft animate-scale-in",
        selected 
          ? "border-primary border-2 shadow-soft bg-primary/5" 
          : "border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className={cn(
          "p-4 rounded-full transition-all duration-300",
          selected ? "bg-gradient-primary" : "bg-secondary"
        )}>
          <Icon className={cn(
            "h-8 w-8 transition-colors duration-300",
            selected ? "text-primary-foreground" : "text-secondary-foreground"
          )} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};
