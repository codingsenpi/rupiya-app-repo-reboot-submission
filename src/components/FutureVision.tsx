"use client";

import { Gem, CreditCard, LineChart, Plane } from 'lucide-react';

const futureServices = [
    { icon: Gem, title: "Digital Gold", description: "Securely invest your savings in 24K digital gold, accessible anytime." },
    { icon: CreditCard, title: "Bill Payments", description: "Manage all your utility and bill payments in one place." },
    { icon: LineChart, title: "Credit Access", description: "Get flexible, low-interest loans for your farming needs." },
    { icon: Plane, title: "Travel Bookings", description: "Plan and book your next journey with exclusive offers." },
];

const FutureVision = () => (
    <section className="bg-slate-900 text-white py-24 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Future of Rural Finance</h2>
            <p className="text-lg text-slate-300">We're building a comprehensive financial ecosystem, empowering our users with tools for prosperity.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureServices.map((service, index) => (
                <div 
                    key={index} 
                    className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 flex flex-col justify-between hover:bg-slate-800/80 transition-colors"
                >
                    <div>
                        <div className="bg-slate-700 p-3 rounded-lg mb-4 w-max">
                            <service.icon className="text-lime-400" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-2">{service.title}</h3>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default FutureVision;
