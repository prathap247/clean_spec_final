import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, Car, PenTool as Tool, Clock, DollarSign, AlertCircle, Sparkles } from 'lucide-react';

const benefits = [
  "Self-healing technology repairs minor scratches",
  "UV protection prevents paint oxidation",
  "Maintains vehicle's resale value",
  "10-year warranty coverage",
  "Preserves factory paint finish",
  "Invisible protection layer"
];

const packages = [
  {
    name: "Front-End Protection",
    description: "Protect the most vulnerable areas of your vehicle",
    coverage: ["Full hood", "Front bumper", "Side mirrors", "Front bumper", "Side mirrors", "Headlights"],
    price: "Starting from Rs. 44,999"
  },
  {
    name: "Partial Coverage",
    description: "Extended protection for high-impact zones",
    coverage: ["Full hood", "Front bumper", "Side mirrors", "Headlights", "Front fenders", "A-pillars"],
    price: "Starting from Rs. 64,999"
  },
  {
    name: "Full Vehicle Protection",
    description: "Complete vehicle coverage for maximum protection",
    coverage: ["Full exterior coverage", "All painted surfaces", "Front bumper", "Side mirrors","Headlights & fog lights", "All vulnerable areas"],
    price: "Starting from Rs. 94,999"
  }
];

const process = [
  {
    title: "Surface Preparation",
    description: "Thorough cleaning and decontamination of the paint surface to ensure perfect PPF.",
    icon: Car,
    duration: "2-3 hours"
  },
  {
    title: "Paint Correction",
    description: "Removal of any existing imperfections, swirl marks, or scratches before PPF application.",
    icon: Tool,
    duration: "4-6 hours"
  },
  {
    title: "PPF Installation",
    description: "Precision application of pre-cut PPF panels using advanced techniques and tools.",
    icon: Shield,
    duration: "6-8 hours"
  },
  {
    title: "Quality Inspection",
    description: "Detailed inspection and finishing touches to ensure perfect installation.",
    icon: Sparkles,
    duration: "1-2 hours"
  }
];

const products = [
  {
    name: "Saint-Gobain",
    description: "Industry-leading paint protection film with self-healing technology and 10-year warranty.",
    features: [
      "Advanced self-healing technology",
      "Superior optical clarity",
      "Stain-resistant top coat",
      "Enhanced durability"
    ],
    image: "https://t3.ftcdn.net/jpg/04/28/62/22/360_F_428622212_JgUxob2c2Vzeeh9TcITmvl7vrtqEzu78.jpg"
  },
  {
    name: "Shield Pro",
    description: "Premium paint protection film offering exceptional clarity and durability.",
    features: [
      "High-gloss finish",
      "Advanced edge seal technology",
      "Hydrophobic surface",
      "UV resistant"
    ],
    image: "https://t3.ftcdn.net/jpg/04/28/62/22/360_F_428622212_JgUxob2c2Vzeeh9TcITmvl7vrtqEzu78.jpg"
  },
  {
    name: "LLumar",
    description: "Next-generation PPF with advanced hydrophobic properties.",
    features: [
      "Self-healing capabilities",
      "Ultra-clear finish",
      "Superior impact resistance",
      "Advanced stain resistance"
    ],
    image: "https://t3.ftcdn.net/jpg/04/28/62/22/360_F_428622212_JgUxob2c2Vzeeh9TcITmvl7vrtqEzu78.jpg"
  }
];

const protectionAreas = [
  {
    title: "High-Impact Areas",
    description: "Areas most vulnerable to damage",
    areas: [
      "Front bumper",
      "Hood and fenders",
      "Side mirrors",
      "Door edges",
      "Headlights"
    ]
  },
  {
    title: "Moderate-Risk Areas",
    description: "Secondary protection zones",
    areas: [
      "A-pillars",
      "Rocker panels",
      "Door handles",
      "Trunk ledge",
      "Rear bumper"
    ]
  },
  {
    title: "Optional Coverage",
    description: "Additional protection areas",
    areas: [
      "Full hood",
      "Complete front end",
      "Entire vehicle",
      "Roof",
      "Quarter panels"
    ]
  }
];

const protectionBenefits = [
  {
    title: "Rock Chips & Road Debris",
    description: "Superior protection against flying rocks, gravel, and road debris that can chip or scratch your paint."
  },
  {
    title: "Environmental Damage",
    description: "Shields against acid rain, bird droppings, tree sap, and other environmental contaminants."
  },
  {
    title: "UV Radiation",
    description: "Prevents paint oxidation and fading caused by harmful ultraviolet rays."
  },
  {
    title: "Chemical Exposure",
    description: "Resists damage from harsh chemicals, gasoline, and other automotive fluids."
  },
  {
    title: "Minor Scratches",
    description: "Self-healing technology helps eliminate light scratches and swirl marks."
  },
  {
    title: "Bug Acids & Stains",
    description: "Protects against etching and staining from insect residue and organic matter."
  }
];

const PaintProtection = () => {
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
            <Shield className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              PAINT PROTECTION FILM
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ultimate protection for your vehicle's paint with advanced self-healing technology
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
                WHAT IS PAINT PROTECTION FILM?
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Paint Protection Film (PPF) is a thermoplastic urethane film that is applied to painted surfaces of a new or used car to protect the paint from stone chips, bug damage, and minor abrasions. This revolutionary product represents the ultimate in paint protection technology.
                </p>
                <p>
                  Our premium PPF features advanced self-healing technology that eliminates minor scratches with heat from the sun or warm water. The optical-grade urethane film is virtually invisible, maintaining your vehicle's original appearance while providing superior protection against environmental damage, rock chips, and other road debris.
                </p>
                <p>
                  At Clean Spec, we use computer-cut patterns specific to your vehicle model, ensuring precise fitment and edge-to-edge coverage. Our certified installers have years of experience and follow strict quality control procedures to deliver flawless results. The film is backed by a comprehensive 10-year warranty against yellowing, cracking, or peeling.
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
                src="https://t3.ftcdn.net/jpg/04/28/62/22/360_F_428622212_JgUxob2c2Vzeeh9TcITmvl7vrtqEzu78.jpg"
                alt="PPF Installation"
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
              <h4 className="text-white font-bold mb-2">10-Year Warranty</h4>
              <p className="text-white/70">
                All our PPF installations come with a comprehensive 10-year warranty against yellowing, cracking, peeling, and delamination. Our certified installation process ensures the highest quality and longevity of the protection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PaintProtection;