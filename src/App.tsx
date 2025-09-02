

import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ProgramsSection from './components/ProgramsSection';
import FeaturesSection from './components/FeaturesSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import ParentHubSection from './components/ParentHubSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Header from './components/Header'

function App() {
  

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Hero />
      <WhySection />
      <ProgramsSection />
      <FeaturesSection />
      <ComparisonSection />
      <PricingSection />
      <ParentHubSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer/>
    </div>
  )
}

export default App
