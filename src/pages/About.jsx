import React from "react";
import PageHeader from "../components/PageHeader";
import {
  InformationCircleIcon,
  HeartIcon,
  SparklesIcon,
  GlobeAmericasIcon
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="bg-brand-cream min-h-screen">
      <PageHeader
        title="Our Heritage of Care"
        subtitle="Crafting the future of professional garment care with environmental consciousness and timeless craftsmanship."
        icon={InformationCircleIcon}
      />

      {/* Our Story */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cream/50 -skew-x-12 translate-x-32 hidden lg:block"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-sm font-black text-brand-gold uppercase tracking-[0.3em] mb-6">
                The 7Green Journey
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight mb-8">
                Rooted in Quality, <br /> Growing in Trust.
              </h3>

              <div className="space-y-6 text-xl text-gray-500 leading-relaxed font-medium">
                <p>
                  Founded with a vision to redefine garment care in Ghana, 7Green Laundry has evolved from a local boutique service to a gold standard in the industry. We believe that your wardrobe is an investment, and it deserves more than just a wash—it deserves restoration.
                </p>
                <p>
                  Our philosophy is simple: perfection in every fold. By combining high-end European technology with sustainable practices, we ensure your garments return to you in pristine condition while protecting the community we call home.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative" data-aos="fade-left">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-cream aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
                  alt="Our Professional Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 glass-card p-8 border-brand-gold/20 shadow-brand-forest/5">
                <p className="text-4xl font-serif text-brand-forest font-bold mb-1">10k+</p>
                <p className="text-xs font-black text-brand-gold uppercase tracking-widest leading-none">Garments Restored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-forest text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-green/5 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-sm font-black text-brand-gold uppercase tracking-[0.3em] mb-4" data-aos="fade-up">
              Our Foundations
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight" data-aos="fade-up" data-aos-delay="100">
              Principles That <br /> Guide Our Craft
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GlobeAmericasIcon className="h-8 w-8" />,
                title: "Eco-Consciousness",
                desc: "Using biodegradable solvents and water-saving technology to protect our vibrant Ghana."
              },
              {
                icon: <SparklesIcon className="h-8 w-8" />,
                title: "Artisanal Excellence",
                desc: "Every garment is inspected twice by our master cleaners to ensure flawless results."
              },
              {
                icon: <HeartIcon className="h-8 w-8" />,
                title: "Client-Centric",
                desc: "Tailoring our services to the unique needs of your lifestyle and wardrobe requirements."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-brand-gold p-4 rounded-2xl w-fit text-brand-forest mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">{value.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;