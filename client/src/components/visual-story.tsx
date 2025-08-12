import gallery1 from "@assets/img1_1754285845395.png";
import gallery2 from "@assets/img2_1754285845406.png";
import gallery3 from "@assets/img 3_1754285845404.png";
import gallery4 from "@assets/img4_1754285845407.png";
import gallery5 from "@assets/img7_1754285845408.png";
import gallery6 from "@assets/img8_1754285845408.png";

export default function VisualStory() {
  const images = [
    {
      src: gallery1,
      caption: "Healthy lifestyle with SARIRA"
    },
    {
      src: gallery2,
      caption: "Premium Fig Malt quality"
    },
    {
      src: gallery3,
      caption: "Family wellness moments"
    },
    {
      src: gallery4,
      caption: "Traditional Tamil nutrition"
    },
    {
      src: gallery5,
      caption: "Natural ingredients"
    },
    {
      src: gallery6,
      caption: "Wellness for all ages"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Product Gallery
          </h2>
          <p className="text-lg text-gray-600">See SARIRA in action</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img 
                src={image.src} 
                alt={image.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}