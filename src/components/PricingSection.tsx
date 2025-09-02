
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out mindfulness with your child",
      features: [
        "3 guided sessions",
        "Basic progress tracking",
        "Community access",
        "Email support"
      ],
      buttonText: "Start Free",
      buttonClass: "bg-gray-600 hover:bg-gray-700 text-white",
      popular: false
    },
    {
      name: "Premium",
      price: "₹399/mo",
      description: "Complete mindfulness program for growing families",
      features: [
        "Unlimited sessions",
        "All age programs (4-14)",
        "Parent dashboard",
        "Progress reports",
        "Priority support",
        "Offline access"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
      popular: true
    },
    {
      name: "Family",
      price: "₹699/mo",
      description: "Perfect for families with multiple children",
      features: [
        "Everything in Premium",
        "Up to 6 child profiles",
        "Family challenges",
        "Group sessions",
        "Expert consultations",
        "Custom programs"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600">
            Start with a free trial. Upgrade when you're ready for more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;