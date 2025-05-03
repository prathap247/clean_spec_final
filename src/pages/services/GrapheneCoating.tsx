import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, Car, PenTool as Tool, Clock, DollarSign, AlertCircle, Sparkles } from 'lucide-react';

const benefits = [
  "Enhanced scratch resistance",
  "Superior heat dissipation",
  "Extreme water repellency",
  "Anti-static properties",
  "Increased hardness and durability",
  "7+ years of protection"
];

const packages = [
  {
    name: "Essential Protection- One Year",
    description: "Basic graphene coating protection",
    coverage: ["Paint protection", "Basic heat dissipation", "Enduring protection support", "Single layer application"],
    price: "Starting from 9,999"
  },
  {
    name: "Advanced Protection- Three Year",
    description: "Enhanced graphene coating system",
    coverage: ["Paint protection", "Wheels & calipers", "Enhanced heat dissipation", "Two layer application"],
    price: "Starting from 21,999"
  },
  {
    name: "Ultimate Protection - Seven Year",
    description: "Maximum graphene protection",
    coverage: ["Full vehicle coverage", "Wheels & calipers", "Glass coating", "Three layer application"],
    price: "Starting from 39,999"
  }
];

const process = [
  {
    title: "Surface Preparation",
    description: "Intensive decontamination and surface preparation process.",
    icon: Car,
    duration: "2-3 hours"
  },
  {
    title: "Paint Correction",
    description: "Complete paint correction to achieve perfect surface finish.",
    icon: Tool,
    duration: "4-6 hours"
  },
  {
    title: "Graphene Application",
    description: "Precision application of graphene coating layers.",
    icon: Zap,
    duration: "3-4 hours"
  },
  {
    title: "Quality Control",
    description: "Detailed inspection and curing verification.",
    icon: Sparkles,
    duration: "1-2 hours"
  }
];

const products = [
  {
    name: "Nasiol",
    description: "Advanced graphene-infused ceramic coating for superior protection.",
    features: [
      "Graphene-enhanced formula",
      "Extreme durability",
      "Superior heat dissipation",
      "Anti-static properties"
    ],
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fa8ff251-7793-4bb9-9c93-423046cd9ff4.__CR0,0,300,300_PT0_SX300_V1___.jpg"
  },
  {
    name: "Ard shine",
    description: "Professional-grade graphene coating with exceptional performance.",
    features: [
      "Enhanced scratch resistance",
      "Ultra-high gloss finish",
      "Advanced water behavior",
      "10-year durability"
    ],
    image: "https://m.media-amazon.com/images/I/71ZCkovVqcL.jpg"
  },
  {
    name: "Jade",
    description: "Next-generation graphene coating for maximum protection.",
    features: [
      "Maximum hardness rating",
      "Self-cleaning properties",
      "Thermal conductivity",
      "Lifetime warranty"
    ],
    image: "https://ethoscarcare.com/cdn/shop/files/graphene-coating-lifestyle_700x.jpg?v=1705631880"
  }
];

const protectionAreas = [
  {
    title: "Essential Areas",
    description: "Primary protection zones",
    areas: [
      "Exterior paint",
      "Clear coat",
      "Wheels",
      "Trim pieces",
      "Glass surfaces"
    ]
  },
  {
    title: "Additional Areas",
    description: "Enhanced protection zones",
    areas: [
      "Brake calipers",
      "Exhaust tips",
      "Interior surfaces",
      "Plastic trim",
      "Carbon fiber"
    ]
  },
  {
    title: "Special Applications",
    description: "Specialized protection areas",
    areas: [
      "Matte finishes",
      "Chrome surfaces",
      "Ceramic coatings",
      "PPF surfaces",
      "Custom wraps"
    ]
  }
];

const protectionBenefits = [
  {
    title: "Extreme Heat",
    description: "Superior heat dissipation properties protect against thermal damage and color changes."
  },
  {
    title: "Chemical Contaminants",
    description: "Advanced resistance against harsh chemicals, detergents, and environmental pollutants."
  },
  {
    title: "UV Radiation",
    description: "Enhanced UV protection prevents oxidation and maintains paint brilliance."
  },
  {
    title: "Surface Scratches",
    description: "Increased hardness rating provides superior scratch resistance."
  },
  {
    title: "Water Spots",
    description: "Extreme hydrophobic properties prevent water spotting and mineral deposits."
  },
  {
    title: "Static Buildup",
    description: "Anti-static properties repel dust and maintain cleanliness longer."
  }
];

const GrapheneCoating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="grid-pattern min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Zap className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              GRAPHENE COATING
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Next-generation protection with revolutionary graphene technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-display">
                WHAT IS GRAPHENE COATING?
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Graphene coating represents the latest advancement in automotive protection technology. By incorporating graphene, the strongest known material, into a ceramic coating matrix, we achieve unprecedented levels of durability and performance. This revolutionary coating offers superior protection against environmental damage while enhancing your vehicle's appearance.
                </p>
                <p>
                  The unique properties of graphene create a harder, more flexible protective layer that excels in heat dissipation and scratch resistance. The coating's molecular structure provides enhanced protection against UV rays, chemicals, and environmental contaminants while maintaining an exceptional glossy finish that lasts for years.
                </p>
                <p>
                  At Clean Spec, we use cutting-edge graphene-infused coatings that offer superior scratch resistance, heat dissipation, and water repellency compared to traditional ceramic coatings. Our professional application process ensures maximum bonding and optimal thickness for long-lasting protection. The anti-static properties of graphene help keep your vehicle cleaner for longer, while its thermal conductivity properties help prevent water spotting and mineral etching.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://fortifycarcare.in/wp-content/uploads/2024/10/Graphene-Spray-Coating-1-1.jpg"
                alt="Graphene Coating Application"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              KEY BENEFITS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-accent p-6 rounded-lg"
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              OUR PROCESS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg text-center"
                >
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h3>
                  <p className="text-white/70 mb-4">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{step.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Protection Benefits Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              CLEAR AND COMPLETE PROTECTION AGAINST
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Where to Apply Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              WHERE SHOULD I APPLY?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {protectionAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{area.title}</h3>
                  <p className="text-white/70 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.areas.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-white/70">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              PREMIUM PRODUCTS WE USE
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-display">
                      {product.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-white/70">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              PROTECTION PACKAGES
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{pkg.name}</h3>
                  <p className="text-white/70 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.coverage.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-white/70">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{pkg.price}</span>
                    {/* <DollarSign className="w-6 h-6 text-primary" /> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Warranty Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-black/30 p-6 rounded-lg flex items-start space-x-4"
          >
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">Advanced Protection Warranty</h4>
              <p className="text-white/70">
                Our graphene coating installations come with up to 10 years of warranty coverage, protecting against coating failure, oxidation, and loss of hydrophobic properties. Each package includes detailed care instructions and scheduled maintenance guidelines to maintain optimal performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GrapheneCoating;