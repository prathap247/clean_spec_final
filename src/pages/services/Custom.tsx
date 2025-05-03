import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Check, Car, Clock, DollarSign, AlertCircle, Sparkles, Shield } from 'lucide-react';

const benefits = [
  "Deep interior cleaning & sanitization",
  "Leather care & conditioning",
  "Odor and allergen removal",
  "Upholstery & fabric protection",
  "Stain and spill treatment",
  "Dashboard and trim rejuvenation"
];

const specialties = [
  {
    name: "Exotic Cars",
    description: "Specialized care for high-performance and luxury vehicles",
    coverage: ["Paint protection", "Interior preservation", "Performance cleaning", "Show preparation"],
    price: "Custom Quote"
  },
  {
    name: "Classic Cars",
    description: "Gentle restoration and preservation of vintage vehicles",
    coverage: ["Period-correct cleaning", "Paint restoration", "Chrome polishing", "Interior restoration"],
    price: "Custom Quote"
  },
  {
    name: "Show Cars",
    description: "Competition-level preparation and detailing",
    coverage: ["Concours preparation", "Judge's inspection prep", "Display cleaning", "Transport protection","correction for mirror finish"],
    price: "Custom Quote"
  }
];

const process = [
  {
    title: "Interior Assessment",
    description: "nspection of interior materials and condition.",
    icon: Car,
    duration: "30-60 mins"
  },
  {
    title: "Deep Cleaning",
    description: "Thorough vacuuming, steam cleaning, and surface preparation.",
    icon: Wrench,
    duration: "1-2 hours"
  },
  {
    title: "Specialized Treatment",
    description: "Leather conditioning, fabric protection, and detail finishing.",
    icon: Sparkles,
    duration: "Variable"
  },
  {
    title: "Final Walkthrough",
    description: "Review and customer approval with final touch-ups.",
    icon: Shield,
    duration: "30-60 mins"
  }
];

const expertise = [
  {
    name: "Leather & Alcantara Care",
    description: "Luxury material protection and restoration.",
    features: [
      "Gentle leather cleaning & nourishment",
      "Alcantara-safe techniques",
      "Dye transfer prevention",
      "Wear protection"
    ],
    image: "https://i.pinimg.com/736x/b5/8b/b1/b58bb18288f48cd8e8c281b0f3bc3146.jpg"
  },
  {
    name: "Fabric & Carpet Restoration",
    description: "Deep-cleaned and refreshed for daily comfort.",
    features: [
      "Stain and odor extraction",
      "Anti-bacterial steam treatment",
      "Fabric protection coatings",
      "Pet hair & allergen removal"
    ],
    image: "https://i.shgcdn.com/cfe974e8-cb83-433d-bfd9-53d25c51160e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
  },
  {
    name: "Interior Trim Detailing",
    description: "Attention to the details others miss.",
    features: [
      "UV protection for plastics and wood",
      "Button, vent, and panel detailing",
      "Gloss or matte finish restoration",
      "Infotainment screen cleaning"
    ],
    image: "https://media.istockphoto.com/id/1468882248/video/young-handsome-concentrated-bearded-man-using-cleaning-brush-and-removing-dust-from-car-air.jpg?s=640x640&k=20&c=BkTkireW-_ZFtrVeaTNy83YB47OdsMpy6ZyI44EPFV4="
  }
];

const Custom = () => {
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
            <Wrench className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              INTERIOR CARE
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Premium interior detailing for a spotless, refreshed, and refined cabin experience
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
                DETAILED FROM THE INSIDE OUT
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Our Interior Care service is designed for vehicle owners who value a meticulously clean, comfortable, and well-maintained cabin. From deep-cleaning and conditioning to odor removal and stain treatment, we elevate your vehicle’s interior to showroom condition.
                </p>
                <p>
                  Whether your car sees daily use or is stored for special occasions, our team uses industry-leading techniques and interior-safe products to protect delicate materials like leather, Alcantara, suede, and more. We pay attention to every stitch, seam, and surface—because a well-maintained interior speaks volumes.
                </p>
                <p>
                  Each Interior Care service begins with a thorough assessment of your cabin's condition and materials. Based on your preferences and needs, we tailor a comprehensive treatment plan to restore, protect, and enhance every inch of your vehicle’s interior.


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
                src="https://t4.ftcdn.net/jpg/01/98/46/57/360_F_198465715_4bEEoXMMKdRq3cPtRmzzkgbCfUrjZ6hT.jpg"
                alt="Custom Detailing"
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

          {/* Expertise Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              OUR EXPERTISE
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-display">
                      {area.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
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

          {/* Specialties Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              SPECIALIZED SERVICES
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{specialty.name}</h3>
                  <p className="text-white/70 mb-4">{specialty.description}</p>
                  <ul className="space-y-2 mb-6">
                    {specialty.coverage.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-white/70">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{specialty.price}</span>
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
              <h4 className="text-white font-bold mb-2">TAILORED SOLUTIONS</h4>
              <p className="text-white/70">
                Every vehicle interior is unique—so is our approach. Whether you want to revive a tired cabin, maintain a luxury environment, or simply refresh your ride, our Interior Care is tailored to your lifestyle and your vehicle’s needs. Contact us for a consultation and personalized quote.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Custom;