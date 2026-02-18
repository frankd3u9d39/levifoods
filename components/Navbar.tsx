import Link from 'next/link';
import { ShoppingBag, Menu, User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-surface-dark-hover bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md">
            <div className="px-6 h-16 flex items-center justify-between container mx-auto">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                        <Menu className="w-6 h-6" />
                    </Link>
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">Levifood</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors relative">
                        <ShoppingBag className="w-6 h-6" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>
                    <Link href="/auth/login" className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500">
                        <User className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
