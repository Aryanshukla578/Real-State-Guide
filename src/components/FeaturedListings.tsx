
import { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';

// Sample property data
const properties = [
  {
    id: 1,
    title: "Beachfront Villa",
    price: "$1,850,000",
    address: "2218 Ocean Drive, Malibu, CA",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    beds: 5,
    baths: 4,
    sqft: 3500,
    featured: true
  },
  {
    id: 2,
    title: "Modern Penthouse",
    price: "$2,450,000",
    address: "789 Skyline Blvd, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?q=80&w=2787&auto=format&fit=crop",
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    featured: true
  },
  {
    id: 3,
    title: "Countryside Estate",
    price: "$3,200,000",
    address: "452 Vineyard Lane, Napa Valley, CA",
    image: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=1770&auto=format&fit=crop",
    beds: 6,
    baths: 5,
    sqft: 5200,
    featured: true
  },
  {
    id: 4,
    title: "City View Apartment",
    price: "$895,000",
    address: "301 Downtown Ave, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 1500,
    featured: false
  },
  {
    id: 5,
    title: "Lakefront Retreat",
    price: "$1,275,000",
    address: "873 Lake Shore Dr, Lake Tahoe, CA",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    beds: 4,
    baths: 3,
    sqft: 2900,
    featured: false
  },
  {
    id: 6,
    title: "Contemporary Townhouse",
    price: "$750,000",
    address: "567 Urban St, San Diego, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    featured: false
  }
];

const PropertyCard = ({ property }: { property: typeof properties[0] }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="property-card opacity-0 animate-fade-in">
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
        />
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-500'}`} 
            strokeWidth={isFavorite ? 2 : 1.5}
          />
        </button>
        
        {property.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-xs text-white text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-semibold text-xl">{property.title}</h3>
          <span className="text-accent font-semibold">{property.price}</span>
        </div>
        
        <div className="flex items-center text-estate-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>
        
        <div className="border-t border-estate-100 pt-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 text-estate-500 mr-1" />
              <span className="text-sm text-estate-700">{property.beds} <span className="text-estate-500">Beds</span></span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 text-estate-500 mr-1" />
              <span className="text-sm text-estate-700">{property.baths} <span className="text-estate-500">Baths</span></span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 text-estate-500 mr-1" />
              <span className="text-sm text-estate-700">{property.sqft.toLocaleString()} <span className="text-estate-500">Sq Ft</span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 pt-0">
        <button className="w-full btn-secondary text-center">View Details</button>
      </div>
    </div>
  );
};

const FeaturedListings = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProperties = filter === 'all' 
    ? properties 
    : filter === 'featured' 
      ? properties.filter(p => p.featured) 
      : properties.filter(p => !p.featured);

  return (
    <section id="properties" className="section-container">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-accent/10 rounded-full text-accent">EXCEPTIONAL PROPERTIES</span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Listings</h2>
        <p className="text-estate-600">
          Discover our handpicked selection of exceptional properties that offer the finest in luxury, comfort, and investment potential.
        </p>
      </div>
      
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-estate-100 rounded-lg p-1">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'all' ? 'bg-white shadow-soft' : 'hover:bg-white/50'}`}
            onClick={() => setFilter('all')}
          >
            All Properties
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'featured' ? 'bg-white shadow-soft' : 'hover:bg-white/50'}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === 'standard' ? 'bg-white shadow-soft' : 'hover:bg-white/50'}`}
            onClick={() => setFilter('standard')}
          >
            Standard
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property, index) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="btn-primary">View All Properties</button>
      </div>
    </section>
  );
};

export default FeaturedListings;
