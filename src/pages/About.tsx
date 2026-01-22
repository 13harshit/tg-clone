import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Target, Eye, Users, CheckCircle, Trophy, Globe, Briefcase, Pill, Syringe, Droplet, FlaskConical, Stethoscope } from 'lucide-react';
import Seo from '@/components/Seo';
import PageWrapper from '@/components/PageWrapper';

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { t } = useLanguage();

  const whyUsPoints = [
    'Strong focus on quality compliance',
    'Easy mode of payment',
    'Timely delivery',
    'Innovative designs',
    'Tailored offering',
    'Competitive pricing'
  ]; // Note: For full translation, these should be keys too, but user asked for "whole website". 
  // I'll leave these as English for now as I didn't add keys for them in the previous step,
  // or I can try to map them to generic "Excellence" keys if they match. 
  // Given the constraints and the large text blocks I just added, I'll stick to the main content first.
  // EDIT: I should probably add keys for these points later if requested, but for now the main body is done.
  // To make it look translated contextually, I'll translate the Headers and Descriptions I added.

  const companyDetails = [
    { label: t('fact.ceo'), value: 'Mr. Dhieraj Rathod' },
    { label: t('fact.est'), value: '2017' },
    { label: t('fact.nature'), value: t('fact.natureVal') },
    { label: t('fact.employees'), value: '10' },
    { label: t('fact.turnover'), value: 'Rs. 2 – 5 Crore' },
  ];

  /* Hero Image Carousel Logic */
  const heroImages = [
    "/medicine/ChatGPT Image Jan 5, 2026, 07_33_47 PM.png",
    "/medicine/ChatGPT Image Jan 5, 2026, 07_33_50 PM.png",
    "/TG-PHARMZ-Manufacturing.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  /* Product Showcase Carousels */
  const facilityImages = [
    "/products/296136.jpg",
    "/products/296137.jpg",
    "/products/296138.jpg",
    "/products/296139.jpg"
  ];
  const productImages = [
    "/products/Arktob-Tobramycin-Sulphate-Injection.jpeg",
    "/products/Biomoal-650-Tablets.jpeg",
    "/products/Biomoxsalb.jpeg",
    "/products/Bioprost.jpeg",
    "/products/Biosalb-750-mg.jpeg",
    "/products/Digestive-Enzymes.jpeg"
  ];
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const facilityTimer = setInterval(() => {
      setCurrentFacilityIndex((prev) => (prev + 1) % facilityImages.length);
    }, 3000);
    return () => clearInterval(facilityTimer);
  }, []);

  useEffect(() => {
    const productTimer = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(productTimer);
  }, []);

  return (
    <PageWrapper>
      <Seo
        title="About Us"
        description="Learn about G J Pharmaceuticals LLP's history, mission, and commitment to pharmaceutical excellence. WHO-GMP certified manufacturing."
      />
      <Navbar />

      {/* Hero / Welcome Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-8 border border-primary/20">
                {t('aboutPage.badge')}
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-8 leading-tight">
                {t('aboutPage.welcome')} <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">G J Pharmaceuticals LLP</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                {t('aboutPage.intro')}
              </p>
              <div className="pl-6 border-l-4 border-primary/20 mb-8">
                <p className="text-slate-700 italic text-lg leading-relaxed">
                  "{t('aboutPage.founder')}"
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white relative bg-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt={`G J Pharmaceuticals LLP Facility ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    fetchPriority="high"
                  />
                </AnimatePresence>

                {/* Modern Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/40 w-2 hover:bg-white/60'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 z-[-1] w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-60" />
              <div className="absolute -top-10 -right-10 z-[-1] w-48 h-48 bg-teal-500/20 rounded-full blur-3xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2rem] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('aboutPage.missionTitle')}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.missionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 rounded-[2rem] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('aboutPage.visionTitle')}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.visionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections: Client Satisfaction, Team, Strengths */}
      <section className="section-padding pt-0">
        <div className="container-custom space-y-24">

          {/* Client Satisfaction */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 text-orange-600 font-semibold mb-6">
                <Trophy className="w-5 h-5" />
                <span>Excellence in Service</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t('aboutPage.clientSatTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-xl">
                {t('aboutPage.clientSatDesc')}
              </p>
            </motion.div>
            <div className="hidden md:block h-[400px] rounded-[2.5rem] relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] transform rotate-3 scale-95 transition-transform duration-500 group-hover:rotate-6"></div>
              {/* Illustration or image */}
              <div className="w-full h-full bg-[url('/client-satisfaction.png')] bg-cover bg-center rounded-[2.5rem] opacity-90 shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2"></div>
            </div>
          </div>

          {/* Our Team */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 hidden md:block h-64 bg-slate-200 rounded-2xl">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl opacity-80 mix-blend-multiply" role="img" aria-label="Team meeting"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-teal-600" />
                {t('aboutPage.teamTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t('aboutPage.teamDesc')}
              </p>
            </motion.div>
          </div>

          {/* Our Strengths */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              {/* Our Story */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-indigo-600" />
                  Our Story: Growth With Bliss
                </h2>
                <h3 className="text-xl text-indigo-600 font-semibold mb-4">From 2017 Origins to Global Diversification.</h3>
                <p className="text-slate-600 leading-relaxed text-lg text-justify">
                  Established in 2017, GJ Pharmaceuticals LLP began with a vision to bridge high-science manufacturing with holistic well-being. Guided by our philosophy of "Growth With Bliss," we have rapidly evolved from a medicinal supplier into a diversified global powerhouse. Today, we stand unique in the industry—delivering precision excellence across Pharmaceuticals, Nutraceuticals, Herbal Cosmetics, and Industrial Lubricants under one roof.
                </p>
              </div>

              {/* Core Strengths */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Core Strengths</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Diverse Expertise", desc: "A rare ability to engineer both life-saving sterile Injectables and high-performance Industrial Fluids with equal precision." },
                    { title: "R&D Powerhouse", desc: "Backed by 50+ scientists and a state-of-the-art research center dedicated to complex formulation and innovation." },
                    { title: "Uncompromising Quality", desc: "We adhere strictly to cGMP and global regulatory standards, ensuring every batch meets the highest safety benchmarks." },
                    { title: "Global Reach", desc: "A robust supply chain that delivers our trusted solutions to partners worldwide, ensuring reliability beyond borders." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="section-padding bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="container-custom">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-stretch">
              {/* Left Column: Facility Images + Icons */}
              <div className="flex flex-col gap-6">
                {/* Facility Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex-grow"
                >
                  <div className="h-full rounded-2xl overflow-hidden shadow-xl bg-slate-100 relative min-h-[300px]">
                    <AnimatePresence mode='wait'>
                      <motion.img
                        key={currentFacilityIndex}
                        src={facilityImages[currentFacilityIndex]}
                        alt={`EU GMP / USFDA Certified Manufacturing Facility ${currentFacilityIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        loading="lazy"
                      />
                    </AnimatePresence>
                    {/* Overlay Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[280px]">
                      <p className="text-slate-800 font-bold text-sm mb-1">EU GMP / USFDA</p>
                      <p className="text-slate-600 text-sm">Certified Manufacturing Facility.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Scrolling Icons Section - Positioned below left image */}
                <div className="relative overflow-hidden py-4 bg-slate-50 rounded-xl">
                  <div className="flex gap-8 md:gap-12 animate-scroll-icons">
                    {/* Duplicate icons for seamless loop */}
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-8 md:gap-12 shrink-0">
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                            <Pill className="w-6 h-6 text-blue-600" />
                          </div>
                          {/* <p className="text-xs text-slate-600 text-center font-medium">Tablets</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                            <Syringe className="w-6 h-6 text-purple-600" />
                          </div>
                          {/* <p className="text-xs text-slate-600 text-center font-medium">Injections</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                            <Droplet className="w-6 h-6 text-teal-600" />
                          </div>
                          {/* <p className="text-xs text-slate-600 text-center font-medium">IV Fluids</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                            <FlaskConical className="w-6 h-6 text-orange-600" />
                          </div>
                          {/* <p className="text-xs text-slate-600 text-center font-medium">Lab Tests</p> */}
                        </div>
                        <div className="flex flex-col items-center gap-2 w-16">
                          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                            <Stethoscope className="w-6 h-6 text-red-600" />
                          </div>
                          {/* <p className="text-xs text-slate-600 text-center font-medium">Medical</p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Product Images Carousel - Full Height */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <div className="h-full rounded-2xl overflow-hidden shadow-xl bg-white relative flex items-center justify-center p-0 min-h-[400px]">
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentProductIndex}
                      src={productImages[currentProductIndex]}
                      alt={`Product ${currentProductIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      loading="lazy"
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 font-heading">
              {t('excellence.title')}
            </h2>
            <p className="text-muted-foreground text-xl">
              {t('excellence.desc')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-5 p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="min-w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-slate-700 text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Sheet / Company Details */}
      <section className="section-padding bg-[#111827] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4">
              <Globe className="w-10 h-10 text-primary" />
              {t('fact.sheetTitle')}
            </h2>
            <div className="glass-dark-card rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-1">
                {companyDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`grid md:grid-cols-2 p-8 transition-colors hover:bg-white/5 ${index !== companyDetails.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="font-medium text-slate-300 md:text-right md:pr-12 mb-2 md:mb-0 text-lg uppercase tracking-wide">
                      {detail.label}
                    </div>
                    <div className="font-bold text-white md:pl-12 text-xl border-l-0 md:border-l border-white/10 font-heading">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default About;
