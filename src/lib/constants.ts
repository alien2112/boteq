/**
 * Site Configuration Constants
 * Central place for contact info, WhatsApp, etc.
 */

// WhatsApp number (without + or spaces)
export const WHATSAPP_NUMBER = "966565560831";

// Display phone number (formatted)
export const DISPLAY_PHONE = "056 556 0831";

// Location
export const LOCATION = "سيهات - القطيف - الدمام - الأحساء";

// Site Name
export const SITE_NAME = "بطلة - أتيلييه ومحل خياطة";

// Site URL
export const SITE_URL = "https://boteq.com";

/**
 * Generate WhatsApp URL with pre-filled message
 * @param message - The message to pre-fill (will be URL encoded)
 */
export function getWhatsAppUrl(message: string = ""): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ""}`;
}

/**
 * Generate order message for a specific item
 * @param itemTitle - The title of the item being ordered
 * @param category - Optional category of the item
 */
export function getOrderWhatsAppUrl(itemTitle: string, category?: string): string {
    const message = `السلام عليكم 👋

أرغب في طلب التصميم التالي:

📌 *${itemTitle}*${category ? `\n📂 التصنيف: ${category}` : ""}

أرجو التواصل معي لمزيد من التفاصيل.
شكراً لكم 🙏`;

    return getWhatsAppUrl(message);
}

/**
 * Generate general inquiry message
 */
export function getInquiryWhatsAppUrl(): string {
    const message = `السلام عليكم 👋

أود الاستفسار عن خدماتكم.

شكراً لكم 🙏`;

    return getWhatsAppUrl(message);
}
