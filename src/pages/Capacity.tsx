
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageWrapper from '@/components/PageWrapper';
import Seo from '@/components/Seo';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Capacity = () => {
    const sections = [
        {
            title: "Capsule Manufacturing",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Powder Filling", capacity: "40 million sachet per annum (dosage range: 0.5 to 135mg)" },
                { no: 2, product: "Hard Capsule Filling", capacity: "750 million per annum" },
                { no: 3, product: "Blister Packing", capacity: "750 million per annum" },
                { no: 4, product: "Soft Capsule Production", capacity: "90 million per annum" },
                { no: 5, product: "Blister packing (soft caps)", capacity: "350 million per annum" },
            ]
        },
        {
            title: "Tablets Manufacturing",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Tablets", capacity: "350 million per annum (dosage ranging 65mg to 1500 mg)" },
                { no: 2, product: "Granulation", capacity: "1.2 tons/ day" },
                { no: 3, product: "Compression", capacity: "3 Million Tablets/day" },
                { no: 4, product: "Sugar coating", capacity: "0.5 Million/day" },
                { no: 5, product: "Strip Packing", capacity: "1 Million/day" },
                { no: 6, product: "Blister Packing", capacity: "3 Million Tablets/day" },
            ]
        },
        {
            title: "Dry Syrup and Oral Liquid Manufacturing",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Powder Filling", capacity: "4 million bottles per annum" },
                { no: 2, product: "Oral Liquid", capacity: "7.2 million liters per annum (in volumes of 200ml, 100ml, 60ml and drops)" },
            ]
        },
        {
            title: "Injections (Liquid)",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Ampoule Manufacturing", capacity: "50 million per annum" },
                { no: 2, product: "Vial Manufacturing", capacity: "12 million per annum" },
                { no: 3, product: "Infusion", capacity: "12 million per annum" },
            ]
        },
        {
            title: "Dry Powder & Lyophilized Powder for Injection",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Dry Powder For Injection", capacity: "10 million per annum" },
                { no: 2, product: "Lyophilized Powder for Injection", capacity: "4 million per annum" },
            ]
        },
        {
            title: "Infusions",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Infusion", capacity: "7.5 million per annum (Range: 100ml- 540ml)" },
            ]
        },
        {
            title: "Dental cartridges",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Glass Cartridges", capacity: "15 million per annum" },
            ]
        },
        {
            title: "Ointment/Cream/Emulsion/Lotion",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Ointment/Cream", capacity: "10 million per annum" },
                { no: 1, product: "Emulsion/Lotion", capacity: "10 million per annum" },
            ]
        },
        {
            title: "Aerosol/Liquid Spray",
            columns: ["No", "Product", "Capacity"],
            data: [
                { no: 1, product: "Aerosol/Liquid Spray", capacity: "3 million per annum" },
            ]
        }
    ];

    return (
        <PageWrapper>
            <Seo
                title="Annual Manufacturing Capacity"
                description="Detailed annual manufacturing capacity for capsules, tablets, injections, and more at G J Pharmaceuticals LLP."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden flex items-center justify-center min-h-[500px]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/capacity-hero.png"
                        alt="Manufacturing Facility Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Capacity
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Capacity Tables */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                            Manufacturing Departments have the following facilities and Capacity per annum:
                        </h2>
                    </motion.div>

                    <div className="space-y-16">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 border-b border-primary/10">
                                    <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                                </div>
                                <div className="p-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent border-slate-100">
                                                {section.columns.map((col, i) => (
                                                    <TableHead key={i} className="font-bold text-slate-900">{col}</TableHead>
                                                ))}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {section.data.map((row: any, i) => (
                                                <TableRow key={i} className="hover:bg-slate-50 border-slate-100">
                                                    <TableCell className="font-medium">{row.no}</TableCell>
                                                    <TableCell>{row.product}</TableCell>
                                                    <TableCell className="font-semibold text-slate-700">{row.capacity}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </PageWrapper>
    );
};

export default Capacity;
