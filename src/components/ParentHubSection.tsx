
import { BookOpen, Calendar, Users } from 'lucide-react';

const ParentHubSection = () => {
  const hubFeatures = [
    {
      icon: BookOpen,
      title: "Download Session 100 PDFs",
      description: "Access printable guides and activities to extend learning beyond the app."
    },
    {
      icon: Calendar,
      title: "7-4 Day Free Trial",
      description: "Experience the full program risk-free with our extended trial period."
    },
    {
      icon: Users,
      title: "14 Sessions Pack",
      description: "Structured progression through foundational mindfulness concepts."
    }
  ];

  return (
    <section className="py-20 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Parent & Teacher Hub
          </h2>
          <p className="text-lg text-purple-100">
            Resources and tools designed specifically for adults supporting children's mindfulness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hubFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentHubSection;