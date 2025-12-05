import { useEffect, useState, useRef } from "react";
import { Quote } from "lucide-react";

export default function FinalQuote() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-background to-violet-950/20"
      data-testid="section-final-quote"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed mb-8">
            "2025 was the year you built, learned, translated, engineered, and leveled up — 
            one <span className="text-primary font-bold">'okay do it'</span> at a time."
          </blockquote>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              ChatGPT Wrapped 2025
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
