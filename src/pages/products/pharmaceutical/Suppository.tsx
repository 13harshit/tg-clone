import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pill } from 'lucide-react';

const Suppository = () => {
    const products = [
        { sno: 1, name: "Glycerin Suppositories U.S.P. Adult : 3.0 gm, Child: 1.0 gm", packing: "Adult Bottle (10s) / Strip (5s) Child Bottle (20s or 30s)" },
        { sno: 2, name: "Bisacodyl Suppositories 5 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 3, name: "Bisacodyl Suppositories 10 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 4, name: "Metronidazole Suppositories 50 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 5, name: "Metronidazole Suppositories 500 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 6, name: "Metronidazole Suppositories 1000 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 7, name: "Bismuth Subgallate Suppositories B.P.C.", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 8, name: "Indomethacin Suppositories B.P.", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 9, name: "Metoclopramide Suppositories 20 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 10, name: "Metoclopramide Suppositories 10 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 11, name: "Haemorrhoidal Suppositories", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 12, name: "Compound Bismuth Subgallate Suppositories B.P.C.", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 13, name: "Haemorrhoidal Suppositories", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 14, name: "Aminophylline Suppositories 75 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 15, name: "Aminophylline Suppositories 150 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 16, name: "Aminophylline Suppositories 300 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 17, name: "Aminophylline Suppositories 350 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 18, name: "Aminophylline Suppositories 360 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 19, name: "Aminophylline Suppositories 400 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 20, name: "Clotrimazole Pessaries B.P. 100mg", packing: "Strip (6s)" }
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
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4">
                                <Pill className="w-4 h-4" />
                                <span className="text-sm font-semibold">Alternative Dosage Form</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Suppository Products</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">Specialized solid dosage forms for rectal and vaginal administration.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-secondary to-primary px-6 py-4">
                                    <h2 className="text-xl font-bold text-white">Suppository Product List</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-secondary/5 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr
                                                    key={product.sno}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                                    className="hover:bg-primary/5 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.packing}</td>
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

export default Suppository;
