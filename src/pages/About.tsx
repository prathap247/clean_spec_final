import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Clock, Car, Star, Users, ThumbsUp, Award, SprayCan, Sparkles, Gauge, Wrench, Paintbrush, Check, Info } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    car: 'BMW 5 Series',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80',
    content: 'Exceptional service by Clean Spec! The ceramic coating on my BMW looks stunning. Their attention to detail and professionalism is remarkable. Highly recommended for luxury car owners.'
  },
  {
    name: 'Priya Sundaram',
    car: 'Mercedes-Benz GLC',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    content: 'Outstanding paint protection film installation! The team at Clean Spec is highly skilled and professional. My Mercedes looks better than when it left the showroom.'
  },
  {
    name: 'Karthik Raman',
    car: 'Audi Q7',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
    content: 'The graphene coating service at Clean Spec is top-notch. Their expertise and commitment to quality are evident in the final result. My Audi has never looked better!'
  }
];

const statistics = [
  { label: 'Years Experience', value: '8+', icon: Clock },
  { label: 'Cars Detailed', value: '7K+', icon: Car },
  { label: 'Happy Clients', value: '5K+', icon: Users },
  { label: '5-Star Reviews', value: '1000+', icon: Star }
];

const features = [
  {
    title: 'Premium Service',
    description: 'We use only the highest quality products and techniques to ensure your vehicle receives the best care possible.',
    icon: Trophy
  },
  {
    title: 'Expert Team',
    description: 'Our certified professionals have years of experience in automotive detailing and protection.',
    icon: Shield
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Your satisfaction is our top priority. We stand behind our work with a 100% satisfaction guarantee.',
    icon: ThumbsUp
  }
];

const whyChooseUs = [
  {
    icon: SprayCan,
    title: 'Premium Products',
    description: 'Only the finest detailing products and coatings',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: Sparkles,
    title: 'Expert Finish',
    description: 'Flawless results that exceed expectations',
    color: 'from-red-500 to-red-700'
  },
  {
    icon: Shield,
    title: 'Total Protection',
    description: 'Comprehensive vehicle care and preservation',
    color: 'from-red-700 to-red-900'
  },
  {
    icon: Paintbrush,
    title: 'Paint Perfection',
    description: 'Meticulous attention to paint correction',
    color: 'from-red-800 to-red-950'
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored services for every vehicle',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: Gauge,
    title: 'Swift Service',
    description: 'Efficient and timely completion',
    color: 'from-red-700 to-red-900'
  }
];

const keyBenefits = [
  {
    title: "Advanced Protection",
    description: "State-of-the-art paint protection and coating solutions",
    features: [
      "Self-healing technology",
      "UV protection",
      "Chemical resistance",
      "Hydrophobic properties"
    ]
  },
  {
    title: "Expert Service",
    description: "Certified professionals with extensive experience",
    features: [
      "Factory trained technicians",
      "Continuous education",
      "Latest techniques",
      "Quality assurance"
    ]
  },
  {
    title: "Premium Products",
    description: "Only the highest quality materials and products",
    features: [
      "Industry-leading brands",
      "Professional grade",
      "Proven durability",
      "Warranty backed"
    ]
  },
  {
    title: "Customer Focus",
    description: "Dedicated to exceeding your expectations",
    features: [
      "Personalized service",
      "Transparent pricing",
      "Timely completion",
      "Satisfaction guarantee"
    ]
  }
];

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isScrolling || isDragging) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 60000; // 60 seconds for one complete cycle
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      
      if (scrollContainer && isScrolling && !isDragging) {
        scrollContainer.scrollLeft = progress * totalWidth;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isScrolling, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsScrolling(false);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsScrolling(true), 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    setIsScrolling(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsScrolling(true);
    }
  };

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
            <Info className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              ABOUT US
            </h1>
            <div className="text-white/70 text-lg max-w-4xl mx-auto space-y-4 text-justify">
              <p>
                Since 2018, Clean Spec has been at the forefront of automotive detailing excellence, 
                setting new standards in the industry through our unwavering commitment to quality 
                and innovation. What began as a passionate pursuit of perfection has evolved into 
                one of the most trusted names in premium automotive care, serving a distinguished 
                clientele of car enthusiasts, luxury vehicle owners, and automotive connoisseurs.
              </p>
              <p>
                Our journey has been marked by continuous evolution and adaptation to the latest 
                technological advancements in automotive protection. From pioneering the adoption 
                of ceramic coatings to mastering the application of advanced graphene-based 
                protection systems, we've consistently stayed ahead of industry trends to offer 
                our clients the most effective and innovative solutions available.
              </p>
              <p>
                The Clean Spec difference lies in our meticulous attention to detail and our 
                comprehensive approach to vehicle care. Every vehicle that enters our state-of-the-art 
                facility receives a thorough assessment, followed by a customized treatment plan 
                designed to address its specific needs. Our team of certified professionals brings 
                together decades of combined experience, specialized training from leading manufacturers, 
                and a genuine passion for automotive excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-accent rounded-lg"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1 font-display">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12 text-center font-display"
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

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-12 text-center font-display"
            >
              WHY CHOOSE Clean Spec?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-accent/50 backdrop-blur-sm p-6 rounded-lg group hover:bg-accent/80 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-4xl font-bold text-white mb-8 text-center font-display">
              CUSTOMER TESTIMONIALS
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
              <div 
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
              >
                <div className="inline-flex space-x-6 px-32 py-4">
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.name}-${index}`}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-accent p-6 rounded-lg w-[350px] flex-shrink-0"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-white/70 text-sm">{testimonial.car}</div>
                        </div>
                      </div>
                      <p className="text-white/80 italic">"{testimonial.content}"</p>
                      <div className="flex text-primary mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;