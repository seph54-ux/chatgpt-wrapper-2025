import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const themes = [
  { name: "Tech Blue", description: "Coding, ESP32, hardware tuning", color: "hsl(210, 100%, 50%)" },
  { name: "Mandarin Gold", description: "Translations, work messages", color: "hsl(43, 96%, 56%)" },
  { name: "Portfolio Pink", description: "Splide.js + creative design", color: "hsl(330, 81%, 60%)" },
  { name: "Capstone Green", description: "Machine learning + Pi4", color: "hsl(142, 76%, 45%)" },
  { name: "Admin Grey", description: "Inventory, reports, spreadsheets", color: "hsl(0, 0%, 45%)" },
];

export default function Moodboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-card/50 to-background"
      data-testid="section-moodboard"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium">
            Your Color Story
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            2025 Visual Moodboard
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Your year had consistent themes of tech mastery, creative growth, and professional responsibility — 
            very "Level-Up Protagonist" energy.
          </p>
        </div>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="grid grid-cols-5 gap-1 rounded-lg overflow-hidden mb-8">
            {themes.map((theme, index) => (
              <div
                key={theme.name}
                className={`h-24 md:h-32 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ 
                  backgroundColor: theme.color,
                  transitionDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>

          <div className="space-y-4">
            {themes.map((theme, index) => (
              <div 
                key={theme.name}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div 
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: theme.color }}
                />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-foreground">{theme.name}</span>
                  <span className="text-muted-foreground"> — {theme.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
