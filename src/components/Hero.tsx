import { Button } from "@/components/ui/button";
import { Heart, Smile } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6 space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <Smile className="h-8 w-8 text-primary/80" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Capture Your Daily</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Moments of Gratitude
              </span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Transform your daily journaling into a journey of appreciation. Reflect on life's beautiful moments and discover the power of gratitude.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Begin Your Gratitude Journey
              </Button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <img
                className="w-full rounded-2xl"
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Person writing gratitude journal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;