"use client";

import { Leaf } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto">
        <div className="mx-4 md:mx-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg shadow-emerald-900/5">
            <div className="flex items-center justify-between p-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Leaf className="text-emerald-600" size={28} />
                    <span className="font-bold text-xl text-slate-800">Rupiya.app</span>
                </Link>
                <nav className="hidden lg:flex items-center space-x-8">
                    <Link href="/solution" className="text-slate-600 hover:text-emerald-700 transition-colors">Solution</Link>
                    <Link href="/carbon-credits" className="text-slate-600 hover:text-emerald-700 transition-colors">Carbon Credits</Link>
                    <Link href="/impact" className="text-slate-600 hover:text-emerald-700 transition-colors">Impact</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="hidden sm:inline text-slate-600 hover:text-emerald-700 transition-colors">Login</Link>
                    <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                        Join Revolution
                    </button>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
