import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Seo from '@/components/Seo';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Building, Phone, Mail, FileText, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: Building,
      title: t('contact.visit'),
      details: [
        'Registered Office:',
        '506/507, Ajmera Sikova, 23, Nityanand nagar, Opp. Damodar Park, Ghatkopar West, Mumbai - 400086.',
        '',
        'Corporate Office:',
        'A-308 Privilon b/h Iscon Temple , Iscon Cross Road Ahmedabad - 380015, Gujrat, INDIA'
      ],
    },
    {
      icon: Phone,
      title: t('contact.call'),
      details: ['+91 9167369755'],
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['gjpharmaceuticalsllp@gmail.com'],
    },
    {
      icon: FileText,
      title: t('contact.business'),
      details: ['GST No:', '27AAQFG6730K1ZW'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageWrapper>
      <Seo
        title="Contact Us"
        description="Contact G J Pharmaceuticals LLP for high-quality pharmaceutical products. Reach us at our new Mumbai or Ahmedabad offices."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "G J Pharmaceuticals LLP",
          "image": "https://tgpharmz.com/new-logo.png",
          "telephone": "+91 9167369755",
          "email": "gjpharmaceuticalsllp@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "506/507, Ajmera Sikova, 23, Nityanand nagar, Opp. Damodar Park, Ghatkopar West",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400086",
            "addressCountry": "IN"
          },
          "url": "https://tgpharmz.com/contact",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        }}
      />
      <Navbar />

      {/* Hero Section - Reduced height for better focus on content */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent">
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="section-padding border-b border-white/50 bg-white/40 backdrop-blur-md">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[2.5rem] max-w-5xl mx-auto text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <blockquote className="text-2xl font-serif italic text-slate-700 leading-relaxed mb-8 relative z-10">
              "{t('contact.founderQuote')}"
            </blockquote>
            <div className="flex flex-col items-center relative z-10">
              <div className="font-bold text-xl text-primary mb-1">Dhieraj Rathod</div>
              <div className="text-slate-500 font-medium">Founder & CEO, G J Pharmaceuticals LLP</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT COLUMN: Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl flex items-start gap-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-xl mb-3">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium text-slate-600 leading-relaxed text-lg">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#1e293b] p-10 md:p-12 rounded-[2.5rem] text-white shadow-2xl sticky top-32"
            >
              <div className="mb-10">
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Get in Touch</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t('contact.formTitle')}
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">{t('contact.formName')}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none backdrop-blur-sm"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">&nbsp;</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none backdrop-blur-sm"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">{t('contact.formEmail')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">{t('contact.formSubject')}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none backdrop-blur-sm"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">{t('contact.formMessage')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none backdrop-blur-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary hover:bg-orange-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 transition-all duration-300 mt-4"
                >
                  {isSubmitting ? 'Sending Message...' : t('contact.send')}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Contact;
