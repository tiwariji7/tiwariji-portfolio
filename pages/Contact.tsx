import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import {
  Mail,
  CheckCircle,
  Github,
  Linkedin,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ WHATSAPP SUBMIT HANDLER
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formState;

    const whatsappMessage = `New Contact Message 🚀

Name: ${name}
Email: ${email}

Message:
${message}`;

    const whatsappURL = `https://wa.me/918381835420?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's build something powerful together.
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'tiwarijiofficial4@gmail.com',
                  link: 'mailto:tiwarijiofficial4@gmail.com',
                  color: 'text-blue-400'
                },
                {
                  icon: MessageSquare,
                  label: 'WhatsApp',
                  value: '+91 8381835420',
                  link: 'https://wa.me/918381835420',
                  color: 'text-green-400'
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/tiwarijii',
                  link: 'https://linkedin.com/in/tiwarijii',
                  color: 'text-blue-600'
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`p-3 rounded-xl glass-panel group-hover:scale-110 transition-transform ${item.color}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/tiwariji7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-panel rounded-full hover:bg-white/5 transition-colors"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com/in/tiwarijii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-panel rounded-full hover:bg-white/5 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:tiwarijiofficial4@gmail.com"
                className="p-3 glass-panel rounded-full hover:bg-white/5 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              {/* 🔥 FIX: force interactions */}
              <div className="relative z-10 pointer-events-auto">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle size={64} className="text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Ready!</h3>
                      <p className="text-gray-400 mb-6">
                        WhatsApp opened with your message. Just hit send 🙂
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-blue-400 font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value
                          })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value
                          })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                      />

                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value
                          })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white resize-none"
                      />

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                      >
                        {isSubmitting
                          ? 'Opening WhatsApp...'
                          : 'Send via WhatsApp'}
                        <MessageSquare size={18} />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
