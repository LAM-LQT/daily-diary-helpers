import { BookHeart, Brain, Lock, Sparkles } from "lucide-react";

const features = [
  {
    name: "AI-Powered Insights",
    description: "Get personalized insights and patterns from your daily entries using advanced AI analysis.",
    icon: Brain,
  },
  {
    name: "Emotional Tracking",
    description: "Track your emotional journey and discover patterns in your mood over time.",
    icon: BookHeart,
  },
  {
    name: "Private & Secure",
    description: "Your thoughts are encrypted and secure. Only you have access to your personal diary.",
    icon: Lock,
  },
  {
    name: "Smart Suggestions",
    description: "Receive writing prompts and suggestions tailored to your journaling style.",
    icon: Sparkles,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features that Enhance Your Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to maintain a meaningful digital diary.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-700 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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