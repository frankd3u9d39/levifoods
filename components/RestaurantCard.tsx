import { Star, Clock, Truck } from 'lucide-react';
import Link from 'next/link';

interface RestaurantCardProps {
    name: string;
    image: string;
    rating: number;
    time: string;
    deliveryFee: string;
    minOrder: string;
    tags: string[];
}

export default function RestaurantCard({ name, image, rating, time, deliveryFee, minOrder, tags }: RestaurantCardProps) {
    return (
        <Link href={`/restaurant/${name.toLowerCase().replace(/ /g, '-')}`} className="group bg-surface-dark rounded-[24px] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-white/5 hover:border-primary/30 relative">
            <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-gray-800">
                    <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-black flex items-center gap-1 shadow-lg">
                        <Clock className="w-4 h-4 text-primary" />
                        {time}
                    </div>
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-black flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {rating}
                    </div>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1 bg-white dark:bg-[#1E1E1E]">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">{name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">{tags.join(' • ')}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-primary" />
                        <span className="text-gray-700 dark:text-gray-300">{deliveryFee}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-1.5 bg-gray-300 dark:bg-white/20 rounded-full"></span>
                        <span>{minOrder} min</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
