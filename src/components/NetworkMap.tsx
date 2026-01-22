"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// --- CONFIGURATION ---
// Extended data with flags and updated positions
const warehouses = [
    { id: 1, name: "India (HQ)", top: "42%", left: "68%", flagCode: "in" },
    { id: 2, name: "USA", top: "32%", left: "20%", flagCode: "us" },
    { id: 3, name: "United Kingdom", top: "24%", left: "46%", flagCode: "gb" },
    { id: 4, name: "UAE", top: "40%", left: "55%", flagCode: "ae" },
    { id: 5, name: "Singapore", top: "52%", left: "76%", flagCode: "sg" },
    { id: 6, name: "Australia", top: "75%", left: "85%", flagCode: "au" },
    { id: 7, name: "Germany", top: "26%", left: "49%", flagCode: "de" },
    { id: 8, name: "China", top: "35%", left: "72%", flagCode: "cn" },
    { id: 9, name: "Brazil", top: "65%", left: "32%", flagCode: "br" },
    { id: 10, name: "South Africa", top: "70%", left: "52%", flagCode: "za" },
];

export default function NetworkMap() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 text-sm font-bold uppercase tracking-widest bg-blue-50 mb-4 inline-block">
                        Global Presence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F3F34]">
                        Our Worldwide <br /> Warehouse Network
                    </h2>
                </div>

                {/* Map Container */}
                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Map Image Container */}
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl border-2 border-slate-900 bg-white shadow-2xl">
                        {/* The Map Image */}
                        <img
                            src="/map.png"
                            alt="World Map"
                            className="w-full h-full object-contain opacity-90"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

                        {/* Render Points */}
                        {warehouses.map((point) => (
                            <MapPoint key={point.id} point={point} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- HELPER COMPONENT: THE INTERACTIVE DOT ---
function MapPoint({
    point,
}: {
    point: { name: string; top: string; left: string; flagCode: string };
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute z-10"
            style={{ top: point.top, left: point.left }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Dot Group */}
            <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group w-10 h-10">
                {/* 1. Pulsing Ring Animation */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-20 duration-1000"></span>

                {/* 2. Solid Outer Ring */}
                <div className="relative h-5 w-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-125 border border-red-200">
                    {/* 3. Inner Dot */}
                    <div className="h-3 w-3 rounded-full bg-[#8B0000]" />
                </div>

                {/* 4. Tooltip (Reveals on Hover) */}
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? -40 : 10,
                        scale: isHovered ? 1 : 0.8,
                    }}
                    className="absolute bottom-full mb-3 whitespace-nowrap z-30 pointer-events-none"
                    style={{ pointerEvents: "none" }}
                >
                    <div className="bg-[#0F3F34] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-xl relative flex items-center gap-3 border border-white/10 min-w-max">
                        <img
                            src={`https://flagcdn.com/w40/${point.flagCode}.png`}
                            srcSet={`https://flagcdn.com/w80/${point.flagCode}.png 2x`}
                            width="24"
                            height="16"
                            alt={point.name}
                            className="rounded-sm object-cover shadow-sm h-auto w-6"
                        />
                        <span className="tracking-wide text-nowrap">{point.name}</span>
                        {/* Little Triangle Arrow */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0F3F34] rotate-45 border-r border-b border-white/10"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
