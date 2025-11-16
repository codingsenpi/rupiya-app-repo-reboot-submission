"use client";

import { Satellite, BrainCircuit, FlaskConical, ShieldCheck, Users } from 'lucide-react';

const ecosystemSteps = [
    { icon: Satellite, title: "Satellite Soil Test" },
    { icon: BrainCircuit, title: "AI Advisory" },
    { icon: FlaskConical, title: "35+ Residue-Free Inputs" },
    { icon: ShieldCheck, title: "Parametric Insurance" },
    { icon: Users, title: "Farm Gate Buy-back" },
];

const EcosystemFlow = () => (
    <section className="py-24 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">A Complete Residue-Free Ecosystem</h2>
            <p className="text-lg text-slate-600">From precision testing to guaranteed buy-back, we provide an end-to-end solution for profitable and sustainable agriculture.</p>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-10 left-0 w-full h-0.5 bg-teal-200"></div>
            <div className="relative flex justify-between">
                {ecosystemSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-40">
                        <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-full border-4 border-white shadow-md">
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <step.icon className="text-emerald-600" size={32} />
                            </div>
                        </div>
                        <h3 className="mt-4 font-semibold text-slate-700">{step.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default EcosystemFlow;
