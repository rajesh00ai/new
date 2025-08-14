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
      caption: "A woman enjoying a healthy smoothie bowl"
    },
    {
      src: gallery2,
      caption: "A close-up of SARIRA Fig Malt being sprinkled"
    },
    {
      src: gallery3,
      caption: "A young mother feeding her child a healthy snack"
    },
    {
      src: gallery4,
      caption: "A traditional Tamil meal served on a banana leaf"
    },
    {
      src: gallery5,
      caption: "Beautifully making a bowl of fresh, star fruit"
    },
    {
      src: gallery6,
      caption: "An elderly person enjoying a warm drink"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Our Visual Story
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse into the world of SARIRA
          </p>
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