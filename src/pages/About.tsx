import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Calendar, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import teamFraming from "@/assets/gallery/team-framing.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your satisfaction is our priority. We tailor solutions to meet your unique needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver quality workmanship and exceptional service, every single time.",
  },
  {
    icon: Calendar,
    title: "Reliability",
    description: "Count on us to be there when you need us, 24 hours a day, 7 days a week.",
  },
];

const stats = [
  { value: "2019", label: "Established" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              About Amonz Group
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Building Trust Through{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Since 2019, Amonz Group has been at the forefront of property maintenance 
              and security solutions across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={teamFraming}
                  alt="Amonz Group Team at Work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-0 right-0 bg-card border border-border rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-primary">5+</div>
                <div className="text-muted-foreground text-sm">Years of Excellence</div>
              </div>
            </div>

            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                From Vision to{" "}
                <span className="text-gradient-gold">Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Amonz Group was founded in 2019 with a simple yet powerful vision: 
                  to provide South African businesses and homeowners with reliable, 
                  professional property maintenance and security services they can trust.
                </p>
                <p>
                  What started as a small team has grown into a full-service property 
                  solutions company, serving clients across the nation. Our growth is 
                  a testament to our commitment to quality and customer satisfaction.
                </p>
                <p>
                  Today, we continue to expand our services and reach, always staying 
                  true to our founding principles of integrity, excellence, and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-secondary rounded-2xl p-8 hover-lift hover-glow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To deliver exceptional property maintenance and security solutions 
                that protect and enhance the value of our clients' investments. 
                We are committed to providing reliable, professional services 
                that exceed expectations and build lasting relationships.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-secondary rounded-2xl p-8 hover-lift hover-glow">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading provider of integrated property solutions in 
                South Africa, recognized for our unwavering commitment to quality, 
                innovation, and customer satisfaction. We envision a future where 
                every property is secure, well-maintained, and thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 text-center hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join the growing list of satisfied clients who trust Amonz Group 
                for their property needs.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
