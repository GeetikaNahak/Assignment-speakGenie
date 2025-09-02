
import { Brain, Shield, Star } from 'lucide-react';

const WhySection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Backed by Science",
      description: "Mindfulness practices that are scientifically proven to improve focus, emotional regulation, and overall well-being."
    },
    {
      icon: Shield,
      title: "Safe for the Feelings",
      description: "Age-appropriate content that helps children develop emotional intelligence and coping strategies in a safe environment."
    },
    {
      icon: Star,
      title: "Creates a Tradition",
      description: "Establishes healthy daily habits that children can carry with them throughout their lives, creating lasting positive change."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Mindory Kids?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mindory was designed through joy-based science principles, 
            combining evidence-based mindfulness practices with engaging, 
            age-appropriate activities that kids actually enjoy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;