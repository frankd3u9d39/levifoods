import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jakarta',
});

export const metadata: Metadata = {
    title: 'Levifood',
    description: 'Delicious food delivered to your doorstep',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={jakarta.variable}>
            <body className="font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
