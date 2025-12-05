import CategoryCard from "../CategoryCard";
import { Monitor } from "lucide-react";

export default function CategoryCardExample() {
  return (
    <div className="p-8 bg-background">
      <CategoryCard 
        rank={1}
        icon={Monitor}
        title="Programming & Tech Builds"
        description="From ESP32 to Raspberry Pi 4, MERN stack dreams, and your entire AquaVend IoT journey."
        color="hsl(210, 100%, 50%)"
        delay={0}
      />
    </div>
  );
}
