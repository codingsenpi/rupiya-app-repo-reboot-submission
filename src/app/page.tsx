"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudiencePill, { AUDIENCES } from '@/components/AudiencePill';
import DynamicValueSection from '@/components/DynamicValueSection';
import CarbonCreditVisualizer from '@/components/CarbonCreditVisualizer';
import EcosystemFlow from '@/components/EcosystemFlow';
import FutureVision from '@/components/FutureVision';

export default function RupiyaHomePage() {
    const [activeAudience, setActiveAudience] = useState(AUDIENCES[0]);

    return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen text-slate-800">
            <Header />
            <main>
                <section className="text-center pt-20 pb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto tracking-tight">
                        India's Platform for Residue-Free Farming & Carbon Income
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-600">
                        Empowering 50,000+ farmers with satellite tech and financial inclusion.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <AudiencePill activeAudience={activeAudience} setActiveAudience={setActiveAudience} />
                    </div>
                </section>

                <DynamicValueSection activeAudience={activeAudience} />
                
                <div className="relative">
                    <div className="absolute -top-12 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <CarbonCreditVisualizer />
                </div>

                <div className="relative">
                     <div className="absolute -bottom-12 left-0 w-full h-24 bg-gradient-to-b from-slate-900 to-transparent"></div>
                    <EcosystemFlow />
                </div>

                <FutureVision />
            </main>
            <Footer />
        </div>
    );
}