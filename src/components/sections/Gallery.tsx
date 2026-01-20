"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Gallery() {
    return (
        <section className="py-24 px-4 overflow-hidden relative" id="gallery">
            {/* Static Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/Rectangle 20.png"
                    alt="Gallery Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Soft Overlay for blending */}
            <div className="absolute inset-0 bg-[#FFFBF2]/30 -z-10" />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative text-center mb-10 z-10"
            >
                {/* Curved Gold Line */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-[600px] h-32 pointer-events-none opacity-80">
                    <svg viewBox="0 0 400 100" fill="none" className="w-full h-full stroke-[#C5A038] stroke-[1px]">
                        <motion.path
                            d="M0 60 Q 150 10 200 50 T 400 40"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                <h2 className="text-7xl md:text-9xl font-script text-[#1a1a1a] relative inline-block">
                    Gallery
                    {/* Pink Sparkle on Title */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -top-4 -right-12 text-[#FFC0CB]"
                    >
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>
                    </motion.div>
                </h2>
                {/* Arabic Subtitle */}
                <p className="mt-4 text-xl text-[#8B7355] font-arabic tracking-wide">معرض الصور</p>
            </motion.div>

            {/* Collage Container */}
            <div className="relative w-full max-w-7xl mx-auto h-[800px] md:h-[1000px]">

                {/* Decorative background pearls */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl opacity-60"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-[#fff5e6] rounded-full blur-3xl opacity-50"
                />

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 gap-4 lg:hidden pb-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white"
                        >
                            <Image src={`https://placehold.co/400x600/f0eee6/808080?text=Gallery+${i}`} alt="Gallery" fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Collage - Exact 8 Images Layout */}
                <div className="hidden lg:block relative w-full h-full transform scale-90 xl:scale-100 origin-top">

                    {/* 1. Top Center - Beige Abaya */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-64 h-80 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hover:scale-105 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x600/e6e6e6/666666?text=Beige+Abaya" alt="Beige Abaya" fill className="object-cover" />
                    </motion.div>

                    {/* 2. Top Left - Sewing Machine */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        animate={{ y: [0, -10, 0] }}
                        className="absolute left-[25%] top-[10%] w-60 h-60 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10 hover:z-30 hover:rotate-2 transition-transform duration-500"
                        style={{ transition: "transform 0.5s, z-index 0s" }} // Overriding framer motion transition for hover
                    >
                        <Image src="https://placehold.co/400x400/f2f2f2/999999?text=Sewing" alt="Sewing" fill className="object-cover" />
                    </motion.div>

                    {/* 3. Top Right - Two Women */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        animate={{ y: [0, -12, 0] }}
                        className="absolute right-[25%] top-[10%] w-60 h-80 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white z-10 hover:z-30 hover:-rotate-2 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x600/e0e0e0/777777?text=Two+Women" alt="Women" fill className="object-cover" />
                    </motion.div>

                    {/* 4. Left Middle - White Rack */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute left-[15%] top-[35%] w-64 h-96 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x700/d9d9d9/555555?text=Rack" alt="Rack" fill className="object-cover" />
                    </motion.div>

                    {/* 5. Right Middle - Haram Scene */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute right-[15%] top-[35%] w-64 h-80 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hover:scale-105 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x600/f5f5f5/888888?text=Haram" alt="Haram" fill className="object-cover" />
                    </motion.div>

                    {/* 6. Bottom Left - Hands Cutting */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        animate={{ y: [0, -8, 0] }}
                        className="absolute left-[28%] bottom-[15%] w-60 h-60 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-30 hover:rotate-2 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x400/ebebeb/666666?text=Cutting" alt="Cutting" fill className="object-cover" />
                    </motion.div>

                    {/* 7. Bottom Center - Three Girls */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-64 h-96 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white z-40 hover:scale-105 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x700/f0f0f0/999999?text=Three+Girls" alt="Girls" fill className="object-cover" />
                    </motion.div>

                    {/* 8. Bottom Right - Clothes Rack */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        animate={{ y: [0, -10, 0] }}
                        className="absolute right-[28%] bottom-[15%] w-60 h-80 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hover:-rotate-2 transition-transform duration-500"
                    >
                        <Image src="https://placehold.co/400x600/e6e6e6/777777?text=Rack+2" alt="Rack 2" fill className="object-cover" />
                    </motion.div>

                    {/* Decorative Stars */}
                    <div className="absolute left-[10%] top-[25%] text-[#FFC0CB] animate-bounce delay-700">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                    </div>
                    <div className="absolute right-[10%] bottom-[10%] text-[#FFC0CB] animate-pulse">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                    </div>

                </div>
            </div>
        </section>
    );
}

