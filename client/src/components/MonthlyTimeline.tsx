import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const months = [
  {
    period: "January - March",
    title: "The Warm-Up Arc",
    icon: "snowflake",
    topics: ["ESP32", "WebSockets", "Fuzzy Logic"],
    vibe: "Sana all may IoT system sa capstone.",
    extras: "You also asked about random life hacks like chain lubricants and BitLocker panic moments.",
    intensity: 40,
    color: "hsl(210, 100%, 50%)",
  },
  {
    period: "April - June",
    title: "Project Grind Arc",
    icon: "flame",
    topics: ["Firebase configs", "Dashboards", "Motherboard choices"],
    vibe: "Lots of 'Okay, do it' energy",
    extras: "Also the era where you began 'Call me Ace' — a highlight.",
    intensity: 70,
    color: "hsl(15, 90%, 55%)",
  },
  {
    period: "July - August",
    title: "Language & Work Mode Arc",
    icon: "leaf",
    topics: ["Mandarin Translator Mode", "Raspberry Pi", "Sign Language Recognition"],
    vibe: "You handled work messages like a pro",
    extras: "Also the start of your Raspberry Pi sign language recognition planning.",
    intensity: 90,
    color: "hsl(142, 76%, 45%)",
  },
  {
    period: "September - October",
    title: "Portfolio Builder Arc",
    icon: "palette",
    topics: ["Splide.js sliders", "Creative layouts", "SEO blogs"],
    vibe: "Certified content creator era",
    extras: "You made the 'My Works' section look like a designer's playground.",
    intensity: 55,
    color: "hsl(330, 81%, 60%)",
  },
  {
    period: "November - December",
    title: "Inventory & Real-life Tech Support Arc",
    icon: "flask",
    topics: ["Fixed assets inventory", "Google Forms", "TV backlight issues"],
    vibe: "I'm the IT/Admin department era",
    extras: "Plus real explanations like forklift listings, etc. Your IT era went full throttle.",
    intensity: 65,
    color: "hsl(271, 91%, 65%)",
  },
];

export default function MonthlyTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-background to-card/50"
      data-testid="section-monthly-timeline"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium">
            Month by Month
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Your Chat Activity in 2025
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {months.map((month, index) => (
              <div
                key={month.period}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? "opacity-100 translate-x-0" 
                    : index % 2 === 0 ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
                }`}
              >
                <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}>
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:col-start-2"}`}>
                    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover-elevate">
                      <div className="flex items-center gap-3 mb-4" style={{ direction: "ltr" }}>
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                          style={{ backgroundColor: `${month.color}20` }}
                        >
                          {month.icon === "snowflake" && "❄️"}
                          {month.icon === "flame" && "🔥"}
                          {month.icon === "leaf" && "🌱"}
                          {month.icon === "palette" && "🎨"}
                          {month.icon === "flask" && "🧪"}
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            {month.period}
                          </div>
                          <h3 className="font-bold text-foreground">{month.title}</h3>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Activity</span>
                          <span>{month.intensity}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: visibleItems.has(index) ? `${month.intensity}%` : "0%",
                              backgroundColor: month.color,
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {month.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground italic mb-2">"{month.vibe}"</p>
                      <p className="text-xs text-muted-foreground">{month.extras}</p>
                    </Card>
                  </div>
                </div>

                <div 
                  className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background"
                  style={{ backgroundColor: month.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
