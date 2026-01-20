"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Trash2, Edit, Loader2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface IItem {
    _id: string;
    title: string;
    category: string;
    image: string;
}

export default function AdminDashboard() {
    const [items, setItems] = useState<IItem[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/collections");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("هل أنت متأكد من الحذف؟")) return;
        try {
            await fetch(`/api/collections/${id}`, { method: "DELETE" });
            setItems(items.filter((item) => item._id !== id));
        } catch (error) {
            alert("Error deleting item");
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#C5A038]" size={40} /></div>;

    return (
        <div className="min-h-screen bg-[#FFFBF2] p-8" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold text-[#5A4A42] font-arabic">لوحة التحكم</h1>
                    <div className="flex gap-3">
                        <Link href="/admin/blog">
                            <Button variant="outline" className="flex items-center gap-2 border-[gray-300] text-gray-600 hover:bg-gray-100">
                                <BookOpen size={20} />
                                <span>المدونة</span>
                            </Button>
                        </Link>
                        <Link href="/admin/content">
                            <Button variant="outline" className="flex items-center gap-2 border-[#C5A038] text-[#C5A038] hover:bg-[#C5A038] hover:text-white">
                                <Image src="https://placehold.co/20x20/C5A038/FFF?text=Img" alt="Icon" width={20} height={20} className="w-5 h-5 rounded-sm" />
                                {/* Using placeholder icon or just text if icon not avail immediately */}
                                <span>صور الموقع</span>
                            </Button>
                        </Link>
                        <Link href="/admin/collections/new">
                            <Button className="flex items-center gap-2">
                                <Plus size={20} />
                                <span>إضافة جديد</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-6 text-gray-600 font-bold">الصورة</th>
                                <th className="p-6 text-gray-600 font-bold">العنوان</th>
                                <th className="p-6 text-gray-600 font-bold">التصنيف</th>
                                <th className="p-6 text-gray-600 font-bold">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {items.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4">
                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        </div>
                                    </td>
                                    <td className="p-6 font-medium text-[#5A4A42]">{item.title}</td>
                                    <td className="p-6">
                                        <span className="bg-[#FFF8E7] text-[#C5A038] px-3 py-1 rounded-lg text-sm font-bold">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="p-6 flex items-center gap-3">
                                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-12 text-center text-gray-400">لا توجد عناصر مضافة بعد.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
