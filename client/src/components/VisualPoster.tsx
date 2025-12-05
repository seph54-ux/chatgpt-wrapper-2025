import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const asciiArt = `────────────────────────────────
           CHATGPT WRAPPED 2025
                 ACE EDITION
────────────────────────────────

   TOP CATEGORIES
   • IoT & ESP32 Dev
   • Capstone ML System
   • Mandarin Work Chats
   • Portfolio & Web Dev
   • IT Support IRL

────────────────────────────────

   MOST ICONIC PHRASE:
           "OKAY DO IT."

────────────────────────────────

   PEAK CHAT MONTHS:
   ████ March
   ███████ July
   █████████ August
   █████ November

────────────────────────────────

   YOUR 2025 AESTHETIC:
   ■ Tech Blue
   ■ Capstone Green
   ■ Designer Pink
   ■ Translator Gold
   ■ Admin Grey

────────────────────────────────

   ACE'S CHARACTER CLASS:
   Tech Mage / Code Alchemist /
   Polyglot Support Character

────────────────────────────────

   SIGNATURE SIDE QUEST:
   "Explain why my TV looks like
         it's going supernova"
────────────────────────────────`;

export default function VisualPoster() {
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
      className="py-24 px-6 bg-gradient-to-b from-background to-slate-950"
      data-testid="section-visual-poster"
    >
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium">
            Classic Style
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Visual Poster
          </h2>
        </div>

        <Card className={`bg-slate-900 border-slate-700 overflow-hidden transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="p-6 md:p-8 overflow-x-auto">
            <pre className="font-mono text-sm md:text-base text-green-400 whitespace-pre leading-relaxed">
              {asciiArt}
            </pre>
          </div>
        </Card>
      </div>
    </section>
  );
}
