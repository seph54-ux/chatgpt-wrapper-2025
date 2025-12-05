import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 animate-gradient-shift"
        style={{ backgroundSize: "400% 400%" }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse-glow"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div 
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse-glow" />
            <span className="text-sm uppercase tracking-[0.2em] text-purple-200 font-medium">
              Your 2025 Journey
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4">
            ChatGPT
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              WRAPPED
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
            2025 <span className="text-yellow-400">ACE</span> EDITION
          </div>
          
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            "Your year of curiosity, code, chaos, and capstone energy."
          </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-2 text-purple-200">
          <span className="text-sm tracking-wide">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
}
