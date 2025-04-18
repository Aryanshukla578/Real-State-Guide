
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50">
            <Phone className="h-10 w-10 text-[#1a365d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 7524935555</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50">
            <Mail className="h-10 w-10 text-[#1a365d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">rajeevshukla707@gmail.com</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50">
            <MapPin className="h-10 w-10 text-[#1a365d] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">Pan India Presence</p>
          </div>
        </div>
      </div>
    </section>
  );
};
