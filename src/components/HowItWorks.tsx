const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds and get started with your digital diary journey.",
  },
  {
    number: "02",
    title: "Write Daily",
    description: "Express your thoughts, feelings, and experiences in your personal digital space.",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Receive AI-powered insights about your emotional patterns and personal growth.",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Start your journey in three simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-700 text-5xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;