import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const arcs = [
  { name: "ESP32 Arc", quote: '"Hindi ko gets yung ADC bakit may resistor."', icon: "chip" },
  { name: "Capstone Arc", quote: "full engineer mode, walang preno", icon: "rocket" },
  { name: "Mandarin Arc", quote: "biglang naging interpreter for the boss", icon: "languages" },
  { name: "Portfolio Arc", quote: "Splide.js + Bootstrap = designer era", icon: "palette" },
  { name: "Inventory Arc", quote: "Google Forms overlord ka na ngayon", icon: "table" },
  { name: "Real-life Tech Support Arc", quote: '"Yung TV namin naging supernova."', icon: "tv" },
];

const oneLiners = [
  '"Pwede ba WD-40 sa chain?"',
  '"3A lang? Bitin ba \'to?"',
  '"ChatGPT hindi mo mabasa file?"',
  '"Sana all may fuzzy logic sa life."',
];

const commands = [
  { cmd: '"Okay do it."', note: "literal parang shortcut key" },
  { cmd: '"Sige, generate."', note: "" },
  { cmd: '"Explain mo sakin parang bata ako."', note: "" },
];

export default function GenZTagalog() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      data-testid="section-genz-tagalog"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            Gen Z Tagalog Edition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            2025 Wrapped ni Ace
          </h2>
          <p className="text-xl text-muted-foreground mt-4">Chaotic but Productive Edition</p>
        </div>

        <Card className={`p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-border/50 mb-8 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <h3 className="text-lg font-bold text-foreground mb-4">Vibes Summary</h3>
          <p className="text-muted-foreground">
            2025 mo = pinaghalong <span className="text-foreground font-semibold">IT support</span>, 
            <span className="text-foreground font-semibold"> engineer</span>, 
            <span className="text-foreground font-semibold"> translator</span>, 
            <span className="text-foreground font-semibold"> designer</span>, at minsan... 
            <span className="text-foreground font-semibold italic"> philosopher ng buhay</span>.
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4">Mga pinakaginamit mong commands:</h3>
            <ul className="space-y-3">
              {commands.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">{">>"}</span>
                  <span className="font-mono text-foreground">{item.cmd}</span>
                  {item.note && <span className="text-muted-foreground text-sm">({item.note})</span>}
                </li>
              ))}
            </ul>
          </Card>

          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4">Mga one-liner na dapat naka-shirt:</h3>
            <ul className="space-y-3">
              {oneLiners.map((line, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">#{index + 1}</Badge>
                  <span className="font-mono text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-lg font-bold text-foreground mb-6">Mga Arc mo this year:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {arcs.map((arc, index) => (
              <div 
                key={arc.name}
                className={`p-4 rounded-lg bg-muted/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="font-bold text-foreground mb-2">{arc.name}</div>
                <p className="text-sm text-muted-foreground italic">{arc.quote}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card className="inline-block p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-border/50">
            <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">MVP mo this year:</div>
            <div className="text-2xl font-bold text-foreground">Ikaw pa rin, Ace.</div>
            <p className="text-muted-foreground text-sm mt-2">Hindi ka tumigil magtanong kahit antok na ako</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
