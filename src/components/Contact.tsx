import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { supabase } from '../lib/supabase';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success-animation.json';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2500);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 font-display"
          >
            CONTACT US
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/70"
          >
            Get in touch with us for premium detailing services
          </motion.p>
        </div>

        <Toaster position="top-right" />
        
        {/* Success Animation Overlay */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-4xl sm:text-5xl font-bold text-primary font-display mb-4">
                    MESSAGE SENT SUCCESSFULLY!
                  </h3>
                  <p className="text-white text-xl">
                    We'll get back to you soon.
                  </p>
                </motion.div>
                
                <div className="w-full h-64 sm:h-80">
                  <Lottie
                    animationData={successAnimation}
                    loop={false}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-accent p-6 sm:p-8 rounded-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-display">SEND US A MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-2 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-accent p-6 sm:p-8 rounded-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-display">CONTACT INFO</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-white/70">+91 9003129998</p>
                  <p className="text-white/70">+91 9940420684</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-white/70">cleanspecho@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-white/70">Annexe IV, Plot No 10,11 Kannan Illam, Kannan Street, 2nd Main Rd, TVS Nagar, Korattur, RS, Chennai, Tamil Nadu 600076</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-white font-semibold">Business Hours</h4>
                  <p className="text-white/70">Mon-Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;