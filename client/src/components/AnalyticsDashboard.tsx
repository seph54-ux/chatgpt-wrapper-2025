import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categoryDistribution = [
  { name: "Tech/Programming", percentage: 40, color: "hsl(210, 100%, 50%)" },
  { name: "Capstone System (ASL, Pi4, ML)", percentage: 20, color: "hsl(142, 76%, 45%)" },
  { name: "Translations", percentage: 15, color: "hsl(43, 96%, 56%)" },
  { name: "Portfolio Web Design", percentage: 10, color: "hsl(330, 81%, 60%)" },
  { name: "IT Support / Real-life", percentage: 10, color: "hsl(271, 91%, 65%)" },
  { name: "Misc (life hacks, random chaos)", percentage: 5, color: "hsl(0, 0%, 50%)" },
];

const questionFormats = [
  { format: '"Okay, do it."', percentage: 17 },
  { format: '"Is this enough?"', percentage: 9 },
  { format: '"Pwede ba ito?"', percentage: 7 },
  { format: '"Explain mo sakin bakit..."', percentage: 12 },
  { format: '"Provide a list..."', percentage: 11 },
];

const toneStats = [
  { tone: "Technical", percentage: 53, icon: "wrench" },
  { tone: "Work/Professional", percentage: 15, icon: "briefcase" },
  { tone: "Learning", percentage: 20, icon: "brain" },
  { tone: "Chaotic/Random", percentage: 7, icon: "laugh" },
  { tone: "Mandarin Comm", percentage: 5, icon: "globe" },
];

const monthlyHeatmap = [
  { month: "JAN", value: 2 },
  { month: "FEB", value: 3 },
  { month: "MAR", value: 4 },
  { month: "APR", value: 4 },
  { month: "MAY", value: 5 },
  { month: "JUN", value: 5 },
  { month: "JUL", value: 6 },
  { month: "AUG", value: 9 },
  { month: "SEP", value: 4 },
  { month: "OCT", value: 4 },
  { month: "NOV", value: 7 },
  { month: "DEC", value: 4 },
];

const skillsUnlocked = [
  "ESP32 identity system creation",
  "WebSocket real-time data",
  "Firebase Realtime/Hosting mastery",
  "Bootstrap basics confidence",
  "Splide.js implementation",
  "Chinese/English translation",
  "ML pipeline planning (MediaPipe + LSTM)",
];

const recommendations = [
  "You are officially ready for MERN stack training",
  "Build your own custom portfolio blog system",
  "Start documenting your capstone as a full case study",
  "Learn Docker or basic DevOps (you'll need it eventually)",
];

export default function AnalyticsDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedBars(true), 300);
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
      data-testid="section-analytics"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Badge variant="outline" className="mb-4">Deep Dive</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Detailed Analytics Dashboard
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-6">Category Distribution</h3>
            <div className="space-y-4">
              {categoryDistribution.map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{cat.name}</span>
                    <span className="text-muted-foreground">{cat.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: animatedBars ? `${cat.percentage}%` : "0%",
                        backgroundColor: cat.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-6">Conversation Tone Stats</h3>
            <div className="space-y-4">
              {toneStats.map((stat) => (
                <div key={stat.tone} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">{stat.tone}</div>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: animatedBars ? `${stat.percentage}%` : "0%" }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm text-foreground font-medium">{stat.percentage}%</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 mb-8 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-lg font-bold text-foreground mb-6">Monthly Engagement Heatmap</h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-end justify-between gap-2 h-56 min-w-[500px] md:min-w-0">
              {monthlyHeatmap.map((month) => {
                const maxValue = Math.max(...monthlyHeatmap.map(m => m.value));
                const heightPercent = (month.value / maxValue) * 100;
                const isHighest = month.value === maxValue;
                
                return (
                  <div key={month.month} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span 
                      className={`text-xs font-semibold mb-1 transition-all duration-1000 ${
                        animatedBars ? "opacity-100" : "opacity-0"
                      } ${isHighest ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {month.value}
                    </span>
                    <div 
                      className={`w-full rounded-t-md transition-all duration-1000 ease-out ${
                        isHighest ? "bg-primary" : "bg-primary/60"
                      }`}
                      style={{ 
                        height: animatedBars ? `${heightPercent}%` : "0%",
                        maxHeight: "180px",
                        minHeight: animatedBars ? "12px" : "0px",
                      }}
                      data-testid={`bar-${month.month.toLowerCase()}`}
                    />
                    <span className={`text-xs mt-2 ${isHighest ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                      {month.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary" />
              <span className="text-muted-foreground">Peak Month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary/60" />
              <span className="text-muted-foreground">Activity Level</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            <span className="font-semibold text-foreground">August = Peak Arc</span> (Capstone + Translation + Portfolio all at once)
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4">Core Skills Unlocked</h3>
            <ul className="space-y-2">
              {skillsUnlocked.map((skill, index) => (
                <li 
                  key={skill} 
                  className={`flex items-center gap-2 text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <span className="text-green-500">+</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          <Card className={`p-6 bg-gradient-to-br from-violet-500/10 to-pink-500/10 border-border/50 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4">Recommendations for 2026</h3>
            <p className="text-sm text-muted-foreground mb-4">Based on your chat patterns:</p>
            <ul className="space-y-3">
              {recommendations.map((rec, index) => (
                <li 
                  key={rec} 
                  className={`flex items-start gap-2 text-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 10) * 100}ms` }}
                >
                  <Badge variant="secondary" className="text-xs mt-0.5">{index + 1}</Badge>
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
