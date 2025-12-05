import { useEffect, useState, useRef } from "react";
import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  title: string;
  subtitle?: string;
}

export default function SectionDivider({ title, subtitle }: SectionDividerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={dividerRef}
      className="py-24 px-6 bg-gradient-to-r from-violet-900 via-purple-800 to-pink-800 relative overflow-hidden"
      data-testid="section-divider"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span className="text-sm uppercase tracking-[0.2em] text-purple-200">Part Two</span>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-purple-200 mt-4">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
