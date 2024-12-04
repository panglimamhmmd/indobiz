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
            className="px-8 text-nowrap hover:scale-105 transition-transform  content-center py-2 text-sm lg:text-lg font-bold text-center text-white bg-orange rounded-xl cursor-pointer "
        >
            Konsultasi Sekarang
        </div>
    );
};
