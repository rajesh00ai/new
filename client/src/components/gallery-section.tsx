import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@assets/img9_1754285845409.png";
import gallery2 from "@assets/img10_1754285845410.png";
import gallery3 from "@assets/img1_1754285845395.png";
import gallery4 from "@assets/img 3_1754285845404.png";
import gallery5 from "@assets/img 6_1754285845405.png";
import gallery6 from "@assets/SARIRA-03_1754285266680.png";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      alt: "SARIRA Fig Malt in lifestyle setting with natural ingredients",
      title: "Natural Lifestyle"
    },
    {
      id: 2,
      src: gallery2,
      alt: "Premium SARIRA packaging with organic certification",
      title: "Premium Quality"
    },
    {
      id: 3,
      src: gallery3,
      alt: "SARIRA Fig Malt with organic figs and nuts",
      title: "Organic Ingredients"
    },
    {
      id: 4,
      src: gallery4,
      alt: "Delicious SARIRA Fig Malt preparation",
      title: "Ready to Serve"
    },
    {
      id: 5,
      src: gallery5,
      alt: "Traditional Tamil wellness foods",
      title: "Traditional Wisdom"
    },
    {
      id: 6,
      src: gallery6,
      alt: "SARIRA product showcase",
      title: "Product Range"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-neutral to-soft-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-green mb-4">
            Product Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See SARIRA Fig Malt in beautiful lifestyle settings and discover the quality of our products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}