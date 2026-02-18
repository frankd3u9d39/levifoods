import { ArrowRight } from 'lucide-react';

export default function FloatingCart() {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto bg-[#2c241f] border border-primary/20 shadow-2xl shadow-primary/10 rounded-full py-3 pl-6 pr-3 flex items-center gap-6 max-w-lg w-full justify-between backdrop-blur-md">
                <div className="flex flex-col">
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">Your Order</span>
                    <span className="text-white font-bold text-lg">3 Items • $42.50</span>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 group">
                    Checkout
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
