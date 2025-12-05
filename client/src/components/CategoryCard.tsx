import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  rank: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export default function CategoryCard({ 
  rank, 
  icon: Icon, 
  title, 
  description, 
  color,
  delay = 0 
}: CategoryCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      data-testid={`card-category-${rank}`}
    >
      <Card className="relative p-6 border-border/50 bg-card/80 backdrop-blur-sm group hover-elevate">
        <Badge 
          className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
          style={{ backgroundColor: color }}
        >
          {rank}
        </Badge>
        
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-7 h-7" style={{ color }} />
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}
