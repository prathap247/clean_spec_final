import React from 'react';
import { Shield, Droplet, Zap, SprayCan, Brush, Gauge, Wrench, Star, Clock, DollarSign, PenTool as Tool, Settings, Sparkles, Award, Check, Atom } from 'lucide-react';
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
    icon: Sparkles,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with an ultra-glossy finish that repels water and contaminants.',
    link: '/services/ceramic-coating',
    features: ['Hydrophobic properties', 'Chemical resistance', '5+ years protection']
  },
  {
    icon: Atom,
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
    title: 'Expert Technicians',
    description: 'Our certified professionals have years of experience in automotive care and protection.'
  },
  {
    icon: Settings,
    title: 'Advanced Technology',
    description: 'We use the latest tools and techniques to deliver exceptional results.'
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'We value your time and ensure prompt service completion.'
  },
  {
    icon: Sparkles,
    title: 'Quality Products',
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
    title: "Paint Protection",
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
              Where Transformation Begins
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto ">
              Professional detailing solutions for every need, delivered with precision and care where
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              
            </p>
             <p className="text-4xl sm:text-2xl font-bold text-red-600 max-w-2xl mx-auto mt-0 font-display">
  " QUALITY DOESN'T COME CHEAP "
</p>



          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
        </div>
      </div>
    </main>
  );
};

export default Services;