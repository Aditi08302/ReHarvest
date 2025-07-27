import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Users, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Recycle className="w-12 h-12 text-accent animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              ReHarvest
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Reclaim. Reuse. Reharvest.
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your food and agricultural surplus into shared community resources. 
            Join the circular economy revolution and make every waste stream a resource stream.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingDown className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">4.5kg</div>
              <div className="text-sm opacity-80">CO₂ saved per kg waste</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">Local</div>
              <div className="text-sm opacity-80">Community matching</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Recycle className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Circular reuse</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              Post Surplus
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              Browse Listings
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;