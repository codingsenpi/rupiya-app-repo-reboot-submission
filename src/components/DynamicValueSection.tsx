"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Award,
    Satellite,
    BarChart,
    Sprout,
    Users,
    CheckCircle,
    ShieldCheck,
    LineChart,
    Coins,
    AreaChart,
    HeartHandshake
} from 'lucide-react';

const audienceValueProps = {
  Farmer: [
    { icon: ArrowUpRight, title: 'Higher Yield & Reduced Cost', description: 'Increase profitability with advanced soil insights and optimized inputs.' },
    { icon: Award, title: '₹800 per Carbon Credit', description: 'Earn additional income by sequestering carbon in your soil.' },
    { icon: Satellite, title: 'Satellite Soil Testing', description: 'Get precise soil health data without manual sampling.' },
  ],
  FPO: [
    { icon: Coins, title: 'Access to Carbon Revenue', description: 'Unlock a new revenue stream for your associated farmers through carbon credits.' },
    { icon: Sprout, title: 'Supply Chain Solutions', description: 'Streamline your procurement and logistics with our integrated platform.' },
    { icon: Users, title: 'Training & Support', description: 'Empower your farmers with the latest in sustainable agriculture practices.' },
  ],
  Buyer: [
    { icon: CheckCircle, title: 'Quality Consistency', description: 'Source high-quality, residue-free produce that meets global standards.' },
    { icon: ShieldCheck, title: '100% Traceability', description: 'Track produce from farm to fork with our blockchain-enabled system.' },
    { icon: BarChart, title: 'Verified Certifications', description: 'Access produce with certifications for organic and sustainable practices.' },
  ],
  Investor: [
    { icon: AreaChart, title: 'Impact: 500k Hectares', description: 'Invest in a platform with a proven, scalable impact on Indian agriculture.' },
    { icon: LineChart, title: 'High-Growth ESG Asset', description: 'Participate in the rapidly growing market for sustainable and carbon-negative assets.' },
    { icon: HeartHandshake, title: 'Carboneg Partnership', description: 'Leveraging our partnership with European carbon markets for maximum returns.' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const DynamicValueSection = ({ activeAudience }) => {
    const values = audienceValueProps[activeAudience];

    return (
        <section className="py-24 px-4">
            <motion.div
                key={activeAudience}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                {values.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg shadow-emerald-900/5 border border-white/80"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-6">
                            <item.icon className="text-emerald-600" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default DynamicValueSection;

