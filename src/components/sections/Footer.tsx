import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-[#FAEED1] pt-12 pb-8 overflow-hidden">
            {/* Gradient Overlay for that soft look */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E7] to-[#FCEBC4] opacity-80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <Image
                                src="/logo.webp"
                                alt="Rawaa Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Section: Socials & Connect */}
                    <div className="flex flex-col items-center gap-6 flex-1">
                        <div className="flex gap-3">
                            <SocialIcon href="#" icon={<WhatsappIcon />} />
                            <SocialIcon href="#" icon={<SnapchatIcon />} />
                            <SocialIcon href="#" icon={<XIcon />} />
                            <SocialIcon href="#" icon={<LinkedinIcon />} />
                            <SocialIcon href="#" icon={<InstagramIcon />} />
                            <SocialIcon href="#" icon={<FacebookIcon />} />
                        </div>

                        <Link href="/contact" className="bg-[#FDA4AF] hover:bg-[#FB7185] text-white text-lg md:text-xl font-bold py-3 px-12 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 block text-center">
                            تواصل معنا
                        </Link>
                    </div>

                    {/* Map Section */}
                    <div className="flex-shrink-0 w-full md:w-80 h-48 bg-gray-100 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[3px] border-black relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <iframe
                            src="https://maps.google.com/maps?q=26.4660679,50.0415029&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#D4C3A3] mb-6" />

                {/* Copyright Section */}
                <div className="text-center space-y-2">
                    <Link href="#" className="block text-[#8B7355] hover:text-[#D4AF37] hover:underline font-medium text-sm">
                        الشروط والأحكام
                    </Link>
                    <div className="text-[#8B7355] text-sm font-arabic">
                        <p>رواء. جميع الحقوق محفوظة.</p>
                        <p className="text-xs mt-1 text-[#D4AF37] font-bold">RWAD عن تصميم</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-700 hover:text-[#D4AF37] hover:shadow-md transition-all duration-300"
        >
            {icon}
        </a>
    );
}

// Simple SVG Icons to match the design exactly
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
);
const SnapchatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M12 2c-3 0-5.5 2-6.5 4.5l-.5.5c-1 1-1 1.5-1 2.5 0 2 2.5 2.5 2.5 4 0 1-1 1.5-1.5 2 0 .5.5 1 1 1h12c.5 0 1-.5 1-1-.5-.5-1.5-1-1.5-2 0-1.5 2.5-2 2.5-4 0-1 0-1.5-1-2.5l-.5-.5C17.5 4 15 2 12 2z" /></svg>
);
const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 1l4 4a.5.5 0 0 0 1-1l-5-4"></path></svg>
);
