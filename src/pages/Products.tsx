import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTASection';
import { Pill, Syringe, Droplets, TestTube, Leaf, Package, Beaker, FlaskConical } from 'lucide-react';

const productCategories: Record<string, {
  title: string;
  description: string;
  icon: any;
  products: { name: string; description: string; image?: string }[];
}> = {
  pharmaceutical: {
    title: 'Pharmaceutical Products',
    description: 'Comprehensive range of pharmaceutical formulations including tablets, capsules, syrups, injections, and more.',
    icon: Pill,
    products: [
      { name: 'Tablets & Capsules', description: 'Wide range of oral solid dosage forms for various therapeutic areas.' },
      { name: 'Cardio Care', description: 'Cardiovascular medicines for heart health and blood pressure management.' },
      { name: 'Syrups & Suspensions', description: 'Liquid oral formulations for easy administration.' },
      { name: 'Injections', description: 'Injectable formulations including vials and ampoules.' },
      { name: 'Soft Gel Capsules', description: 'Specialized soft gelatin capsules for enhanced absorption.' },
      { name: 'Suppositories', description: 'Rectal and vaginal suppositories for targeted delivery.' },
      { name: 'IV Fluids', description: 'Intravenous solutions for fluid replacement and medication delivery.' },
      { name: 'Anticancer Drugs', description: 'Oncology products for cancer treatment protocols.' },
      { name: 'Diagnostic Kits', description: 'In-vitro diagnostic products for disease detection.' },
    ],
  },
  nutraceutical: {
    title: 'Nutraceuticals & Food Supplements',
    description: 'Premium quality dietary supplements, vitamins, minerals, and functional foods for optimal health and wellness.',
    icon: TestTube,
    products: [
      { name: 'Multivitamins', description: 'Complete vitamin and mineral formulations for daily nutrition.' },
      { name: 'Protein Supplements', description: 'High-quality protein powders and bars for fitness enthusiasts.' },
      { name: 'Omega Fatty Acids', description: 'Essential fatty acid supplements for heart and brain health.' },
      { name: 'Probiotics', description: 'Gut health supplements with beneficial bacteria strains.' },
      { name: 'Herbal Supplements', description: 'Natural health products from botanical extracts.' },
      { name: 'Sports Nutrition', description: 'Performance supplements for athletes and active individuals.' },
    ],
  },
  herbal: {
    title: 'Herbal & Cosmetic Products',
    description: 'Natural and herbal formulations, cosmetic products with botanical extracts and traditional remedies.',
    icon: Leaf,
    products: [
      { name: 'Ayurvedic Medicines', description: 'Traditional Indian medicine formulations.' },
      { name: 'Herbal Skincare', description: 'Natural skincare products with plant-based ingredients.' },
      { name: 'Hair Care Products', description: 'Herbal shampoos, oils, and treatments for healthy hair.' },
      { name: 'Personal Care', description: 'Natural personal hygiene products.' },
      { name: 'Wellness Products', description: 'Holistic health products for overall well-being.' },
    ],
  },
  foodgrains: {
    title: 'Food Grains, Oil & Spices',
    description: 'Premium quality food grains, edible oils, and authentic spices sourced from trusted suppliers.',
    icon: Package,
    products: [
      { name: 'Basmati Rice', description: 'Premium long-grain aromatic rice varieties.' },
      { name: 'Pulses & Lentils', description: 'High-quality pulses for nutrition and taste.' },
      { name: 'Edible Oils', description: 'Pure vegetable oils for cooking and health.' },
      { name: 'Spice Blends', description: 'Authentic Indian spice mixes and seasonings.' },
      { name: 'Organic Products', description: 'Certified organic grains and spices.' },
    ],
  },
  chemicals: {
    title: 'Industrial & Fine Chemicals',
    description: 'Industrial and fine chemicals meeting stringent quality standards for various applications.',
    icon: Beaker,
    products: [
      { name: 'Active Pharmaceutical Ingredients', description: 'High-purity APIs for drug manufacturing.' },
      { name: 'Intermediates', description: 'Chemical intermediates for pharmaceutical synthesis.' },
      { name: 'Excipients', description: 'Pharmaceutical excipients and additives.' },
      { name: 'Laboratory Reagents', description: 'Analytical grade chemicals for research.' },
      { name: 'Industrial Chemicals', description: 'Bulk chemicals for industrial applications.' },
    ],
  },
};

const Products = () => {
  const { category = 'pharmaceutical' } = useParams<{ category: string }>();
  const currentCategory = productCategories[category] || productCategories.pharmaceutical;
  const Icon = currentCategory.icon;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-8">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-6">
              Our Products
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {currentCategory.title}
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
              {currentCategory.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 section-gap">
            {currentCategory.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FlaskConical className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Products;
