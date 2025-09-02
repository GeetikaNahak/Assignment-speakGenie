// import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of 2",
      content: "My 7-year-old daughter has become so much calmer since we started using Mindory Kids. The guided sessions are perfect for her attention span.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Father of 3",
      content: "As a busy parent, I love how easy it is to incorporate these sessions into our daily routine. The kids actually ask for their mindfulness time!",
      rating: 5
    },
    {
      name: "Jennifer L.",
      role: "Elementary Teacher",
      content: "I've introduced Mindory Kids to my classroom and the improvement in focus and emotional regulation has been remarkable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Families Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;