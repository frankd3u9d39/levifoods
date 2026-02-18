"use client";

import { Trash2, Plus, Minus, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const items = [
        {
            id: 1,
            name: 'Spicy Chicken Burger',
            desc: 'Extra cheese, No onions',
            price: 12.99,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEfm3tlcoQNU3VBEzJUlcLMe45u77-aBjBKTLxcDFhyKCID_advqOZ8L6J3UrObOfjWzvepnEhnHDsql2gXMcGxUyWkMt_6h1WxOtjPwS4LiXfM8fFBmkwiJtS_vbEui7SwsTPn4FVzwnKPHsRmSEYisIAWs9KXhB2rCSXSaoDVpw7kC-AgZS6fcIID8oofC4schjyw8EbhUd2kpBKn1E0A_RJH-1Wa3q06sNzeOPNkWgMu0VBIEh7o8_-j7cOig0jX6-jrWqxZw'
        },
        {
            id: 2,
            name: 'Large Fries',
            desc: 'Classic salt, Ketchup packet',
            price: 9.00,
            qty: 2,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWJlv8mwJThbN8XyjM4cIsYa0-Yw3MjuW3fzY3kKTOuDpxoCkRSD16ymG6QpL9Od1QbMC-diIF6vJnSX8iGjWkdkmcFiiSXAZ4D10MNinIyQeLdeaAmBUOYt417_l3swnnSuj85767xDkGy2PZ5pJ6UN_tyOKdJ-uKXgY-D23k7OypDnRNguq-QdQHs287myqFcgHhFoab9rheAttdgm8QV_7x1NllHTXEKRfkN-nefQuLUARyS5ASjkr_zqD6KXSHfBvmE2n7DA'
        },
        {
            id: 3,
            name: 'Coke Zero',
            desc: '330ml can',
            price: 1.50,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHQ2VMKFkdkjVQPzKusTNYVeNVOcCrmeUgIrzz8zkSDEDPIH7uUAGWIOH9XwTSTuveIi1l0a7aZr6JkYJSWko-qJ6dmkc4awUJeQWAhfzseAp7DESBznGTMFl82WpjYdkPGEMj1t-SJTSBHCJShs40DeYyKb1x-84hPgmhsiORvIY3hcuEZ6wdLxScNPEpsMYzBc8f2ogZGy17KuOHislxsshrjq0TLyWzh4Z-9j6675ahNH7_HV94CU54kVWcbhKxpgOvdsLxlw'
        }
    ];

    return (
        <div className="flex flex-col flex-grow w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 dark:text-white">Your Cart ({items.length} items)</h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column: Items */}
                <div className="flex-1 flex flex-col gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-[#181411] p-4 rounded-xl border border-gray-100 dark:border-[#392f28] hover:border-primary/30 transition-all">
                            <div className="w-full sm:w-[100px] aspect-square rounded-lg overflow-hidden bg-gray-200">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="flex justify-between items-start w-full">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                                        <p className="text-gray-500 dark:text-[#baa89c] text-sm mt-1">{item.desc}</p>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-2">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end mt-4 sm:mt-0">
                                    <p className="text-primary text-lg font-bold">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center bg-gray-100 dark:bg-[#2a221d] rounded-lg p-1 border border-gray-200 dark:border-[#392f28]">
                                        <button className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-[#392f28] text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-colors shadow-sm">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-10 text-center font-medium text-gray-900 dark:text-white">{item.qty}</span>
                                        <button className="size-8 flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link href="/menu" className="mt-4 p-4 border border-dashed border-gray-300 dark:border-[#392f28] rounded-xl flex items-center justify-center text-gray-500 dark:text-[#baa89c] hover:text-primary hover:border-primary hover:bg-gray-50 dark:hover:bg-[#2a221d] cursor-pointer transition-all gap-2">
                        <Plus className="w-5 h-5" />
                        <span className="font-medium">Add more items</span>
                    </Link>
                </div>

                {/* Right Column: Summary */}
                <div className="lg:w-[380px] shrink-0">
                    <div className="lg:sticky lg:top-24 flex flex-col gap-6 bg-white dark:bg-[#181411] p-6 rounded-2xl border border-gray-100 dark:border-[#392f28] shadow-xl shadow-black/5 dark:shadow-black/20">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Order Summary</h2>

                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input className="w-full bg-gray-50 dark:bg-[#2a221d] border border-gray-200 dark:border-[#392f28] text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block pl-10 p-2.5 outline-none dark:text-white placeholder-gray-400" placeholder="Promo Code" />
                            </div>
                            <button className="bg-gray-200 dark:bg-[#392f28] hover:bg-gray-300 dark:hover:bg-[#4a3e36] text-gray-900 dark:text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors">Apply</button>
                        </div>

                        <hr className="border-gray-100 dark:border-[#392f28]" />

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-gray-500 dark:text-[#baa89c]">
                                <span className="text-sm">Subtotal</span>
                                <span className="font-medium text-gray-900 dark:text-white">$23.49</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500 dark:text-[#baa89c]">
                                <span className="text-sm">Delivery Fee</span>
                                <span className="font-medium text-gray-900 dark:text-white">$2.99</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500 dark:text-[#baa89c]">
                                <span className="text-sm">Service Fee</span>
                                <span className="font-medium text-gray-900 dark:text-white">$1.50</span>
                            </div>
                            <div className="flex justify-between items-center text-green-500 text-sm">
                                <span>Discount (SUMMER5)</span>
                                <span>-$3.00</span>
                            </div>
                        </div>

                        <hr className="border-gray-100 dark:border-[#392f28]" />

                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                            <span className="text-primary text-2xl font-black">$24.98</span>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            Proceed to Checkout <ArrowRight className="w-5 h-5" />
                        </button>

                        <p className="text-center text-xs text-gray-400 dark:text-[#6b5d54]">
                            By proceeding, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
