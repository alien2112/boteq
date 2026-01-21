"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, Instagram, Twitter, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DISPLAY_PHONE, LOCATION, WHATSAPP_NUMBER, getInquiryWhatsAppUrl } from "@/lib/constants";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [activeField, setActiveField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus("success");
        setFormState({ name: "", phone: "", email: "", service: "", message: "" });

        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "اتصلي بنا",
            value: DISPLAY_PHONE,
            link: `https://wa.me/${WHATSAPP_NUMBER}`,
            delay: 0.1
        },
        {
            icon: MapPin,
            title: "موقعنا",
            value: LOCATION,
            link: "https://www.google.com/maps?q=26.4660679,50.0415029&z=17&hl=en",
            delay: 0.2
        },
        {
            icon: Clock,
            title: "ساعات العمل",
            value: "من السبت إلى الخميس: 10 ص - 10 م",
            link: null,
            delay: 0.3
        }
    ];

    return (
        <section className="py-24 px-4 md:px-8 bg-[#FFFBF2] relative overflow-hidden" dir="rtl" id="contact">
            {/* Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gold-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gold-primary font-bold tracking-[0.2em] text-sm uppercase mb-3 block"
                    >
                        تواصل معنا
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-arabic font-bold text-[#5A4A42] mb-6"
                    >
                        نحن هنا <span className="text-gold-primary relative inline-block">
                            لخدمتك
                            <svg className="absolute w-full h-2 bottom-1 left-0 text-gold-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        لديك استفسار أو ترغبين في حجز موعد؟ لا تترددي في التواصل معنا. فريقنا جاهز للرد على جميع استفساراتك بأسرع وقت.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="sticky top-24">
                            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                                <h3 className="text-2xl font-bold text-[#5A4A42] mb-10 relative">معلومات التواصل</h3>

                                <div className="space-y-8 relative">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + info.delay }}
                                            className="flex items-start gap-5 group/item"
                                        >
                                            <div className="w-14 h-14 bg-[#FFF8E7] rounded-2xl flex items-center justify-center text-gold-primary shadow-sm shrink-0 group-hover/item:bg-gold-primary group-hover/item:text-white transition-all duration-300">
                                                <info.icon size={26} strokeWidth={1.5} />
                                            </div>
                                            <div className="pt-1">
                                                <p className="text-gold-dark font-bold text-sm mb-2">{info.title}</p>
                                                {info.link ? (
                                                    <a href={info.link} className="text-[#5A4A42] font-medium hover:text-gold-primary transition-colors text-lg leading-relaxed block group-hover/item:translate-x-[-5px] transition-transform duration-300">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-[#5A4A42] font-medium text-lg leading-relaxed">{info.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-gold-primary/10 relative">
                                    <p className="text-sm text-gray-400 mb-6 text-center font-medium">تابعينا على وسائل التواصل</p>
                                    <div className="flex justify-center gap-4">
                                        {[
                                            { Icon: Instagram, href: "#" },
                                            { Icon: Twitter, href: "#" },
                                            { Icon: Facebook, href: "#" }
                                        ].map((social, i) => (
                                            <motion.a
                                                key={i}
                                                href={social.href}
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5A4A42] hover:bg-gold-primary hover:text-white transition-colors shadow-sm hover:shadow-lg border border-gray-100"
                                            >
                                                <social.Icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
                            <h3 className="text-3xl font-bold text-[#5A4A42] mb-10">أرسلي لنا رسالة</h3>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <InputField
                                        label="الاسم الكامل"
                                        id="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="اكتبي اسمك هنا"
                                        activeField={activeField}
                                        setActiveField={setActiveField}
                                    />
                                    <InputField
                                        label="رقم الجوال"
                                        id="phone"
                                        type="tel"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="05xxxxxxxx"
                                        dir="ltr"
                                        className="text-right"
                                        activeField={activeField}
                                        setActiveField={setActiveField}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <InputField
                                        label="البريد الإلكتروني (اختياري)"
                                        id="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="example@mail.com"
                                        dir="ltr"
                                        className="text-right"
                                        activeField={activeField}
                                        setActiveField={setActiveField}
                                    />
                                    <div className="space-y-3 relative group">
                                        <label htmlFor="service" className={`text-sm font-bold transition-colors duration-300 ${activeField === "service" ? "text-gold-primary" : "text-gray-700"}`}>
                                            نوع الخدمة
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                value={formState.service}
                                                onChange={handleChange}
                                                onFocus={() => setActiveField("service")}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-gold-primary/30 focus:shadow-[0_0_0_4px_rgba(197,160,56,0.1)] outline-none transition-all duration-300 appearance-none text-gray-700 cursor-pointer"
                                            >
                                                <option value="" disabled>اختر الخدمة المطلوبة</option>
                                                <option value="ihram">إحرامات حج وعمرة</option>
                                                <option value="jalabiya">خياطة جلابيات</option>
                                                <option value="alteration">تعديل ملابس</option>
                                                <option value="comprehensive">خياطة نسائية شاملة</option>
                                                <option value="other">استفسار عام</option>
                                            </select>
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-gold-primary transition-colors">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 4L6 8L10 4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className={`text-sm font-bold transition-colors duration-300 ${activeField === "message" ? "text-gold-primary" : "text-gray-700"}`}>
                                        الرسالة
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formState.message}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField("message")}
                                        onBlur={() => setActiveField(null)}
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-gold-primary/30 focus:shadow-[0_0_0_4px_rgba(197,160,56,0.1)] outline-none transition-all duration-300 resize-none placeholder-gray-400"
                                        placeholder="اكتبي تفاصيل طلبك أو استفسارك هنا..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={status === "submitting" || status === "success"}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            w-full py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl
                                            ${status === "success" ? "bg-green-500 shadow-green-200" : "bg-[#5A4A42] hover:bg-gold-primary shadow-gold-primary/20"}
                                            ${status === "submitting" ? "opacity-90 cursor-wait" : ""}
                                        `}
                                    >
                                        <AnimatePresence mode="wait">
                                            {status === "submitting" ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <Loader2 className="animate-spin" />
                                                    <span>جاري الإرسال...</span>
                                                </motion.div>
                                            ) : status === "success" ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle2 size={24} />
                                                    <span>تم الإرسال بنجاح</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="idle"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <Send size={22} className="rotate-180" />
                                                    <span>إرسال الطلب</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </div>

                                <AnimatePresence>
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-green-50 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3 text-sm border border-green-100 mt-4">
                                                <CheckCircle2 size={20} className="shrink-0" />
                                                <span className="font-medium">شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت ممكن.</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function InputField({
    label, id, type, value, onChange, required, placeholder, dir, className, activeField, setActiveField
}: {
    label: string, id: string, type: string, value: string, onChange: any, required?: boolean, placeholder?: string, dir?: string, className?: string, activeField: string | null, setActiveField: any
}) {
    return (
        <div className="space-y-3">
            <label htmlFor={id} className={`text-sm font-bold transition-colors duration-300 flex gap-1 ${activeField === id ? "text-gold-primary" : "text-gray-700"}`}>
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                required={required}
                value={value}
                onChange={onChange}
                onFocus={() => setActiveField(id)}
                onBlur={() => setActiveField(null)}
                className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-gold-primary/30 focus:shadow-[0_0_0_4px_rgba(197,160,56,0.1)] outline-none transition-all duration-300 placeholder-gray-400 ${className || ""}`}
                placeholder={placeholder}
                dir={dir}
            />
        </div>
    )
}
