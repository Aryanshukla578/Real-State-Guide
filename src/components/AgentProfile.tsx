
import { Award, Users, ThumbsUp } from 'lucide-react';

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "250+",
    label: "Properties Sold",
    icon: Users,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: ThumbsUp,
  },
];

const AgentProfile = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-accent/10 rounded-full text-accent">YOUR AGENT</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet Your Real Estate Expert</h2>
          
          <p className="text-estate-600 mb-6">
            With over a decade of experience in luxury real estate, I specialize in helping clients find exceptional properties that meet their lifestyle needs and investment goals.
          </p>
          
          <p className="text-estate-600 mb-8">
            My approach combines in-depth market knowledge, personalized attention, and negotiation expertise to ensure you get the best value whether you're buying, selling, or investing.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-5 glass-card rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-serif font-bold text-xl md:text-2xl mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-estate-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button className="btn-primary">Contact Me</button>
            <button className="btn-secondary">View Testimonials</button>
          </div>
        </div>
        
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-soft">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
            alt="Real Estate Agent" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="text-white">
              <h3 className="font-serif text-2xl font-semibold mb-1">John Anderson</h3>
              <p className="text-white/80">Luxury Real Estate Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
