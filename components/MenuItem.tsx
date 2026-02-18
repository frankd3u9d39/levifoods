import { Plus } from 'lucide-react';

interface MenuItemProps {
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
    return (
        <div className="group bg-white dark:bg-[#2c241f] hover:bg-gray-50 dark:hover:bg-[#3a3029] border border-gray-100 dark:border-[#392f28] rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex gap-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
                <img alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} />
            </div>
            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h4 className="text-gray-900 dark:text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{name}</h4>
                    </div>
                    <p className="text-gray-500 dark:text-[#baa89c] text-sm mt-1 line-clamp-2">{description}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-900 dark:text-white font-bold text-lg">{price}</span>
                    <button className="size-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-primary text-gray-900 dark:text-white hover:text-white flex items-center justify-center transition-colors">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
