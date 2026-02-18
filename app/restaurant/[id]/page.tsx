import { Star, Clock, Heart } from 'lucide-react';
import MenuCategoryNav from '@/components/MenuCategoryNav';
import MenuItem from '@/components/MenuItem';
import FloatingCart from '@/components/FloatingCart';

export default function RestaurantPage({ params }: { params: { id: string } }) {
    return (
        <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8 space-y-8 pb-32">
            {/* Hero Section */}
            <section className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96">
                <div className="absolute inset-0 bg-gray-900">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdvkAO1gdBSGrLNxhBEG9ypWuk9TrbtUvw4jKIh7azqB_YPLQYshm3lQfGB85uPYNW1Bi3LLfEWOXFdOSpFq_X2HzN4Hng1aBZK7wYz6IPleGESmZGCoG_S_P8R4dyNtlptqH21-KKG2UHM6nx6q-3cLuc1nQF8E4Dwjvpi-Cm6M-_4pyvLqwnMr1VsazrlXnWHo7St36YyTsuSZ86LxBlyp-CdWUaf8qCIgKFCgdV-166M88IunRkgkOIAtc7oEf3TOMnMAm-wA" className="w-full h-full object-cover opacity-80" alt="Restaurant Cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-10 items-end md:items-center h-full">
                    <div className="size-24 md:size-32 rounded-xl bg-white p-1 shadow-lg shrink-0 hidden md:block">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxe2fks5cPQcH1ekNDXMfKupXAvwFQbdAYztzLbreivp0NlmA93rkzMyx6t0ob-JN3suM0qHEK1ek8B-XnqigARTQ33Cq3xb4cYUxaJu10sUMRP_eVOcfwN-W5jvGrCA0HbdTC2KqOiNYizsmqP1xfELmCGrkMTumERnDE6QtJMNi8W5Vzj1fIwQJmVFQedZpHLD4sLkbTj_h_ROI9e3WbY0tXUFfe-N1UC1eBtZCzKoNT43VwzzLEbhx8i7TS6cFE_a93IAyhvw" className="w-full h-full object-cover rounded-lg" alt="Logo" />
                    </div>
                    <div className="flex-1 space-y-2 mb-4 md:mb-0">
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Burger Joint</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300">
                            <span className="flex items-center gap-1 text-yellow-400 font-bold"><Star className="w-4 h-4 fill-yellow-400" /> 4.8 (500+)</span>
                            <span>•</span>
                            <span>American, Burgers, Fast Food</span>
                            <span>•</span>
                            <span>$$</span>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                                <span className="size-2 rounded-full bg-green-400 animate-pulse"></span> Open Now
                            </span>
                            <span className="text-sm text-gray-300 flex items-center gap-1">
                                <Clock className="w-4 h-4" /> 20-30 min
                            </span>
                        </div>
                    </div>

                    <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm">
                        <Heart className="w-5 h-5" /> Save
                    </button>
                </div>
            </section>

            <MenuCategoryNav />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="col-span-full pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        Popular Items
                    </h3>
                </div>

                <MenuItem
                    name="Double Cheeseburger"
                    description="Two beef patties, cheddar cheese, lettuce, tomato, and house sauce."
                    price="$14.50"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2h8vlVr3_fT0HVuWb2-q1WXTi4rhXHBOSR_EqZY3plaBWHox1XLDQkfPoV0us-wQY1RE_GF_BEOa5HBfuAoSmL3KFRq1mbnmq_oKg-cSLbkPU4Tvb9aB4eHb5vY36X4f8HHxlaLwchOCzX8hoRFRuluyaN2h080iZ3u0djrX1xEn3GJ7xiffbA3cIFWMQR9MX_jWPsD4Kf9Kb8HsXOweR_6nIfVFWnJFDaiHK8P1v-BiSYBXPUN9wprkESOg2dwX21J51mtFrw"
                />
                <MenuItem
                    name="Pepperoni Feast"
                    description="Classic tomato base, mozzarella, and generous slices of pepperoni."
                    price="$18.00"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE7KSwpM_7skjj0cGnGmOk-zafCTUWLANuMVHqMXACb2ChQc3_YONiMem6vuGPdVjZb1IBT5sI9NXe_FasgOr5XZs1nQa1r2XSqXHh2cYrAQNTuwsjY_M5u2jY0jA_-5AFdmD5R5N6bhASYZZmMlsIGNIbslacrvAJdhQcEe2IwNiugzwvszFYCCu5Qurt5d7o1f8_HHNa-GZL1yMLZPo1Pv40k2EjP8iq4KF1CiNRUmoTjw_EstvZZS891G-_tLGqQkzpBL49A"
                />
                <MenuItem
                    name="Spicy Wings (6pcs)"
                    description="Crispy fried wings tossed in our signature hot buffalo sauce."
                    price="$9.99"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBFGDGnh3CWOtuCmVRr68BGyz0dzlHBBGAE6cd0CEknNSTStn6b-l9CKzgAo8ciEV2jIkn7gplTHH2NjdN5XEY_ntSz5ID2Ud15AkooJDzrSatt5yt4N6QTO7NGJUuu7u91qwe8egsDf8YV5d-uzIfEDxa18D9zL9J_UkjBJpP7s0Y4tDv5G4R3oP1lJSSUm177Ai9e2FQI5s4xF7rYwI18_0Lv4pyUBvEFnsMcpvZ3-e9SDo6ssMyc2PrJqogvHhNP5XAVs9m3tQ"
                />
            </div>

            <FloatingCart />
        </div>
    );
}
