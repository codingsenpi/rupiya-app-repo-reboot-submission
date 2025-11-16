"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Sprout, Leaf, LineChart, BarChart, Truck } from 'lucide-react';

export default function ImpactPage() {
    return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen text-slate-800">
            <Header />
            <main className="max-w-7xl mx-auto py-16 px-4">
                <h1 className="text-5xl font-extrabold text-center mb-8">Our Impact: Driving Sustainable Change</h1>
                <p className="text-lg text-center text-slate-600 mb-12">
                    See how Rupiya.app is making a tangible difference in agriculture and climate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <Users className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">50,000+</h2>
                        <p className="text-xl text-emerald-700">Farmers Empowered</p>
                        <p className="text-slate-600 mt-4">Directly improving livelihoods and farming practices across India.</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <Sprout className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">500k+</h2>
                        <p className="text-xl text-emerald-700">Hectares Under Management</p>
                        <p className="text-slate-600 mt-4">Promoting regenerative agriculture on a massive scale.</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <Leaf className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">100%</h2>
                        <p className="text-xl text-emerald-700">Residue-Free Produce</p>
                        <p className="text-slate-600 mt-4">Ensuring healthier food for consumers and a cleaner environment.</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <LineChart className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Growth Graphs</h2>
                        <p className="text-xl text-emerald-700">Exponential Adoption</p>
                        <p className="text-slate-600 mt-4">Tracking our rapid growth in farmer onboarding and carbon sequestration.</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <Truck className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Supply Chain Achievements</h2>
                        <p className="text-xl text-emerald-700">Reduced Wastage by 25%</p>
                        <p className="text-slate-600 mt-4">Optimizing logistics from farm-gate to institutional buyers.</p>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5 text-center">
                        <BarChart className="text-emerald-600 mx-auto mb-4" size={48} />
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Collaborations & MoUs</h2>
                        <p className="text-xl text-emerald-700">Govt. & Private Sector</p>
                        <p className="text-slate-600 mt-4">Partnering with key players to amplify our impact.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">Farmer Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                            <p className="italic text-slate-700 mb-4">"Rupiya.app has transformed my farm. My yields are up, costs are down, and the carbon credit income is a game-changer!"</p>
                            <p className="font-semibold text-emerald-700">- Rajesh Kumar, Farmer</p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-emerald-900/5">
                            <p className="italic text-slate-700 mb-4">"The advisory services are top-notch. I've learned so much about sustainable farming, and my soil has never been healthier."</p>
                            <p className="font-semibold text-emerald-700">- Priya Sharma, Farmer</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
