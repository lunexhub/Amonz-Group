import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Import gallery images
import buildingConstruction from "@/assets/gallery/building-construction.jpg";
import equipmentTrailer from "@/assets/gallery/equipment-trailer.jpg";
import teamFraming from "@/assets/gallery/team-framing.jpg";
import workerCeiling from "@/assets/gallery/worker-ceiling.jpg";
import interiorRenovation from "@/assets/gallery/interior-renovation.jpg";
import roofWaterproofing from "@/assets/gallery/roof-waterproofing.jpg";
import houseConstruction from "@/assets/gallery/house-construction.jpg";
import slabWork from "@/assets/gallery/slab-work.jpg";
import drywallWork from "@/assets/gallery/drywall-work.jpg";

const categories = ["All", "Construction", "Renovation", "Roofing"];

const galleryItems = [
  {
    id: 1,
    category: "Construction",
    title: "Modern Home Build",
    image: buildingConstruction,
    description: "Complete construction of a modern two-story residence",
  },
  {
    id: 2,
    category: "Construction",
    title: "House Construction",
    image: houseConstruction,
    description: "Double-story building with roof truss installation",
  },
  {
    id: 3,
    category: "Construction",
    title: "Slab & Foundation Work",
    image: slabWork,
    description: "Concrete slab construction and block laying",
  },
  {
    id: 4,
    category: "Renovation",
    title: "Interior Framing",
    image: teamFraming,
    description: "Wall framing and partition installation",
  },
  {
    id: 5,
    category: "Renovation",
    title: "Ceiling Installation",
    image: workerCeiling,
    description: "Professional ceiling and drywall work",
  },
  {
    id: 6,
    category: "Renovation",
    title: "Interior Plastering",
    image: interiorRenovation,
    description: "Wall plastering and finishing work",
  },
  {
    id: 7,
    category: "Renovation",
    title: "Drywall & Tiling",
    image: drywallWork,
    description: "Complete interior renovation with drywall and tiles",
  },
  {
    id: 8,
    category: "Roofing",
    title: "Roof Waterproofing",
    image: roofWaterproofing,
    description: "Professional roof waterproofing and sealing",
  },
  {
    id: 9,
    category: "Construction",
    title: "Equipment & Tools",
    image: equipmentTrailer,
    description: "Our professional equipment ready for any job",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Project <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Browse through our completed projects and see the quality of work 
              we deliver to our valued clients across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_4px_20px_-5px_hsl(43,72%,55%,0.4)]"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-24 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-display font-semibold text-foreground mt-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
