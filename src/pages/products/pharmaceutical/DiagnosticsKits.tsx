import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BriefcaseMedical } from 'lucide-react';

const DiagnosticsKits = () => {
    const products = [
        { code: "PSC", name: "-SCAN® hCG CARD TEST [ URINE]", tests: "50 TESTS" },
        { code: "PSCs", name: "PREGNY-SCAN® hCG CARD TEST [ URINEor SERUM]", tests: "50 TESTS" },
        { code: "PSM", name: "PREGNY-SCAN® hCG URINE MIDSTREAM CARD TEST [ URINE]", tests: "1 TESTS" },
        { code: "BLC", name: "BHAT BIO-SCAN® LH ( OVULATION) CARD TEST [ URINE]", tests: "10 TESTS" },
        { code: "HBC", name: "HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "HBCwb", name: "HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "HCC", name: "HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "HCCwb", name: "HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "ATS", name: "AIDSCAN® HIV-1/2 TRISPOT TEST KIT [PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "PRT", name: "PAREEKSHAK® HIV-1/2 RAPID SPOT TEST KIT [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "PTC", name: "PAREEKSHAK® HIV-1/2 TRILINE CARD TEST [SERUM or PLASMA ]", tests: "50 TESTS" },
        { code: "PTCwb", name: "PAREEKSHAK® HIV-1/2 TRILINE CARD TEST[SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MAL", name: "MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIBODY CARD TEST [PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "MAT", name: "MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIGEN CARD TEST [WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MPfPAN", name: "MALERISCAN® MALARIA P.f/PAN 3 LINE ANTIGEN CARD TEST [ WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MPf", name: "MALERISCAN® MALARIA P.f ANTIGEN CARD TEST [WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "BSC", name: "BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "BSCwb", name: "BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "BDC", name: "BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA ]", tests: "10 TESTS" },
        { code: "BDCwb", name: "BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA or WHOLE BLOOD ]", tests: "10 TESTS" },
        { code: "BNS1", name: "BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "BNS1wb", name: "BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" },
        { code: "BDgmNS1", name: "BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM ]", tests: "10 TESTS" },
        { code: "BDgmNS1wb", name: "BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" },
        { code: "BCSm", name: "BHAT BIO-SCAN® CHIKUNGUNYA IgM SPOT TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "BCSg", name: "BHAT BIO-SCAN® CHIKUNGUNYA IgG SPOT TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "HTC", name: "BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "HTCwb", name: "BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="relative pt-24 pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full mb-4">
                                <BriefcaseMedical className="w-4 h-4" />
                                <span className="text-sm font-semibold">Medical Diagnostics</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Diagnostic Kits</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">Comprehensive range of rapid diagnostic testing kits for accurate disease detection.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-secondary to-primary px-6 py-4">
                                    <h2 className="text-xl font-bold text-white">Rapid Diagnostic Kits</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-secondary/5 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Code</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Pack Size</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr
                                                    key={product.code}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 0.3, delay: index * 0.01 }}
                                                    className="hover:bg-secondary/5 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm font-medium text-secondary">{product.code}</td>
                                                    <td className="px-4 py-3 text-sm text-slate-900">{product.name}</td>
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.tests}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DiagnosticsKits;
