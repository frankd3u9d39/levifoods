"use client";

import Link from 'next/link';
import { Mail, Lock, User, Chrome, Facebook } from 'lucide-react';

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <div className="w-full max-w-md bg-white dark:bg-[#1E1E1E] rounded-[32px] shadow-2xl p-8 sm:p-10 border border-gray-100 dark:border-white/5">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Join Levifood for tasty meals</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all"
                            />
                        </div>
                    </div>

                    <button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95">
                        Sign Up
                    </button>
                </form>

                <div className="my-8 flex items-center gap-4">
                    <div className="h-[1px] bg-gray-200 dark:bg-white/10 flex-1"></div>
                    <span className="text-sm text-gray-400 font-medium">Or sign up with</span>
                    <div className="h-[1px] bg-gray-200 dark:bg-white/10 flex-1"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <Chrome className="w-5 h-5" />
                        <span className="font-bold text-gray-700 dark:text-white">Google</span>
                    </button>
                    <button className="h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-700 dark:text-white">Facebook</span>
                    </button>
                </div>

                <p className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
                    Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
}
