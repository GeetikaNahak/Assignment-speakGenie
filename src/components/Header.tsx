
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TopMind Care</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Programs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">For Parents</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">FAQs</a>
          </nav>
          
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;