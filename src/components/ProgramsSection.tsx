import { motion } from "framer-motion";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Little Explorers (4-6)",
      description: "Gentle mindfulness exercises that introduce young minds to body awareness, breathing techniques, and emotional recognition through storytelling and play.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      features: ["Story-Based", "5-10 Min Sessions", "Parent Guidance"],
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      title: "Brave Thinkers (7-10)",
      description: "Interactive lessons that build emotional awareness and introduce calming strategies for everyday challenges and social situations.",
      image: "https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      features: ["Interactive Lessons", "10-15 Min Sessions", "Emotion Tracking"],
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Calm & Confident (11-14)",
      description: "Advanced mindfulness practices designed for pre-teens dealing with more complex emotions, social pressures, and academic stress.",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      features: ["Advanced Practices", "15-20 Min Sessions", "Stress Relief"],
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-gray-600">
            Age-appropriate mindfulness programs that grow with your child.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="space-y-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium cursor-pointer">
                  Start Program
                </button>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-2xl transform rotate-3`}
                  ></div>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
