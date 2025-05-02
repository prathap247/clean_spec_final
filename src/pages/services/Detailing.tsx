import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brush, Check, Car, Clock, DollarSign, AlertCircle, Sparkles, Shield } from 'lucide-react';

const benefits = [
  "Complete interior deep cleaning",
  "Paint correction and polishing",
  "Leather cleaning and conditioning",
  "Engine bay detailing",
  "Wheel and brake caliper detailing",
  "Long-lasting protection"
];

const packages = [
  {
    name: "Interior Detailing",
    description: "Complete interior restoration and protection",
    coverage: ["Deep cleaning", "Leather care", "Carpet extraction", "Air vent cleaning"],
    price: "Starting from Rs. 6,500"
  },
  {
    name: "Exterior Detailing",
    description: "Comprehensive exterior enhancement",
    coverage: ["Paint correction", "Machine polishing", "Wheel detailing", "Engine bay cleaning"],
    price: "Starting from Rs. 12,500"
  },
  {
    name: "Complete Detail",
    description: "Full vehicle transformation inside and out",
    coverage: ["Interior deep clean", "Paint correction", "Engine detailing", "Protection application"],
    price: "Starting from Rs. 22,000"
  }
];

const process = [
  {
    title: "Inspection",
    description: "Thorough assessment of vehicle condition and paint defects.",
    icon: Car,
    duration: "30 mins"
  },
  {
    title: "Deep Cleaning",
    description: "Intensive cleaning of all surfaces and components.",
    icon: Brush,
    duration: "2-3 hours"
  },
  {
    title: "Paint Correction",
    description: "Multi-stage paint correction and polishing.",
    icon: Sparkles,
    duration: "4-6 hours"
  },
  {
    title: "Protection",
    description: "Application of protective coatings and sealants.",
    icon: Shield,
    duration: "1-2 hours"
  }
];

const products = [
  {
    name: "Rupes Polishing System",
    description: "Professional-grade polishing system for perfect paint correction.",
    features: [
      "Variable speed control",
      "Ergonomic design",
      "Advanced backing plate",
      "Premium pads included"
    ],
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80"
  },
  {
    name: "menzerna",
    description: "Premium compound for one-step paint correction.",
    features: [
      "Diminishing abrasives",
      "Low dusting formula",
      "High gloss finish",
      "Easy cleanup"
    ],
    image: "https://images.unsplash.com/photo-1605515298946-d664fc6fe12e?auto=format&fit=crop&q=80"
  },
  {
    name: "Detroit polishing component",
    description: "Professional interior cleaning and protection products.",
    features: [
      "All surface cleaners",
      "Fabric protection",
      "Leather care",
      "Odor elimination"
    ],
    image: "https://images.unsplash.com/photo-1600705722908-bab2ad1a6919?auto=format&fit=crop&q=80"
  }
];

const Detailing = () => {
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
            <Brush className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              PROFESSIONAL DETAILING
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive detailing services to restore your vehicle to showroom condition
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
                EXPERT DETAILING SERVICES
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Our professional detailing services go beyond traditional car cleaning. We offer 
                  comprehensive interior and exterior detailing that addresses every aspect of your 
                  vehicle's appearance and condition. Our certified detailers use professional-grade 
                  products and equipment to achieve exceptional results.
                </p>
                <p>
                  From paint correction that removes swirls and scratches to deep interior cleaning 
                  that eliminates embedded dirt and odors, we provide meticulous attention to every 
                  detail. Our multi-step process ensures that every surface is properly cleaned, 
                  restored, and protected.
                </p>
                <p>
                  We understand that each vehicle is unique, which is why we offer customized 
                  detailing solutions tailored to your specific needs. Whether you're preparing 
                  your car for sale, restoring a classic vehicle, or maintaining your daily driver, 
                  our detailing services will exceed your expectations.
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
                src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80"
                alt="Professional Detailing"
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

          {/* Products Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              PROFESSIONAL EQUIPMENT
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
              DETAILING PACKAGES
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

          {/* Service Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-black/30 p-6 rounded-lg flex items-start space-x-4"
          >
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">Professional Standards</h4>
              <p className="text-white/70">
                All our detailing services are performed by certified professionals using the highest 
                quality products and equipment. We guarantee our work and ensure complete satisfaction 
                with every detail of our service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Detailing;