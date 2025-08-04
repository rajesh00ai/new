import { MapPin, Phone, Clock } from "lucide-react";

export default function StoreLocator() {
  const locations = [
    {
      id: 1,
      name: "Chennai Central Store",
      address: "123 Anna Salai, Chennai, Tamil Nadu 600002",
      phone: "+91 70104 22748",
      hours: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      id: 2,
      name: "Coimbatore Branch",
      address: "456 Race Course Road, Coimbatore, Tamil Nadu 641018",
      phone: "+91 70104 22748",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM"
    },
    {
      id: 3,
      name: "Madurai Outlet",
      address: "789 West Masi Street, Madurai, Tamil Nadu 625001",
      phone: "+91 70104 22748",
      hours: "Mon-Sat: 9:00 AM - 7:30 PM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Store Locator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our stores across Tamil Nadu to experience SARIRA Fig Malt firsthand
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {locations.map((location) => (
              <div 
                key={location.id}
                className="bg-gradient-to-br from-warm-neutral to-soft-neutral p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-brand-green mb-4">
                  {location.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className="text-brand-green hover:text-brand-orange transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-brand-green/20 to-brand-orange/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-green mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  Call us for directions to the nearest store
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-brand-orange/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-brand-green mb-4">
              Can't Visit Our Stores?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Order SARIRA Fig Malt directly and get it delivered to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917010422748"
                className="bg-brand-green text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Call to Order
              </a>
              <a 
                href="https://wa.me/917010422748"
                className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}