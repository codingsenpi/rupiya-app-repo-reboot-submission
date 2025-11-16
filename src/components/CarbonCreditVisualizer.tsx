"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Cloud, Sprout, Coins, CheckCircle } from 'lucide-react';

const CREDIT_VALUE_INR = 800;

const CarbonCreditVisualizer = () => {
    const [counter, setCounter] = useState(1287);
    const co2Controls = useAnimation();
    const coinControls = useAnimation();
    
    const countMotionValue = useMotionValue(1287);
    const roundedCount = useTransform(countMotionValue, (v) => Math.round(v).toLocaleString());

    const inrMotionValue = useMotionValue(1287 * CREDIT_VALUE_INR);
    const formattedInr = useTransform(inrMotionValue, (v) => `≈ ₹${Math.round(v).toLocaleString('en-IN')}`);

    useEffect(() => {
        const countTransition = { type: 'spring', stiffness: 100, damping: 20 };
        countMotionValue.set(counter, countTransition);
        inrMotionValue.set(counter * CREDIT_VALUE_INR, countTransition);
    }, [counter, countMotionValue, inrMotionValue]);

    useEffect(() => {
        const sequence = async () => {
            co2Controls.set({ y: 0, opacity: 1 });
            coinControls.set({ y: 180, opacity: 0 });

            while (true) {
                await co2Controls.start({
                    y: 120,
                    opacity: 0,
                    transition: { duration: 2, ease: 'easeIn' }
                });

                await coinControls.start({
                    y: [180, 130, 20],
                    opacity: [1, 1, 0],
                    transition: { duration: 2.5, ease: 'easeInOut', times: [0, 0.2, 1] }
                });
                
                setCounter(c => c + 1);
                
                await new Promise(resolve => setTimeout(resolve, 500));
                
                co2Controls.set({ y: 0, opacity: 1 });
                coinControls.set({ y: 180, opacity: 0 });
            }
        };
        sequence();
    }, [co2Controls, coinControls]);

    return (
        <section className="bg-slate-900 text-white py-24 px-4 rounded-t-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        From <span className="text-lime-400">Carbon</span> to <span className="text-lime-400">Cash</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8">
                        Our platform transforms sustainable farming practices into a verifiable, high-value asset. By adopting regenerative techniques, farmers increase Soil Organic Carbon (SOC), which we verify and mint as carbon credits for sale on global markets.
                    </p>
                    <div className="space-y-4 text-left">
                        <div className="flex items-start space-x-4"><CheckCircle className="text-lime-400 mt-1 flex-shrink-0" /><span><span className="font-bold">Regenerative Farming:</span> Adopt practices that enrich the soil.</span></div>
                        <div className="flex items-start space-x-4"><CheckCircle className="text-lime-400 mt-1 flex-shrink-0" /><span><span className="font-bold">Soil Organic Carbon:</span> Sequester CO2 directly into your farmland.</span></div>
                        <div className="flex items-start space-x-4"><CheckCircle className="text-lime-400 mt-1 flex-shrink-0" /><span><span className="font-bold">Verified Credit:</span> We quantify and certify your carbon capture.</span></div>
                        <div className="flex items-start space-x-4"><CheckCircle className="text-lime-400 mt-1 flex-shrink-0" /><span><span className="font-bold">New Income:</span> Sell credits and earn a new form of revenue.</span></div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-700">
                        <p className="text-slate-400"><span className="font-bold text-white">Our Commitment:</span> To onboard 500,000 hectares and 50,000+ farmers into our carbon program over the next 3 years.</p>
                    </div>
                </div>
                <div className="relative h-96 bg-slate-800/50 rounded-2xl p-8 flex flex-col items-center justify-between">
                    <div className="w-full flex justify-center">
                        <Cloud className="text-slate-400" size={60} />
                        <motion.div 
                            className="absolute text-xs font-bold text-slate-300 bg-slate-700 px-2 py-1 rounded-full"
                            animate={co2Controls}
                        >
                            CO₂
                        </motion.div>
                    </div>
                    
                    <div className="relative">
                        <Sprout className="text-emerald-400" size={64} />
                    </div>

                    <div className="w-full h-1/3 bg-yellow-900/30 rounded-b-2xl flex items-center justify-center">
                        <span className="text-yellow-600 font-mono">Soil Layer</span>
                        <motion.div 
                            className="absolute"
                            animate={coinControls}
                        >
                            <Coins className="text-yellow-400" size={32} />
                        </motion.div>
                    </div>

                    <div className="absolute top-4 right-4 text-right">
                        <div className="text-sm text-slate-300">Credits Generated</div>
                        <motion.h3 className="text-3xl font-bold text-lime-400">{roundedCount}</motion.h3>
                        <motion.h3 className="text-3xl font-bold text-emerald-400">{formattedInr}</motion.h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarbonCreditVisualizer;
