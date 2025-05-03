import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Check, Car, PenTool as Tool, Clock, DollarSign, AlertCircle, Sparkles } from 'lucide-react';

const benefits = [
  "Superior gloss and shine enhancement",
  "Hydrophobic surface repels water and contaminants",
  "Protection against UV rays and oxidation",
  "Chemical resistance",
  "Easier maintenance and cleaning",
  "5+ years of protection"
];

const packages = [
  {
    name: "Bronze protection Package - One year",
    description: "Entry-level ceramic protection",
    coverage: ["Paint protection", "Basic hydrophobic properties","Wheels & calipers","2-year warranty", "Single layer application"],
    price: "Starting from Rs. 9,999"
  },
  {
    name: "Silver protection Package - Two Year",
    description: "Enhanced protection and gloss",
    coverage: ["Paint protection", "Wheel faces", "Advanced hydrophobic coating", "3-year warranty", "Two layer application"],
    price: "Starting from Rs. 19,999"
  },
  {
    name: "Gold protection Package - Five Year",
    description: "Ultimate ceramic protection",
    coverage: ["Full exterior protection", "Wheels & calipers", "Glass coating", "5-year warranty", "Three layer application"],
    price: "Starting from Rs. 29,999"
  },
];

const process = [
  {
    title: "Paint Decontamination",
    description: "Complete surface cleansing and clay bar treatment contaminants.",
    icon: Car,
    duration: "2-3 hours"
  },
  {
    title: "Paint Correction",
    description: "Multi-stage paint correction to remove scratches and imperfections.",
    icon: Tool,
    duration: "4-6 hours"
  },
  {
    title: "Ceramic Application",
    description: "Precise application of ceramic coating layers with controlled curing.",
    icon: Droplet,
    duration: "3-4 hours"
  },
  {
    title: "Final Inspection",
    description: "Thorough inspection and final touches under specialized lighting.",
    icon: Sparkles,
    duration: "1-2 hours"
  }
];

const products = [
  {
    name: "Ceramic Pro 9H",
    description: "Professional-grade ceramic coating with exceptional hardness and durability.",
    features: [
      "9H hardness rating",
      "Permanent protection",
      "UV resistance",
      "Chemical resistance"
    ],
    image: "https://imgs.search.brave.com/G-Befe8kO81-Y7g9fRT3iHbQnT17gFX3WXtdU0Ymo0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9q/ZXByb2R1Y3RzLmNv/bS9jZG4vc2hvcC9m/aWxlcy85SC1DZXJh/bWljLUNvYXRpbmct/TFMyLmpwZz9jcm9w/PWNlbnRlciZoZWln/aHQ9ODAwJnY9MTcx/NTYzNzc0OSZ3aWR0/aD04MDA"

  },
  {
    name: "IGL Coatings Kenzo",
    description: "Advanced ceramic coating with exceptional gloss and protection.",
    features: [
      "Ultra-high gloss finish",
      "Extreme water repellency",
      "Enhanced scratch resistance",
      "5-year warranty"
    ],
    image: "https://imgs.search.brave.com/QzhiPp1SIPnbGsdNHjXz8MnqOQt592zNv4WjPvf45j8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pZ2xj/b2F0aW5ncy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDYvS2Vuem8tR3Jh/cGhlbmVfUExfU01Q/XzE0X2lnbC0xMC5q/cGVn"
  },
  {
    name: "Gtechniq Crystal Serum Ultra",
    description: "Professional-only ceramic coating with dual-layer protection.",
    features: [
      "Dual-layer technology",
      "9H surface hardness",
      "Chemical resistance",
      "Lifetime warranty"
    ],
    image: "https://imgs.search.brave.com/Bl27adSak72lRsAFz5SflJ5LhglC9aX78JH2ttszJeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndGVj/aG5pcS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDUv/U0hPVVQ0LTM0Lmpw/Zw"
  }
];

const protectionAreas = [
  {
    title: "Primary Surfaces",
    description: "Main application areas",
    areas: [
      "Paint surfaces",
      "Clear coat",
      "Wheels",
      "Trim pieces",
      "Glass surfaces"
    ]
  },
  {
    title: "Secondary Surfaces",
    description: "Additional protection zones",
    areas: [
      "Brake calipers",
      "Exhaust tips",
      "Plastic trim",
      "Chrome accents",
      "Headlights"
    ]
  },
  {
    title: "Special Surfaces",
    description: "Optional protection areas",
    areas: [
      "Interior leather",
      "Fabric surfaces",
      "Matte finishes",
      "Carbon fiber",
      "Vinyl wraps"
    ]
  }
];

const protectionBenefits = [
  {
    title: "Environmental Contaminants",
    description: "Superior protection against bird droppings, tree sap, and industrial fallout."
  },
  {
    title: "UV Radiation",
    description: "Prevents oxidation and paint fading from prolonged sun exposure."
  },
  {
    title: "Chemical Damage",
    description: "Resists damage from harsh chemicals, acid rain, and detergents."
  },
  {
    title: "Water Spots",
    description: "Hydrophobic properties prevent water spotting and mineral etching."
  },
  {
    title: "Light Scratches",
    description: "Enhanced hardness provides resistance against wash marring and light scratches."
  },
  {
    title: "Oxidation",
    description: "Prevents paint oxidation and maintains gloss for years."
  }
];

const CeramicCoating = () => {
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
            <Droplet className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              CERAMIC COATING
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Advanced nano-ceramic protection for unmatched gloss and durability
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
                WHAT IS CERAMIC COATING?
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a permanent or semi-permanent layer of protection. This nanotechnology-based coating provides unparalleled resistance against environmental contaminants and chemical etching.
                </p>
                <p>
                  Our professional-grade ceramic coatings create an extremely durable, transparent layer of protection that enhances your vehicle's paint while providing exceptional resistance to scratches, chemicals, UV rays, and extreme temperatures. The hydrophobic properties make maintenance easier while providing an incredibly deep, wet-look shine that lasts for years.
                </p>
                <p>
                  At Clean Spec, we use only the highest grade ceramic coatings, professionally applied by our certified technicians. Our multi-stage application process includes thorough paint correction to ensure the best possible results, creating a finish that not only protects but also enhances your vehicle's appearance with a deep, glossy shine that lasts for years.
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
                src="https://imgs.search.brave.com/LP_hkxTAP572Sz3YN17440Se1lKXXk858WmORJNTc4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jYXIt/dmFybmlzaC1wcm90/ZWN0aW9uLWNlcmFt/aWMtY29hdGluZy1h/cHBsaWNhdGlvbi1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTczMzE2/MDk0NS5qcGc_Y3Jv/cD0xeHc6MXhoO2Nl/bnRlcix0b3AmcmVz/aXplPTk4MDoq"
                alt="Ceramic Coating Application"
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
              COATING PACKAGES
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
              <h4 className="text-white font-bold mb-2">Professional Application & Warranty</h4>
              <p className="text-white/70">
                All our ceramic coating installations are performed by certified technicians and come with a comprehensive warranty that covers coating failure, peeling, or loss of hydrophobic properties. Professional maintenance guidelines will be provided to ensure long-lasting protection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CeramicCoating;