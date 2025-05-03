import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SprayCan, Check, Car, Clock, DollarSign, AlertCircle, Sparkles, Shield } from 'lucide-react';

const benefits = [
  "pH-neutral cleaning solutions",
  "Premium microfiber materials",
  "Spot-free rinse technology",
  "Hand-wash only process",
  "Interior vacuum and wipe-down",
  "Tire and wheel cleaning"
];

const packages = [
  {
    name: "Essential Wash",
    description: "Basic exterior wash and interior cleaning",
    coverage: ["Hand wash", "Wheel cleaning", "Interior vacuum", "Dashboard wipe-down"],
    price: "Starting from Rs. 650"
  },
  {
    name: "Premium Wash",
    description: "Enhanced cleaning with added protection",
    coverage: ["Hand wash", "Wheel cleaning", "Interior vacuum", "Dashboard wipe-down", "Wax application", "Glass cleaning"],
    price: "Starting from Rs. 999"
  },
  {
    name: "Ultimate Wash",
    description: "Complete wash and protection package",
    coverage: ["Hand wash", "Wheel cleaning", "Interior deep clean", "Leather conditioning", "Paint sealant", "Glass coating"],
    price: "Starting from Rs. 3999"
  }
];

const process = [
  {
    title: "Pre-Wash Inspection",
    description: "Thorough assessment of vehicle condition and contaminants.",
    icon: Car,
    duration: "10-15 mins"
  },
  {
    title: "Hand Wash",
    description: "Gentle hand washing using premium pH-neutral products.",
    icon: SprayCan,
    duration: "30-45 mins"
  },
  {
    title: "Interior Clean",
    description: "Detailed interior cleaning and conditioning.",
    icon: Sparkles,
    duration: "30-45 mins"
  },
  {
    title: "Final Touches",
    description: "Quality check and final detailing touches.",
    icon: Shield,
    duration: "15-20 mins"
  }
];

const products = [
  {
    name: "Gyeon Q²M Bathe Essence",
    description: "Premium pH-neutral car shampoo for safe and effective cleaning.",
    features: [
      "pH-neutral formula",
      "High lubricity",
      "Concentrated formula",
      "Gentle on coatings"
    ],
    image: "https://images.squarespace-cdn.com/content/v1/614ed0ba2d0cda37fd4d1823/1679266919802-06JNN30X5L1I044S9P8T/Lucid-Detailing-Store---Gyeon-Bathe.jpg?format=1500w"
  },
  {
    name: "CarPro Reset",
    description: "Professional-grade car wash shampoo designed for coated vehicles.",
    features: [
      "Coating-friendly formula",
      "Deep cleaning power",
      "Residue-free finish",
      "Concentrated solution"
    ],
    image: "https://i0.wp.com/www.cardetail.be/wp-content/uploads/2020/03/CARPRO-Reset-Demo-Taycan-3.webp?fit=1000%2C1000&ssl=1https://www.cleanyourcar.co.uk/image/cache/catalog/product/carpro/reset/carpro-reset-512x473w.jpg"
  },
  {
    name: "Mafra",
    description: "Versatile all-purpose cleaner for various surfaces.",
    features: [
      "Multi-surface use",
      "Environmentally friendly",
      "Strong cleaning power",
      "Safe on all materials"
    ],
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/car-interior-cleaner/f/i/d/1-ma-ch-10-mafra-original-imaghqrmakkyvvh2.jpeg?q=90&crop=false"

  }
];

const CarWash = () => {
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
            <SprayCan className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              PREMIUM CAR WASH
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional hand washing with premium products for a pristine finish
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
                PREMIUM HAND WASH SERVICE
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Our premium car wash service goes beyond the typical automated car wash experience. 
                  We use only the finest pH-neutral products and premium microfiber materials to ensure 
                  your vehicle receives the gentlest yet most effective cleaning possible.
                </p>
                <p>
                  Each wash is performed by hand by our trained professionals who understand the 
                  importance of proper washing techniques. We pay special attention to all areas of 
                  your vehicle, including wheels, tires, and hard-to-reach spots that automated 
                  washes often miss.
                </p>
                <p>
                  Our multi-step process includes thorough pre-washing, safe contact washing, and 
                  careful drying to prevent water spots and swirl marks. We also offer various 
                  protection options to help maintain your vehicle's appearance between washes.
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
                src="https://5.imimg.com/data5/SELLER/Default/2022/9/IS/JY/TV/151211649/best-car-cleaning-services-in-gurgaon-1-.jpg"
                alt="Premium Car Wash"
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
              WASH PACKAGES
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
              <h4 className="text-white font-bold mb-2">Quality Guarantee</h4>
              <p className="text-white/70">
                All our wash services are performed by trained professionals using premium products. 
                We guarantee your satisfaction with our meticulous attention to detail and 
                commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CarWash;