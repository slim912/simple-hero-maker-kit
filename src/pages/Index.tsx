import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2, Palette, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-ocean-gradient opacity-80" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary-glow/25 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Card */}
          <div className="backdrop-blur-glass bg-background/10 border border-background/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              
              {/* Profile Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Creative Portfolio</span>
              </div>

              {/* Name & Title */}
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
                Hi, I'm
                <span className="block bg-text-gradient bg-clip-text text-transparent mt-2">
                  Slim
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Creative Developer & Digital Artist crafting stunning experiences where 
                <span className="text-primary font-semibold"> technology meets art</span>
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Frontend</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2">
                  <Palette className="h-4 w-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">Design</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-glow/20 rounded-full px-4 py-2">
                  <Sparkles className="h-4 w-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">Innovation</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto rounded-full">
                  View My Projects
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button variant="outline-hero" size="lg" className="text-lg px-10 py-6 h-auto rounded-full border-2 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground">
                  Get In Touch
                  <Mail className="ml-3 h-6 w-6" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/20 hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-foreground/80">Years Experience</div>
            </div>
            <div className="text-center bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
