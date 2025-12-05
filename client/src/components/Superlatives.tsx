import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Wrench, Zap, HelpCircle, Heart } from "lucide-react";

const superlatives = [
  {
    icon: Brain,
    title: "Most ACE Question Type",
    value: '"Okay, do it."',
    description: "Your signature move that powered countless builds",
    color: "hsl(271, 91%, 65%)",
  },
  {
    icon: Wrench,
    title: "Most Used Tech Terms",
    value: "ESP32, Firebase, WebSocket",
    description: "Plus GPIO, MediaPipe, Splide.js, Bootstrap, Delphi 6",
    color: "hsl(210, 100%, 50%)",
  },
  {
    icon: Zap,
    title: "Most Intense Topic Burst",
    value: "Sign Language Recognition",
    description: "July-August: You went full engineer mode. Code? Architecture? Workflows? All in one sitting.",
    color: "hsl(43, 96%, 56%)",
  },
  {
    icon: HelpCircle,
    title: "Most Unexpected Topic",
    value: "Motorcycle chain lubricant",
    description: "Creative problem-solving moment! WD-40 alternatives FTW.",
    color: "hsl(142, 76%, 45%)",
  },
  {
    icon: Heart,
    title: "Most Wholesome Thread",
    value: "Mandarin for your boss",
    description: "Your plan to speak Mandarin to your boss for the first time. The effort? Elite.",
    color: "hsl(330, 81%, 60%)",
  },
];

export default function Superlatives() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set(Array.from(prev).concat(index)));
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-background"
      data-testid="section-superlatives"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Awards Season</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Your 2025 Superlatives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {superlatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`${index === 4 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""} transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
                }`}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-elevate h-full">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {item.title}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 break-words">
                        {item.value}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
