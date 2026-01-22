import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, FileCheck } from 'lucide-react';

const Certification = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-10 overflow-hidden">
                <div className="container-custom">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Certification Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Overlay Card */}
                        <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 max-w-lg w-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-black/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                    Certification
                                </h1>
                                <p className="text-white text-lg leading-relaxed font-medium">
                                    Certificate of Pharmaceutical Product (as per WHO), USFDA, EU Certificate, Free Sale Certificates, Certificate of Origin, Halal Certificates, Kosher Certificates, TSE-BSE Certificates.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                        {/* Compliance With */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[2.5rem] text-center"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3F34] mb-12">
                                Compliance with :
                            </h2>
                            <div className="flex flex-col items-center justify-center gap-6">
                                <img
                                    src="/ema-logo-transparent.png"
                                    alt="European Medicines Agency"
                                    className="max-h-48 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                                <div className="space-y-1">
                                    <p className="text-[#0F3F34] font-serif text-xl tracking-wide uppercase">European Medicines Agency</p>
                                    <p className="text-slate-500 text-sm tracking-[0.2em] uppercase">Science • Medicines • Health</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Accredited With */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-12 rounded-[2.5rem] text-center"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3F34] mb-12">
                                Accredited with :
                            </h2>
                            <div className="flex flex-col xl:flex-row items-center justify-center gap-16">
                                {/* ISO */}
                                <div className="flex flex-col items-center gap-6">
                                    <img
                                        src="/iso-logo-transparent.png"
                                        alt="ISO Certified"
                                        className="max-h-40 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="space-y-1">
                                        <p className="text-[#0F3F34] font-bold text-lg">9001:2015</p>
                                        <p className="text-[#0F3F34] font-medium text-sm">Quality Management System</p>
                                    </div>
                                </div>

                                {/* WHO */}
                                <div className="flex flex-col items-center gap-6">
                                    <img
                                        src="/who-gmp-logo-transparent.png"
                                        alt="WHO GMP Certified"
                                        className="max-h-40 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="space-y-1">
                                        <p className="text-[#0F3F34] font-medium text-sm uppercase">A WHO-GMP Certified</p>
                                        <p className="text-[#0F3F34] font-bold text-sm uppercase">Manufacturing Facilities</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Certification;
