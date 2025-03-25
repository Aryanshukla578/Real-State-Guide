
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const propertyTypes = ["Any Type", "House", "Apartment", "Condo", "Villa", "Land"];
const bedrooms = ["Any", "1+", "2+", "3+", "4+", "5+"];
const priceRanges = ["Any Price", "$500k - $1M", "$1M - $2M", "$2M - $5M", "$5M+"];

const SearchProperties = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [bedroom, setBedroom] = useState(bedrooms[0]);
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, propertyType, bedroom, priceRange });
    // Here you would typically handle the search
  };

  return (
    <section className="py-16 bg-estate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-white/10 rounded-full">FIND PROPERTIES</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Search Available Properties</h2>
          <p className="text-white/70">
            Use our advanced search tools to find properties that match your exact criteria
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSearch} className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, neighborhood, or address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent/70"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Property Type</label>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full appearance-none px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent/70"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type} className="bg-estate-800 text-white">{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Bedrooms</label>
                <div className="relative">
                  <select
                    value={bedroom}
                    onChange={(e) => setBedroom(e.target.value)}
                    className="w-full appearance-none px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent/70"
                  >
                    {bedrooms.map((bed) => (
                      <option key={bed} value={bed} className="bg-estate-800 text-white">{bed}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Price Range</label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full appearance-none px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent/70"
                  >
                    {priceRanges.map((price) => (
                      <option key={price} value={price} className="bg-estate-800 text-white">{price}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchProperties;
