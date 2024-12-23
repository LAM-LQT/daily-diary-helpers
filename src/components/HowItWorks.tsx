import { Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Begin Your Journey",
    description: "Create your personal space for gratitude and reflection in seconds.",
  },
  {
    number: "02",
    title: "Daily Reflection",
    description: "Take a moment each day to appreciate life's beautiful moments.",
  },
  {
    number: "03",
    title: "Grow & Transform",
    description: "Watch as gratitude shapes your perspective and enriches your life.",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16 bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent inline-flex items-center gap-2">
            Your Journey to Gratitude <Sparkles className="h-8 w-8 text-rose-500" />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Three simple steps to transform your daily perspective
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-rose-400 opacity-5 rounded-2xl transition-opacity group-hover:opacity-10" />
                  <div className="relative">
                    <div className="text-transparent bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-5xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

export default HowItWorks;