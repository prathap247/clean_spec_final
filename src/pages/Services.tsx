import React from 'react';
import { Shield, Droplet, Zap, SprayCan, Brush, Gauge, Wrench, Star, Clock, DollarSign, PenTool as Tool, Settings, Sparkles, Award, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: 'Paint Protection Film',
    description: 'Shield your vehicle from road debris, scratches, and environmental damage.',
    link: '/services/ppf',
    features: ['Self-healing technology', 'UV protection', '10-year warranty']
  },
  {
    icon: Droplet,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with an ultra-glossy finish that repels water and contaminants.',
    link: '/services/ceramic-coating',
    features: ['Hydrophobic properties', 'Chemical resistance', '5+ years protection']
  },
  {
    icon: Zap,
    title: 'Graphene Coating',
    description: 'Advanced nano-coating technology for superior durability and shine.',
    link: '/services/graphene-coating',
    features: ['Enhanced hardness', 'Heat dissipation', 'Anti-static']
  },
  {
    icon: SprayCan,
    title: 'Premium Car Wash',
    description: 'Meticulous hand washing using pH-neutral products and premium microfiber materials.',
    link: '/services/car-wash',
    features: ['pH-neutral products', 'Spot-free rinse', 'Hand wash only']
  },
  {
    icon: Brush,
    title: 'Professional Detailing',
    description: 'Comprehensive interior and exterior detailing service.',
    link: '/services/detailing',
    features: ['Paint correction', 'Interior deep clean', 'Engine bay detailing']
  },
  {
    icon: Gauge,
    title: 'Interior Care',
    description: 'Specialized interior cleaning and protection services.',
    link: '/services/custom',
    features: ['Leather treatment', 'Fabric protection', 'Odor elimination']
  }
];

const features = [
  {
    icon: Tool,
    title: 'Expert Detailers',
    description: 'Our certified professionals have years of experience in automotive care and protection.'
  },
  {
    icon: Settings,
    title: 'Advanced Products',
    description: 'We use the latest tools and techniques to deliver exceptional results.'
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'We value your time and ensure prompt service completion.'
  },
  {
    icon: Sparkles,
    title: 'Quality Promise',
    description: 'Only premium-grade products are used for lasting protection.'
  }
];

const certifications = [
  {
    icon: Award,
    title: 'IDA Certified',
    description: 'International Detailing Association Certified Detailer'
  },
  {
    icon: Shield,
    title: 'XPEL Certified',
    description: 'Factory-trained XPEL protection film installer'
  },
  {
    icon: Sparkles,
    title: 'Ceramic Pro Certified',
    description: 'Authorized Ceramic Pro coating installer'
  },
  {
    icon: Star,
    title: 'Gtechniq Accredited',
    description: 'Accredited Gtechniq protection specialist'
  }
];

const keyBenefits = [
  {
    title: "Paint Protection/Correction",
    description: "Advanced protection solutions for your vehicle's finish",
    features: [
      "Self-healing technology",
      "UV protection",
      "Chemical resistance",
      "10-year warranty"
    ]
  },
  {
    title: "Surface Enhancement",
    description: "Professional-grade coatings and finishes",
    features: [
      "Deep gloss finish",
      "Hydrophobic properties",
      "Scratch resistance",
      "Long-term durability"
    ]
  },
  {
    title: "Interior Care",
    description: "Comprehensive interior protection and restoration",
    features: [
      "Leather conditioning",
      "Fabric protection",
      "Odor elimination",
      "UV protection"
    ]
  },
  {
    title: "Maintenance Solutions",
    description: "Ongoing care to maintain your vehicle's appearance",
    features: [
      "Regular maintenance",
      "Spot treatments",
      "Paint correction",
      "Detail refreshing"
    ]
  }
];

const Services = () => {
  return (
    <main className="grid-pattern min-h-screen">
      <div className="pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Wrench className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              OUR SERVICES
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional detailing solutions for every need, delivered with precision and care
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.link}
                  className="block p-6 sm:p-8 bg-accent rounded-lg hover:shadow-xl transition-all group relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6 relative" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-display">{service.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 relative">{service.description}</p>
                  
                  {/* Service Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/60 text-sm">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <span className="text-primary font-semibold text-sm sm:text-base relative">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              WHY CHOOSE US
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg text-center group hover:bg-accent/80 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Benefits Section */}
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
            <div className="grid md:grid-cols-2 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-8 rounded-lg hover:bg-accent/80 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                  <p className="text-white/70 mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-white/70">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              OUR CERTIFICATIONS
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-8 rounded-lg flex items-center space-x-6 group hover:bg-accent/80 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">{cert.title}</h3>
                    <p className="text-white/70">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-accent p-8 sm:p-12 rounded-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              READY TO TRANSFORM YOUR VEHICLE?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Contact us today to schedule your appointment and experience the difference professional detailing can make.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Book Now
              {/* <DollarSign className="ml-2 w-5 h-5" /> */}
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Services;