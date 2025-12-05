import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Zap, AlertCircle } from "lucide-react";

const topTypedWords = [
  { text: '"Okay do it"', note: "parang boss sa cutscene" },
  { text: '"So hindi pwede?"', note: "crisis arc starter pack" },
  { text: '"Here is the file"', note: "ChatGPT: cannot read it" },
];

const searchHistory = [
  "Why my TV bright like sun?",
  "Pwede ba WD-40 sa kadena?",
  "Bakit hindi nag-work yung code ko?",
  "BitLocker pls spare me",
  "Ano recommended PSU bago sumabog PC ko?",
];

const highlights = [
  {
    icon: MessageCircle,
    title: "Most Dramatic Message",
    value: '"Here it is, can\'t you read it properly?"',
    note: "LMAO THE ENERGY",
    color: "hsl(330, 81%, 60%)",
  },
  {
    icon: Zap,
    title: "Most Engineer Moment",
    value: "WebSocket + Firebase + ESP32 + fuzzy logic",
    note: '"Okay do it." (casually)',
    color: "hsl(210, 100%, 50%)",
  },
  {
    icon: AlertCircle,
    title: "Most Filipino Moment",
    value: '"Good day ma\'am." to Chinese boss',
    note: "Tone: 1827 textbook English",
    color: "hsl(43, 96%, 56%)",
  },
];

export default function FunnyVersion() {
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
      className="py-24 px-6 bg-gradient-to-b from-pink-950/20 to-background"
      data-testid="section-funny"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Badge variant="outline" className="mb-4 text-pink-400 border-pink-400/30">
            ChatGPT Wrapped pero chaotic
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            The Funny Version
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl">Top 3 Most Typed Words by Ace</span>
            </h3>
            <div className="space-y-4">
              {topTypedWords.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-primary">{index + 1}.</span>
                  <div>
                    <span className="font-mono text-foreground">{item.text}</span>
                    <span className="text-muted-foreground text-sm ml-2">– {item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              <span>Your AI Search History (If I could stalk you)</span>
            </h3>
            <ul className="space-y-3">
              {searchHistory.map((query, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                >
                  <span className="text-primary">{">"}</span>
                  {query}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title}
                className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {item.title}
                </div>
                <p className="font-semibold text-foreground mb-2">{item.value}</p>
                <p className="text-sm text-muted-foreground italic">{item.note}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
