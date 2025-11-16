"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolutionPage() {
    return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen text-slate-800">
            <Header />
            <main className="max-w-7xl mx-auto py-16 px-4">
                <h1 className="text-5xl font-extrabold text-center mb-8">Our Solution: Residue-Free Farming</h1>
                <p className="text-lg text-center text-slate-600 mb-12">
                    Empowering farmers with sustainable practices and cutting-edge technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Satellite-based Soil Testing</h2>
                        <p className="text-slate-700">
                            Utilize advanced satellite imagery and AI to get precise, real-time insights into your soil health. Understand nutrient levels, moisture content, and potential deficiencies without the need for manual sampling. This leads to optimized fertilizer use and healthier crops.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">AI-driven Crop Monitoring & Traceability</h2>
                        <p className="text-slate-700">
                            Our AI systems continuously monitor your crops, detecting early signs of disease or pest infestation. Coupled with blockchain technology, we provide 100% traceability from farm to fork, ensuring transparency and quality assurance for consumers and buyers.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Agronomical Advisory</h2>
                        <p className="text-slate-700">
                            Access expert advice through our software platform and on-ground agronomists. Get personalized recommendations for crop management, pest control, and sustainable farming techniques tailored to your specific farm and crop needs.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">35+ Residue-Free Agriculture Inputs</h2>
                        <p className="text-slate-700">
                            We offer a comprehensive range of high-quality, residue-free inputs, including bio-fertilizers, bio-pesticides, and organic growth promoters. These products ensure healthy crop growth while eliminating harmful chemical residues.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Parametric Insurance</h2>
                        <p className="text-slate-700">
                            Protect your investment with our innovative parametric insurance solutions. Covering risks like excess rain, low/high humidity, temperature shocks, and wildlife damage, our policies provide quick payouts based on predefined triggers, ensuring financial stability.
                        </p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Farm Credit Support & Buy-back</h2>
                        <p className="text-slate-700">
                            Gain access to essential farm credit to manage your operations efficiently. Additionally, benefit from our guaranteed buy-back program directly from your farm gate, eliminating middlemen and ensuring fair prices for your produce.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
