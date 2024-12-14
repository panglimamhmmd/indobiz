import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PopupWidget } from '@/components/PopupWidget';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://indobiz.vercel.app/'),
    keywords: ['indobiz', 'legalitas', 'legalitas terpercaya'],

    title: {
        default: 'Indobiz - Solusi Jasa Legalitas Terpercaya',
        template: '%s | Indobiz',
    },
    openGraph: {
        description:
            'IndoBiz adalah penyedia layanan profesional di bidang jasa legalitas usaha yang bertujuan untuk membantu pelaku usaha, perusahaan, dan individu dalam mengurus berbagai kebutuhan legalitas bisnis di Indonesia.',
        images: [''],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <Navbar />
                <div>{children}</div>
                <Footer />
                <PopupWidget />
            </body>
        </html>
    );
}
