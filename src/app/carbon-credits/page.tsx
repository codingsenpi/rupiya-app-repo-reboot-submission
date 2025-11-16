"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function CarbonCreditsPage() {
    return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen text-slate-800">
            <Header />
            <main className="max-w-7xl mx-auto py-16 px-4">
                <h1 className="text-5xl font-extrabold text-center mb-8">Carbon Credits: Turn Sustainability into Income</h1>
                <p className="text-lg text-center text-slate-600 mb-12">
                    Learn how regenerative agriculture can help you earn additional income by fighting climate change.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">What is a Carbon Credit?</h2>
                        <p className="text-slate-700 mb-4">
                            A carbon credit is a measurable, verifiable permit that allows the holder to emit one tonne of carbon dioxide equivalent (CO2e) from industrial processes. Essentially, it's a certificate representing the removal or reduction of one tonne of CO2e from the atmosphere.
                        </p>
                        <p className="text-slate-700">
                            These credits are traded on carbon markets, providing an economic incentive for projects that reduce greenhouse gas emissions.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">How Regenerative Agriculture Generates Credits</h2>
                        <p className="text-slate-700 mb-4">
                            Regenerative farming practices, such as no-till farming, cover cropping, and diverse crop rotations, significantly increase the amount of organic carbon stored in the soil. This process, known as carbon sequestration, effectively removes CO2 from the atmosphere.
                        </p>
                        <p className="text-slate-700">
                            Our platform measures and verifies this increase in Soil Organic Carbon (SOC), converting it into tradable carbon credits.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Your Income: ₹800 per Carbon Credit</h2>
                        <p className="text-slate-700 mb-4">
                            For every verified carbon credit generated through your regenerative farming practices, you, the farmer, receive an additional income of ₹800. This provides a direct financial incentive for sustainable agriculture and helps improve farmer livelihoods.
                        </p>
                        <p className="text-slate-700">
                            This new revenue stream complements your traditional crop income, making your farm more resilient and profitable.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Our Commitment & Partnership</h2>
                        <p className="text-slate-700 mb-4">
                            Rupiya.app is committed to training and onboarding 5,00,000 hectares and over 50,000 farmers into carbon credit generation over the next 3 years.
                        </p>
                        <p className="text-slate-700">
                            We have an exclusive partnership with <span className="font-bold text-emerald-800">Carboneg (Europe)</span>, a leading carbon market player, ensuring a robust and reliable market for your generated credits.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">How Soil Organic Carbon Increases</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                        Through practices like cover cropping, reduced tillage, and diverse rotations, organic matter accumulates in the soil, trapping atmospheric CO2.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                            <CheckCircle /> <span>Cover Cropping</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                            <CheckCircle /> <span>Reduced Tillage</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                            <CheckCircle /> <span>Crop Rotation</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                            <CheckCircle /> <span>Organic Fertilizers</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
