"use client";

import React from 'react';
import { Scissors, Ruler, Shirt, Sparkles, ArrowRight, CheckCircle2, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Services() {
    return (
        <section className="py-24 bg-[#FFFBF2] relative overflow-hidden" dir="rtl" id="services">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A038]/30 to-transparent" />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-40 w-80 h-80 bg-[#C5A038]/5 rounded-full blur-3xl"
            />

            {/* Header */}
            <SectionWrapper className="text-center max-w-3xl mx-auto px-4 mb-20 relative z-10">
                <span className="text-[#8B6F21] font-bold tracking-widest text-sm uppercase mb-3 block">تميزي معنا</span>
                <h2 className="text-4xl md:text-5xl font-arabic font-bold text-[#5A4A42] mb-6">
                    باقة خدماتنا <span className="text-[#C5A038]">المتكاملة</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    نقدم لكِ مجموعة شاملة من خدمات الخياطة الراقية، حيث تمتزج خبرة السنوات مع جودة التنفيذ لنضمن لكِ إطلالة تليق بكِ في كل المناسبات.
                </p>
            </SectionWrapper>

            {/* Services Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10"
            >
                <ServiceCard
                    title="أزياء الحج والعمرة"
                    description="تصميم وتنفيذ ملابس إحرام وصلاة مريحة، تراعي الخصوصية وتوفر لكِ الراحة التامة لأداء المناسك."
                    icon={<Sparkles className="w-8 h-8" />}
                />
                <ServiceCard
                    title="خياطة الجلابيات"
                    description="تشكيلة واسعة من الجلابيات العصرية والتقليدية، نصممها بذوق رفيع يناسب جميع الأذواق والمناسبات."
                    icon={<Shirt className="w-8 h-8" />}
                />
                <ServiceCard
                    title="تعديل الملابس"
                    description="خدمات احترافية لتعديل المقاسات، التقصير، والتضييق لتبدو ملابسك وكأنها صممت خصيصاً لكِ."
                    icon={<Ruler className="w-8 h-8" />}
                />
                <ServiceCard
                    title="خياطة نسائية شاملة"
                    description="متخصصون في تنفيذ كافة الأزياء النسائية بخبرة تمتد لأكثر من 10 سنوات في كبرى المصانع."
                    icon={<Scissors className="w-8 h-8" />}
                />
            </motion.div>

            {/* Value Proposition Section */}
            <SectionWrapper delay={0.4} className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-xl border border-gold-primary/10 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF8E7] rounded-bl-full -mr-10 -mt-10 opacity-50" />

                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h3 className="text-3xl font-bold text-[#5A4A42]">لماذا تختارين خياطة رواء؟</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                لأننا نؤمن أن الخياطة هي فن وعناية بالتفاصيل قبل أن تكون مهنة. خبرتنا التي تتجاوز الـ 10 سنوات تضمن لكِ الحصول على قطعة متقنة الصنع تدوم طويلاً.
                            </p>

                            <div className="space-y-4">
                                <BenefitItem text="دقة متناهية في المقاسات والتشطيبات" />
                                <BenefitItem text="التزام تام بمواعيد التسليم المتفق عليها" />
                                <BenefitItem text="خبرة عملية طويلة في مصانع الخياطة المحترفة" />
                            </div>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-[#5A4A42] hover:bg-[#8B6F21] text-white px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg group mt-4"
                            >
                                <span>احجزي موعدك الآن</span>
                                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <StatsCard number="+10" label="سنوات خبرة" icon={<Clock />} delay={0.1} />
                                <StatsCard number="100%" label="جودة مضمونة" icon={<CheckCircle2 />} delay={0.2} />
                                <StatsCard number="+500" label="عميلة سعيدة" icon={<ThumbsUp />} delay={0.3} />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="bg-[#FAEED1] rounded-2xl p-6 flex flex-col items-center justify-center text-center text-[#5A4A42]"
                                >
                                    <span className="font-bold text-lg">تميزي معنا</span>
                                    {/* Removed sparkle emoji */}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}

function ServiceCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(197,160,56,0.15)" }}
            className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 border border-transparent hover:border-[#C5A038]/20 group h-full flex flex-col cursor-default"
        >
            <div className="w-16 h-16 bg-[#FFF8E7] text-[#C5A038] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#5A4A42] mb-4 group-hover:text-[#C5A038] transition-colors">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm flex-grow mb-6">
                {description}
            </p>
            <div className="flex items-center text-[#C5A038] font-medium text-sm group-hover:gap-2 transition-all">
                <span>المزيد من التفاصيل</span>
                <ArrowRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all" />
            </div>
        </motion.div>
    )
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#E5F6E5] flex items-center justify-center text-green-600 flex-shrink-0">
                <CheckCircle2 size={14} />
            </div>
            <span className="text-[#5A4A42] font-medium">{text}</span>
        </div>
    )
}

function StatsCard({ number, label, icon, delay }: { number: string, label: string, icon: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
        >
            <div className="text-[#C5A038] mb-2 scale-110 opacity-80">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <span className="text-3xl font-bold text-[#5A4A42] mb-1">{number}</span>
            <span className="text-gray-500 text-sm">{label}</span>
        </motion.div>
    )
}

