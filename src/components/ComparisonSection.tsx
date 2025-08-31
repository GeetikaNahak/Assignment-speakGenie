import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Expert-Led Sessions",
      mindory: true,
      others: false
    },
    {
      feature: "Age-Specific Programs",
      mindory: true,
      others: true
    },
    {
      feature: "Parent Dashboard",
      mindory: true,
      others: false
    },
    {
      feature: "Progress Tracking",
      mindory: true,
      others: true
    },
    {
      feature: "Unlimited Access",
      mindory: true,
      others: false
    },
    {
      feature: "Offline Mode",
      mindory: true,
      others: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Mindory Kids Over Others?
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-100 p-4">
            <div className="font-semibold text-gray-900">Features</div>
            <div className="text-center font-semibold text-purple-600">Mindory Kids</div>
            <div className="text-center font-semibold text-gray-500">Other Apps</div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-3 p-4 border-b border-gray-100 last:border-b-0">
              <div className="font-medium text-gray-900">{comparison.feature}</div>
              <div className="text-center">
                {comparison.mindory ? (
                  <Check className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </div>
              <div className="text-center">
                {comparison.others ? (
                  <Check className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;