
import { Check, Home, Key, DollarSign, FileText } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Define Your Requirements",
    description: "Determine your budget, preferred locations, property type, and must-have features to streamline your search.",
    icon: Home,
  },
  {
    id: 2,
    title: "Get Pre-Approved for Financing",
    description: "Secure pre-approval from a lender to understand your budget and demonstrate seriousness to sellers.",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Property Viewing and Selection",
    description: "Tour properties that match your criteria and select the one that best meets your needs and preferences.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Closing the Deal",
    description: "Navigate negotiations, inspections, and paperwork with our expert guidance until you receive your keys.",
    icon: Key,
  },
];

const BuyingGuide = () => {
  return (
    <section id="buying" className="bg-estate-50 py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-soft">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                  alt="Happy homeowners" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-accent/10 rounded-full text-accent">BUYING GUIDE</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">How to Buy Your Dream Property</h2>
            <p className="text-estate-600 mb-8">
              Navigating the real estate market can be complex, but our streamlined process makes finding and purchasing your ideal property straightforward and stress-free.
            </p>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-estate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="btn-primary">Schedule a Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingGuide;
