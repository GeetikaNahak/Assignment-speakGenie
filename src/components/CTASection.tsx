
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Start Your Child's Mindfulness Journey
        </h2>
        <p className="text-lg text-purple-100 mb-8">
          Join thousands of families who have discovered the power of mindfulness for children. 
          Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;