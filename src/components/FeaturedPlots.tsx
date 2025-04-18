
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURED_PLOTS = [
  {
    id: 1,
    title: "Premium Plot in Lucknow",
    location: "Gomti Nagar, Lucknow",
    size: "1200 sq.ft",
    price: "₹45 Lakhs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  },
  {
    id: 2,
    title: "Commercial Plot",
    location: "Noida Sector 62",
    size: "2000 sq.ft",
    price: "₹85 Lakhs",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Varanasi City",
    size: "800 sq.ft",
    price: "₹32 Lakhs",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
  },
];

export const FeaturedPlots = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Plots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PLOTS.map((plot) => (
            <Card key={plot.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={plot.image}
                alt={plot.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{plot.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {plot.location}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">{plot.size}</span>
                  <span className="text-lg font-semibold text-[#1a365d]">
                    {plot.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
