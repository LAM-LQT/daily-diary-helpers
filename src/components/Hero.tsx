import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Check if Spline viewer is loaded
    const checkSplineLoaded = () => {
      if (customElements.get('spline-viewer')) {
        setIsSplineLoaded(true);
      }
    };

    checkSplineLoaded();
    // Fallback check after a delay
    const timeout = setTimeout(checkSplineLoaded, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* Fallback background gradient for when Spline is not loaded */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100 -z-10" />
      
      {/* Spline 3D background */}
      <div className="absolute inset-0 -z-10">
        <spline-viewer 
          url="https://prod.spline.design/XLVlDNrxYqLN7lVG/scene.splinecode"
          loading-anim
          events-target="global"
        />
      </div>

      {/* Hero content */}
      <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Personal</span>
                <span className="block text-green-600">AI-Powered Diary</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Transform your daily journaling with AI insights. Capture your thoughts, track your growth, and discover patterns in your personal journey.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-lg px-8 py-6">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Person writing in diary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;