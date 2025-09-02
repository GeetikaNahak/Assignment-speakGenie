import { Users, Calendar, Clock, Shield, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Built for Kids",
      description:
        "Age-appropriate content designed specifically for children's developmental stages.",
    },
    {
      icon: Calendar,
      title: "Develop Daily Routines",
      description:
        "Consistent practice schedules that help establish healthy mindfulness habits.",
    },
    {
      icon: Clock,
      title: "Effective Sessions",
      description:
        "Short, engaging sessions that fit perfectly into busy family schedules.",
    },
    {
      icon: Shield,
      title: "Evidence Based Practices",
      description:
        "All activities are grounded in scientific research and proven methodologies.",
    },
    {
      icon: Star,
      title: "Social Skills",
      description:
        "Interactive exercises that improve empathy, communication, and social awareness.",
    },
    {
      icon: Zap,
      title: "Parent-Child Activities",
      description:
        "Shared mindfulness experiences that strengthen family bonds and understanding.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Built for Kids, Loved by Parents
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            All the tools and resources parents need to support their child's
            mindfulness journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
