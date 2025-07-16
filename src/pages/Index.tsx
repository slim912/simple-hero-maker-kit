import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-sm font-medium text-background">Now Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up text-background">
            Launch Your
            <span className="block bg-text-gradient bg-clip-text text-transparent">
              Next Big Idea
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            Transform your vision into reality with our cutting-edge platform designed for modern innovators and creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4 h-auto text-background border-background/30 hover:bg-background hover:text-primary">
              Watch Demo
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-background/70 animate-fade-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-background">10K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-background/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-background">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-background/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-background">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default Index;
