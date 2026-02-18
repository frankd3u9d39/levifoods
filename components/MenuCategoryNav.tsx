export default function MenuCategoryNav() {
    const categories = ['Popular', 'Starters', 'Mains', 'Burgers', 'Sides', 'Drinks', 'Desserts'];

    return (
        <nav className="sticky top-[64px] z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur border-b border-gray-200 dark:border-[#392f28]">
            <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-1">
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0
                                ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105'
                                : 'bg-white dark:bg-[#2c241f] text-gray-500 dark:text-[#baa89c] hover:bg-gray-50 dark:hover:bg-[#3a3029] hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-[#392f28]'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </nav>
    );
}
