
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'buying'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your server
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'buying'
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider bg-accent/10 rounded-full text-accent">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Start Your Real Estate Journey</h2>
          
          <p className="text-estate-600 mb-10">
            Whether you're ready to buy, sell, or just have questions about the market, I'm here to provide personalized guidance and support every step of the way.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Call Us</h3>
                <p className="text-estate-600">+91 7524935555</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email Us</h3>
                <p className="text-estate-600">contact at:rajeevshukla077@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                <p className="text-estate-600">789 Luxury Lane, Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Office Hours</h3>
                <p className="text-estate-600">Monday-Friday: 9AM-6PM<br />Saturday: 10AM-4PM<br />Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <h3 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-estate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-estate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-estate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-estate-700 mb-1">I'm Interested In</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="rental">Rental Properties</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-estate-700 mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your real estate needs..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
