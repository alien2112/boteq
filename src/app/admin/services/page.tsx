"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trash2, Plus, Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface IServiceItem {
    _id: string;
    title: string;
    image: string;
}

export default function ServicesAdmin() {
    const [items, setItems] = useState<IServiceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [newServiceTitle, setNewServiceTitle] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/services");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Failed to fetch");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("هل أنت متأكد من حذف هذه الخدمة؟")) return;
        try {
            await fetch(`/api/services/${id}`, { method: "DELETE" });
            setItems(items.filter((item) => item._id !== id));
        } catch (error) {
            alert("Error deleting item");
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;

        const title = prompt("أدخل عنوان الخدمة:");
        if (!title) return;

        setUploading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            // 1. Upload
            const uploadRes = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            if (!uploadRes.ok) throw new Error("Upload failed");
            const { url } = await uploadRes.json();

            // 2. Create Service Item
            const createRes = await fetch("/api/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    image: url,
                    title: title
                }),
            });

            if (createRes.ok) {
                const newItem = await createRes.json();
                setItems([...items, newItem]);
            }
        } catch (error) {
            alert("فشل رفع الصورة");
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#C5A038]" size={40} /></div>;

    return (
        <div className="min-h-screen bg-[#FFFBF2] p-8" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <Link href="/admin/dashboard" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm transition-all hover:scale-110">
                        <ArrowRight />
                    </Link>
                    <h1 className="text-4xl font-bold text-[#5A4A42] font-arabic">إدارة الخدمات</h1>
                </div>

                <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-[#5A4A42] mb-1">إضافة خدمة جديدة</h2>
                        <p className="text-gray-500 text-sm">ارفع صورة وأدخل العنوان</p>
                    </div>

                    <div className="relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            disabled={uploading}
                        />
                        <Button className="flex items-center gap-2" disabled={uploading}>
                            {uploading ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />}
                            <span>{uploading ? "جاري الرفع..." : "إضافة خدمة"}</span>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item._id} className="group relative bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden mb-4 border border-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-[#5A4A42] mb-2">{item.title}</h3>

                            <button
                                onClick={() => handleDelete(item._id)}
                                className="absolute top-4 left-4 w-10 h-10 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover:opacity-100"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}

                    {items.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-400">
                            لا توجد خدمات مضافة حالياً.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
