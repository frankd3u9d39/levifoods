import Link from 'next/link';

interface CategoryCardProps {
    name: string;
    image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
    return (
        <Link href={`/menu?category=${name.toLowerCase()}`} className="group flex flex-col items-center gap-4 min-w-[110px] cursor-pointer">
            <div className="size-24 sm:size-28 rounded-[24px] bg-surface-dark border border-white/5 flex items-center justify-center overflow-hidden relative shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10"></div>
                {/* Using a placeholder or the actual image URL if available. For now using a colored block or text if image fails, but in real app use Next/Image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-500">
                    {image ? <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> : name}
                </div>
            </div>
            <span className="text-base font-bold text-gray-400 group-hover:text-primary transition-colors">{name}</span>
        </Link>
    );
}
