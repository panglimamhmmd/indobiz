'use client';

export const WhatsappRedirect = (): void => {
    // Encode the message to ensure it works with URLs
    // Build the WhatsApp URL
    const whatsappURL = `https://wa.me/08965468808?text=Anjaymabar`;
    // Redirect to the WhatsApp URL
    window.location.href = whatsappURL;
};

export const RedirectButton = () => {
    return (
        <div
            onClick={WhatsappRedirect}
            className="px-4 text-nowrap  content-center py-2 text-sm lg:text-lg font-bold text-center text-white bg-orange rounded-2xl cursor-pointer transition-transform duration-300 hover:bg-amber-400 hover:text-white "
        >
            Konsultasi Sekarang
        </div>
    );
};
