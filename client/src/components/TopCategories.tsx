import { useEffect, useState, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { Monitor, FolderOpen, Cpu, PenTool, Languages } from "lucide-react";

const categories = [
  {
    rank: 1,
    icon: Monitor,
    title: "Programming & Tech Builds",
    description: "From ESP32 to Raspberry Pi 4, MERN stack dreams, Delphi 6 throwback coding, and your entire AquaVend IoT journey — this is your Most Played category.",
    color: "hsl(210, 100%, 50%)",
  },
  {
    rank: 2,
    icon: FolderOpen,
    title: "School & Capstone Projects",
    description: "Real-time sign language recognition? MediaPipe + LSTM? WebSocket dashboards? Chef's kiss. You ate this category up almost monthly.",
    color: "hsl(142, 76%, 45%)",
  },
  {
    rank: 3,
    icon: Cpu,
    title: "Hardware/PC Questions",
    description: "Building PCs, PSU recommendations, GPU choices, your NEC laptop's limitations... If tech shops gave loyalty points for questions, you'd be VIP.",
    color: "hsl(271, 91%, 65%)",
  },
  {
    rank: 4,
    icon: PenTool,
    title: "Portfolio, Writing, & Branding",
    description: "Blog writing... Splide.js... OBS overlay galleries... Your 'graduation era' had one of the strongest arcs of the year.",
    color: "hsl(330, 81%, 60%)",
  },
  {
    rank: 5,
    icon: Languages,
    title: "Mandarin Translation & Work",
    description: "Your dual-language translator era came out of nowhere but stayed consistent. Your boss is lucky to have you.",
    color: "hsl(43, 96%, 56%)",
  },
];

export default function TopCategories() {
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
      data-testid="section-top-categories"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium">
            Your Year In Review
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
            Top 5 Things You Asked About
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.rank}
              className={index === 4 ? "md:col-span-2 lg:col-span-1 lg:mx-auto lg:w-full" : ""}
            >
              <CategoryCard {...category} delay={index * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
