import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Syringe } from 'lucide-react';

const Injections = () => {
    const products = [
        { sno: 1, name: "Alpha Beta Arteether injection 1ml", packing: "3×1 ml", quantity: "100,000 amps" },
        { sno: 2, name: "Alpha Beta Arteether injection 2 ml", packing: "3 x2 ml", quantity: "100,000 amps" },
        { sno: 3, name: "Amikacin 250 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 4, name: "Amikacin 500 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 5, name: "Amikacin 100 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 6, name: "Amoxycilline+ Pot. Clavulanate 1.2 gm", packing: "20 ml vial", quantity: "50,000 vials" },
        { sno: 7, name: "Artesunate injection 60 mg", packing: "7.5 ml vial combi", quantity: "50,000 vials" },
        { sno: 8, name: "Aceclofenac injection", packing: "10 x 1 ml Tray Pack", quantity: "100,000 amps" },
        { sno: 9, name: "Atropine sulphate injection", packing: "10 x 1 ml", quantity: "100,000 amps" },
        { sno: 10, name: "Adrenaline injection", packing: "1 ml", quantity: "100,000 amps" },
        { sno: 11, name: "Aceclovir injection", packing: "vial", quantity: "50,000 vials" },
        { sno: 12, name: "Ampicillin 500 mg injection", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 13, name: "Ceftriaxone 250 mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 14, name: "Ceftriaxone 500 mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 15, name: "Ceftriaxone 1 gm", packing: "10 ml vial", quantity: "50,000 vials" },
        { sno: 16, name: "Ceftriaxone 1000 mg + Sulbactam 500 mg", packing: "20 ml vial", quantity: "50,000 vials" },
        { sno: 17, name: "Ceftriaxone 500mg + Sulbactam 250 mg", packing: "10 ml vial", quantity: "50,000 vials" },
        { sno: 18, name: "Ceftriaxone 250 mg + Sulbactam 125 mg", packing: "7.5 ml vial", quantity: "50,000 vials" },
        { sno: 19, name: "Ceftriaxone 125 mg + Sulbactam 62.5mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 20, name: "Ceftriaxone 1 gm + Tazobactam 125 mg", packing: "20 ml vial", quantity: "50,000 vials" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-24 pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full mb-4">
                                <Syringe className="w-4 h-4" />
                                <span className="text-sm font-semibold">Injectable Pharmaceuticals</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Injectable Products
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                                Sterile injectable formulations manufactured under aseptic conditions for rapid therapeutic action.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Product Table Section */}
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
                                {/* Table Header */}
                                <div className="bg-gradient-to-r from-secondary to-primary px-6 py-4">
                                    <h2 className="text-xl font-bold text-white">Injectable Product List</h2>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-secondary/5 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Packing</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Quantity</th>
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
                                                    className="hover:bg-secondary/5 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.packing}</td>
                                                    <td className="px-4 py-3 text-sm text-slate-600">{product.quantity}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>

                            {/* Quality Note */}
                            <div className="mt-6 bg-secondary/5 rounded-xl p-4 border border-secondary/20">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-secondary">Note:</span> All injectable products are manufactured in state-of-the-art aseptic facilities with Class 100 cleanroom standards, ensuring sterility and patient safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        {/* Product 1: Emstron */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-sm">
                                        <div className="absolute inset-0 bg-cyan-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_18_33 PM.png"
                                            alt="Emstron – Ondansetron Injection USP"
                                            className="relative z-10 w-full drop-shadow-md rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Emstron – Ondansetron Injection USP</h3>
                                        <p className="text-cyan-600 font-medium text-base">Relief from Nausea and Vomiting</p>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                        Emstron contains ondansetron, a selective serotonin 5-HT3 receptor antagonist. It specifically targets and blocks serotonin to prevent nausea and vomiting caused by chemotherapy, radiation therapy, or surgery.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-4 border-t border-slate-100 pt-4">
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Category</span>
                                            <span className="text-slate-600 text-sm">Injections</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Administration</span>
                                            <span className="text-slate-600 text-sm">Healthcare Professional</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product 2: Lidocaine */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-sm">
                                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_20_40 PM.png"
                                            alt="Lidocaine and Adrenaline B.P Injection"
                                            className="relative z-10 w-full drop-shadow-md rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Lidocaine and Adrenaline B.P Injection</h3>
                                        <p className="text-cyan-600 font-medium text-base">Dental Anesthesia (1.8ml Cartridge)</p>
                                    </div>
                                    <ul className="space-y-2 mb-6 text-slate-600 text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            Gold Standard in dental anaesthesia
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            2% lidocaine with 1:80,000 epinephrine
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            Terminal sterilization for safe use
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            100% latex-free & Blister packed
                                        </li>
                                    </ul>
                                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Composition</span>
                                            <span className="text-slate-600 text-sm">Lidocaine + Adrenaline</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Form</span>
                                            <span className="text-slate-600 text-sm">Injection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product 3: Peg L Asparaginase */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-sm">
                                        <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_23_44 PM.png"
                                            alt="Peg L Asparaginase Injection"
                                            className="relative z-10 w-full drop-shadow-md rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Peg L Asparaginase Injection</h3>
                                        <p className="text-cyan-600 font-medium text-base">Advanced Oncology Treatment</p>
                                    </div>
                                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                        Harnessing the power of pegylated L-asparaginase, this potent formulation targets cancer at its core.
                                    </p>

                                    <h4 className="text-base font-bold text-slate-900 mb-2">Key Benefits:</h4>
                                    <ul className="space-y-2 mb-6 text-slate-600 text-sm">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Efficiency:</strong> Maximize anti-cancer impact.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Reduced Toxicity:</strong> Lower toxicity levels.</span>
                                        </li>
                                    </ul>

                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-4 border-t border-slate-100 pt-4">
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Treatment</span>
                                            <span className="text-slate-600 text-sm">Acute Lymphocytic Leukemia</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-900">Manufacturer</span>
                                            <span className="text-slate-600 text-sm">G J Pharmaceuticals LLP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Products List for Injections Section */}
                <section className="py-12 border-t border-slate-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto space-y-10">

                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-slate-900">Products List for Injections</h2>
                                <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
                            </div>

                            <div className="space-y-8">
                                {/* Item 1: Iron Sucrose */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Iron Sucrose 2.5 ml</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                                        Discover the power of Pharmaceutical Injections: Iron Sucrose 2.5 ml by G J Pharmaceuticals LLP.
                                    </p>
                                    <Link to="/products/pharmaceutical/injections/iron-sucrose" className="inline-flex items-center text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors group">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </motion.div>

                                {/* Item 2: Gentamicin */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Gentamicin 30 ml injection</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                                        Discover the power of Pharmaceutical Injections: Gentamicin 30 ml injection by G J Pharmaceuticals LLP.
                                    </p>
                                    <Link to="/products/pharmaceutical/injections/gentamicin" className="inline-flex items-center text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors group">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Injections;
