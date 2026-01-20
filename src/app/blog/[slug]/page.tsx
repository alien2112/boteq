"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Share2, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
    _id: string;
    title: string;
    content: string;
    slug: string;
    image: string;
    author: string;
    category: string;
    createdAt: string;
    tags: string[];
}

export default function SinglePostPage({ params }: { params: { slug: string } }) {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/blog/slug/${params.slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setPost(data);
                }
            } catch (error) {
                console.error("Failed to fetch post");
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) fetchPost();
    }, [params.slug]);

    if (loading) return <div className="min-h-screen bg-[#FFFBF2]" />;
    if (!post) return <div className="min-h-screen flex items-center justify-center text-xl bg-[#FFFBF2]">المقال غير موجود</div>;

    return (
        <main className="min-h-screen bg-[#FFFBF2] pt-24 pb-24" dir="rtl">
            {/* Header Image */}
            <div className="relative h-[400px] md:h-[500px] w-full mb-12">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl text-center text-white"
                    >
                        <span className="bg-[#C5A038] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-arabic mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base opacity-90">
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{new Date(post.createdAt).toLocaleDateString("ar-EG")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>5 دقائق قراءة</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl -mt-24 relative z-10"
                >
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 border-b border-gray-100 pb-4">
                        <Link href="/" className="hover:text-[#C5A038]">الرئيسية</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#C5A038]">المدونة</Link>
                        <span>/</span>
                        <span className="text-[#C5A038] truncate max-w-[200px]">{post.title}</span>
                    </div>

                    {/* Main Text Body */}
                    <div
                        className="prose prose-lg prose-gold max-w-none font-arabic text-gray-700 leading-9"
                        dangerouslySetInnerHTML={{ __html: post.content }} // Note: in production use a sanitizer like DOMPurify
                    />

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#C5A038] hover:text-white transition-colors cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Share & Author Card */}
                    <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-[#C5A038] border-2 border-[#C5A038]">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[#5A4A42]">{post.author}</h4>
                                <p className="text-gray-500 text-sm">كاتب ومحرر في مدونة رواء للخياطة.</p>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#5A4A42]">مشاركة المقال:</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></button>
                                <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"><Twitter size={18} /></button>
                                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><Linkedin size={18} /></button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back Link */}
                <div className="text-center mt-12 pb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#5A4A42] font-bold hover:text-[#C5A038] transition-colors">
                        <ArrowRight className="rotate-180" />
                        <span>العودة للمدونة</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
