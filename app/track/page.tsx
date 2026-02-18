"use client";

import { Clock, Check, Receipt, MessageCircle, Phone, Star, MapPin, Bike, Home } from 'lucide-react';

export default function TrackOrderPage() {
    return (
        <div className="flex flex-col lg:flex-row flex-grow gap-6 p-4 lg:p-8 max-w-[1600px] mx-auto w-full">
            {/* Left Column: Status & Details */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 lg:min-w-[400px]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-wider">Estimated Arrival</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        15-20 <span className="text-gray-400 dark:text-white/50 text-3xl lg:text-4xl">mins</span>
                    </h1>
                    <p className="text-gray-500 dark:text-white/60 text-base">Order #2491 • Preparing your feast</p>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-6 flex flex-col gap-8 relative overflow-hidden">
                    <div className="absolute left-9 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-white/10"></div>

                    {/* Step 1: Completed */}
                    <div className="flex gap-4 relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white">
                                <Check className="w-3 h-3 stroke-[4]" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-900 dark:text-white font-bold text-sm">Order Confirmed</p>
                            <p className="text-gray-400 dark:text-white/50 text-xs">10:23 AM</p>
                        </div>
                    </div>

                    {/* Step 2: Active */}
                    <div className="flex gap-4 relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="size-6 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center">
                                <div className="size-2 bg-white rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-900 dark:text-white font-bold text-sm">Preparing</p>
                            <p className="text-primary text-xs font-medium">Kitchen is working on it</p>
                        </div>
                    </div>

                    {/* Step 3: Pending */}
                    <div className="flex gap-4 relative z-10 opacity-50">
                        <div className="flex flex-col items-center">
                            <div className="size-6 rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-background-dark flex items-center justify-center"></div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-700 dark:text-white font-medium text-sm">Out for Delivery</p>
                        </div>
                    </div>

                    {/* Step 4: Pending */}
                    <div className="flex gap-4 relative z-10 opacity-50">
                        <div className="flex flex-col items-center">
                            <div className="size-6 rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-background-dark flex items-center justify-center"></div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-700 dark:text-white font-medium text-sm">Delivered</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gray-200 dark:bg-white/10 p-2 rounded-lg text-gray-700 dark:text-white">
                            <Receipt className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-gray-900 dark:text-white font-bold text-sm">Order Summary</p>
                            <p className="text-gray-500 dark:text-white/50 text-xs">3 Items • $42.50</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-white/10 pt-4 flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="bg-gray-200 dark:bg-white/10 size-6 flex items-center justify-center rounded text-xs font-bold text-primary">1x</div>
                                <div className="text-sm text-gray-700 dark:text-white/80">Spicy Miso Ramen</div>
                            </div>
                            <span className="text-sm text-gray-900 dark:text-white font-medium">$16.00</span>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-white/10 my-1"></div>
                        <div className="flex justify-between items-center text-sm font-bold text-gray-900 dark:text-white">
                            <span>Total</span>
                            <span>$30.50</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Map & Rider */}
            <div className="flex-1 flex flex-col gap-4 relative h-full min-h-[500px] lg:min-h-0 rounded-xl overflow-hidden shadow-2xl">
                {/* Map Background Placeholder */}
                <div className="absolute inset-0 bg-gray-800">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8nwnJTn7hlqio4C7tbbHOF8Obsq1aoC5wZzi_O0V9-8mnST9j5tR_8LrNEmR3E7hvvBvXPFc7ACTi3XiLpJLsS9qmuivZTMaYVwOi-M6vBYtQMS8U3ZiS4nhkmd21tljmuyMq9mv63fu2iy5JHiSmro2f7k2MKeARu4Y1KNNZBQzUmb0srme_1Mz_q82VmZVnaiYHNOdTeSHWDx-0heDQ7DRo5eg0x1gHRrOIpLU9KNJyGLyobhYu4sQMZnlj3zdmIev7Rl7Ftw" className="w-full h-full object-cover opacity-60 grayscale invert" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-2 shadow-lg whitespace-nowrap">
                        12 min away
                    </div>
                    <div className="size-12 bg-primary rounded-full border-4 border-white dark:border-white/20 shadow-[0_0_30px_rgba(244,123,37,0.6)] flex items-center justify-center text-white z-10 relative">
                        <Bike className="w-6 h-6" />
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    </div>
                </div>

                <div className="absolute bottom-1/4 left-1/3 flex flex-col items-center">
                    <div className="size-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg">
                        <Home className="w-4 h-4" />
                    </div>
                </div>

                {/* Rider Card */}
                <div className="absolute bottom-4 left-4 right-4 lg:right-auto lg:w-[380px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border border-gray-200 dark:border-white/10 p-5 rounded-xl shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="size-14 bg-gray-300 rounded-full overflow-hidden">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__giD-l_Z5LA9tHXcqhKN02HBXIT-tOI_NUEZnWc7PBq_hgclpEQrNv-KmuQH2UCtO5tO3LeNG3wHAAho-B9d3ueq1OgQ2xazymrQDHK7IkicDk4WH0Z-PMNr7BhDK24ZpvV-NFLCsJhp7lc6w2mQrtf1-4bnYpGJkqdZO1WTUvujPvQqwelVqySZID1HtIbKvbzCHu9jQf1JdTrqgUaZcODrzA5QfBV1NTK92M_13PynTjG7SC7aNk4e6jekUmuYuvtZGTPAMg" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 size-4 rounded-full border-2 border-white dark:border-background-dark"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-gray-900 dark:text-white font-bold text-lg">Mike D.</h3>
                                <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-600 dark:text-yellow-500">
                                    <Star className="w-3 h-3 fill-current" />
                                    <span className="text-xs font-bold">4.9</span>
                                </div>
                            </div>
                            <p className="text-gray-500 dark:text-white/60 text-sm">Yamaha NMAX • AB 123 CD</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-colors">
                            <MessageCircle className="w-4 h-4" /> Chat
                        </button>
                        <button className="flex items-center justify-center gap-2 h-10 px-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white text-sm font-bold rounded-lg transition-colors">
                            <Phone className="w-4 h-4" /> Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
