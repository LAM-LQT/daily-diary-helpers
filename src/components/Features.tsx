import { Heart, Sparkles, BookHeart, Brain } from "lucide-react";

const features = [
  {
    name: "Mindful Reflection",
    description: "Transform your daily experiences into meaningful insights with AI-powered analysis.",
    icon: Brain,
    gradient: "from-blue-400 to-purple-400",
  },
  {
    name: "Emotional Journey",
    description: "Track your gratitude journey and discover patterns in your daily appreciation.",
    icon: Heart,
    gradient: "from-rose-400 to-pink-400",
  },
  {
    name: "Personal Growth",
    description: "Watch your journey unfold as you cultivate a deeper sense of gratitude each day.",
    icon: BookHeart,
    gradient: "from-amber-400 to-orange-400",
  },
  {
    name: "Daily Inspiration",
    description: "Receive thoughtful prompts to help you recognize life's beautiful moments.",
    icon: Sparkles,
    gradient: "from-emerald-400 to-teal-400",
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
            Features that Nurture Gratitude
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Tools designed to help you appreciate life's precious moments.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 rounded-2xl transition-opacity group-hover:opacity-10`} />
                  <div className="relative">
                    <span className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg`}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="mt-8 text-lg font-semibold text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;