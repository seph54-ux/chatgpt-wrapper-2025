import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bug, BookOpen, Palette, MessageSquare, Zap } from "lucide-react";

const traits = [
  { icon: Code, text: "Build systems" },
  { icon: Bug, text: "Debug life" },
  { icon: BookOpen, text: "Learn languages" },
  { icon: Palette, text: "Make portfolios" },
  { icon: MessageSquare, text: "Ask pro questions" },
  { icon: Zap, text: 'Say "okay do it" like a boss' },
];

export default function ProfileCard() {
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
      className="py-24 px-6 bg-background"
      data-testid="section-profile"
    >
      <div className="max-w-2xl mx-auto">
        <Card 
          className={`p-8 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 border-border/50 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              A
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">ACE</h3>
            <p className="text-muted-foreground text-sm">
              The Techie, The Translator, The Developer, The Designer, The Multi-class Character
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary">Tech Mage</Badge>
            <Badge variant="secondary">Code Alchemist</Badge>
            <Badge variant="secondary">Polyglot Support</Badge>
          </div>

          <div className="space-y-3">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div 
                  key={trait.text}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{trait.text}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
