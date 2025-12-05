import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="py-12 px-6 bg-gradient-to-t from-violet-950/40 to-background border-t border-border/30"
      data-testid="footer"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-lg font-bold text-foreground">ChatGPT Wrapped 2025</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          ACE EDITION — Your year of curiosity, code, chaos, and capstone energy.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Made with</span>
          <span className="text-pink-500">love</span>
          <span>and lots of</span>
          <span className="font-mono text-primary">"okay do it"</span>
        </div>
      </div>
    </footer>
  );
}
