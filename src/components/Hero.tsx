
import { Focus, Heart, Moon, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 font-medium mb-4">
              A New Model. Bigger Results.
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mindfulness & Meditation for Kids (4-14)
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Fun, smart and evidence-based designed that teach kids meditation and mindfulness. 
              Developed with leading child psychologists and mindfulness experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Start for free
              </button>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                Learn more
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Focus className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 font-medium">Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 font-medium">Stress</span>
              </div>
              <div className="flex items-center space-x-2">
                <Moon className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 font-medium">Sleep</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 font-medium">Empathy</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Journey</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Follow guided sessions designed specifically for your child's age and development level.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg text-left">
                    <div className="text-sm font-medium text-purple-600">Today's Session</div>
                    <div className="text-sm text-gray-600">Breathing with Buddy Bear</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-left">
                    <div className="text-sm font-medium text-green-600">Completed</div>
                    <div className="text-sm text-gray-600">Morning Gratitude</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-left">
                    <div className="text-sm font-medium text-blue-600">Next Up</div>
                    <div className="text-sm text-gray-600">Calm Body Scan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;