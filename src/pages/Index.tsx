import { Link } from "react-router-dom";
import { Shield, Wrench, SprayCanIcon, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import roofWaterproofing from "@/assets/gallery/roof-waterproofing.jpg";
import teamFraming from "@/assets/gallery/team-framing.jpg";
import drywallWork from "@/assets/gallery/drywall-work.jpg";
import houseConstruction from "@/assets/gallery/house-construction.jpg";

const services = [
  {
    icon: Shield,
    title: "Security Solutions",
    description:
      "24/7 security monitoring, armed response, CCTV installation, and access control systems.",
    image: roofWaterproofing,
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Complete property care including electrical, plumbing, structural repairs, and renovations.",
    image: teamFraming,
  },
  {
    icon: SprayCanIcon,
    title: "Cleaning Services",
    description:
      "Professional commercial and residential cleaning with eco-friendly products.",
    image: drywallWork,
  },
];

const features = [
  "Established since 2019",
  "24/7 Emergency Response",
  "Trained & Certified Staff",
  "Affordable Pricing",
  "100% Customer Satisfaction",
  "Serving All of South Africa",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
              Established 2019 • South Africa
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Property Maintenance &{" "}
              <span className="text-gradient-gold">Security Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Amonz Group delivers excellence in property care and protection.
              Trusted by businesses and homes across South Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center pt-12 pb-8">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                  <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-card w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive property solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-secondary rounded-2xl overflow-hidden hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Why Amonz Group
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient-gold">Property Care</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                With years of experience and a commitment to excellence, Amonz
                Group has become the go-to solution for property maintenance and
                security needs across South Africa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle size={20} className="text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Discover More
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>

            <div className="relative overflow-hidden">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={houseConstruction}
                  alt="Amonz Group Project"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-primary rounded-2xl -z-10 opacity-50" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Secure Your{" "}
              <span className="text-gradient-gold">Property?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch with us today for a free consultation and quote.
              Our team is ready to provide the solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="tel:+27839806168">Call: +27 83 980 6168</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
