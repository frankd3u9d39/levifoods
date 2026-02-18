import { Search, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import RestaurantCard from '@/components/RestaurantCard';

export default function Home() {
    const categories = [
        { name: 'Pizza', image: '/images/category-pizza.jpg' },
        { name: 'Burgers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4FSs8Av0-Uj9MFg9tHCJMFu7UVSbJEJUeJah5Q10rVaWupI0xEMR_7eDrTyCEWPYYH7TzhItmLWS_Kr73sDQdHWUEdks2Y8QZ4NIKPNEfRuscgj4yKmDexRJgIus9K--RTMouj__V9iQymlY-9lbtB5XwcV9jKvYRVooKTNY1mijtyiyGNuAfyNLITD56TFKQWq_nQaFuvwKzK2pwC09RlbrMJPPiqIpU0NdgbuWZfwU4VkiyrBxIJtEI7OvTT3lu8mWrsjlw7A' },
        { name: 'Sushi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTMWlMe95peWyy6QccIMNz3t5d4o1HF7ZbgO910ptQf62j4UkLf9_3hm9iJra8F8mncBP9C4s7DsMTomZMsALshKCCvU9VEMU9mNG_MXFCNRgAwIQ8EkOypIR3Zqf-8liXIQiOri2uFoN8ZmvHH8G2UFCuR6KeckKG336RDJqTJtQAQqubdMtawEzEOuzVyXuFVjmDP7FnkQxCtvTJrqlPgCg_3qa1CXxvJUSYqVbEVuNPbQ5vlT-rDMxEqgUlsGWqeF_5ncT79Q' },
        { name: 'Asian', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7T4jAuwrCyu3Is5Yhi2JuTEnt4Srlj9CrHhIQe0uYmPpnQB3CjF0svPV-BwzcKeIyRPNqJHTzbRgWMvoYZkcHVgnwnlcdgwjxnBljXGoniYJ54udw_R0a_ct0kAQG_OTu0TC5g9QRflK-QRqyXmfQaOAJb3BGXbb_Mt359wENRypj0mB83j0iLVfiuoJs5VKoVfHGhqdU6TO6rJ3cxDAF9m7qkS49ilEvoArBVuWu4JfohuwyHzhmiAfiY5fUPkAidv61AoeMUw' },
        { name: 'Vegan', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdxCE-Dc7zKrRWMvNfIxPowJBEmc869whcHEl1ghnUxo2u1lmnd8FxnMWakKz2wKa90_Ek2teCo-3CsjaPKiJ8GfnEEA3xf0-Z8GX6Wbu3VJHSfrtrvDh5J52F7PhL9UBRfDQBnQcQwAxK2CiYkK4Q_J9WZnN-zYYuYRGgKd6xVxZNAPiBkreQJV2iBxj-_4EJ7H_L--tK7MgfvAmcis30N3iF0ErsSLNLZhiXJLUnmZxBGtq1U0QQUC14qirLf1gctCJ0xrCW-g' },
        { name: 'Dessert', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEFURYVy-oVGgbOrYmNw5MflDFigDSbTDIxL4fejOFVI-umUhyYjzGFiA7KuJOUqjS1H-JaHr4Cuucs2E8qov4ge3owuJOUh6zussJJS_7Ya8FyHRo7C7BETnmSg2QESC9lVj6YiKpha2HhvFZw0k1xCxVjuFISZ0LuJlk6Ve7QMANAsYHLLXLacJ7L7XJj6hvpmzYsrx2F3RlJORfAqBK2Am9mSGu6dTBwxmmcdVQmkNTwcEiH3zpNhKh1jIGfbb8vJUyYIXfIQ' },
    ];

    const restaurants = [
        {
            name: 'The Burger Joint',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDZNuvlr8-dCRpLVO3yr-XljgJKxZhJS6A5JcDOY1-55oPozSiVByuX3U_FDnRimLXxwRGGVK4anihW9Rgxe8Hf0Z1lzZEr-Bkim3dPSFhAoxRUUwTnMl5AUvx8sAJb1jH_EXIq5x80YefxvyRueSz_1AkUT1-7xWo9jVlmxnlDAo06M95nnZ08uf_sZkuym3jvbbVusN2MQarS8KuBExp-996LzsfOCr9tp00FeKogc6MbzJFicW4K7X0yBaLQKM3QGmdey0oiQ',
            rating: 4.8,
            time: '20-30 min',
            deliveryFee: '$1.99 Delivery',
            minOrder: '$15',
            tags: ['American', 'Burgers', 'Fast Food']
        },
        {
            name: 'Sushi Master',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp8tG6BAwA2eZdBPYXGtTEajW5uUEZVtobFhwmjSXANjuBnvaGqGUfGB5irWX5whtjlapz-ujdpKEmQLnNxTBJWK_bwttgJ9v-vPmxBXTjgvpPQ0E7n7zlnVeqi7jrpiWVHO5Lo-mOkc7vr3B9jt5cfehzcwpoISBJzxchxiPswt2BzqWzqLD3AfULBUG1EA55NV_BWSh12P5mkm9rjxxlZqpG7uu38Z2F1L0qZHQvvgMKp9gaMyb1nGjlWjTZ5jlvCSLnkMPXvA',
            rating: 4.9,
            time: '45-55 min',
            deliveryFee: 'Free Delivery',
            minOrder: '$25',
            tags: ['Japanese', 'Sushi', 'Seafood']
        },
        {
            name: 'Pizza Paradise',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxXw-DCt7yplp3bRuxFjEcQFt4N0kqwrr7f7_zezRunQPMC2TJ9viqI0ufJfmvIBFZrG2lfO4tTMD28U7USpUxl8jg9GqGtiDUjfboe08Qb_ELItFz449BdRApBLgTdiQDvznVKdKIP1NP_wkAeG4sIqMCFhzPGzmPv7dz71oxPMy_NS7iaPy7L-UT3XGIeH_Bpu5jfAFXRmw2AMFv1AYtJlhB-KYMdqgIn_ZSyZIKhZBatBFUkkXAt70CfWGO_-jsA71o0li5WA',
            rating: 4.5,
            time: '30-40 min',
            deliveryFee: '$3.99 Delivery',
            minOrder: '$20',
            tags: ['Italian', 'Pizza', 'Comfort Food']
        },
        {
            name: 'Green Bowl',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXTZjVBimBPDGbiqlvVlUM7dr611MWS7eFXT8YZevYWXxdIpJCJzbDeUA5gkSZxk3KleuFWnl6n5tc3rqtvOpvjL57Zd6yHlI9B1-OoqMlMBhkLmVfbwFnaGjNzdDeeqAOdfegyeNd0X7_pPzD1xC9z7AdqjO4zcPtjosyoOUVjHOBolHsf-UfwwNGI_ht0RgaHbaK_F2EgIMKx3b6oEXwgwQ1oTqfkBiBBXC04IBSsGsDl7qNJoTYjxLVGpPrHAgrLbdQ2pxosA',
            rating: 4.7,
            time: '15-25 min',
            deliveryFee: '$0.99 Delivery',
            minOrder: '$12',
            tags: ['Healthy', 'Salads', 'Vegan']
        }
    ];

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-[1440px] px-4 md:px-8 pt-8 pb-12">
                <div className="relative w-full rounded-[32px] overflow-hidden min-h-[560px] flex flex-col items-center justify-center p-8 text-center shadow-2xl isolate group">
                    <div className="absolute inset-0 -z-10 bg-black">
                        <img
                            alt="Hero Background"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                            src="/images/hero-bg.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background-dark"></div>
                    </div>

                    <div className="flex flex-col gap-8 max-w-4xl items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Fastest Delivery
                            </span>
                            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight drop-shadow-lg">
                                Craving Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Extraordinary?</span>
                            </h1>
                            <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                Discover the best food from over 1,000 restaurants and get it delivered to your doorstep in minutes.
                            </p>
                        </div>

                        <div className="w-full max-w-2xl mt-4">
                            <div className="flex w-full items-center bg-surface-dark/90 backdrop-blur-xl rounded-[24px] p-2 shadow-2xl border border-white/10 transition-all focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent focus-within:bg-surface-dark">
                                <div className="pl-5 text-primary flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <input
                                    className="w-full bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 text-lg px-4 py-3 font-medium"
                                    placeholder="Enter delivery address..."
                                />
                                <button className="bg-primary hover:bg-primary-hover text-white rounded-[18px] h-12 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 whitespace-nowrap">
                                    <span className="hidden sm:inline">Find Food</span>
                                    <Search className="w-5 h-5 sm:hidden" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1440px] px-4 md:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight">Explore Categories</h2>
                    <div className="flex gap-3">
                        <button className="size-10 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-surface-highlight text-gray-900 dark:text-white transition-all hover:scale-105">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="size-10 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-surface-highlight text-gray-900 dark:text-white transition-all hover:scale-105">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} name={cat.name} image={cat.image} />
                    ))}
                </div>
            </div>

            <div className="w-full max-w-[1440px] px-4 md:px-8 py-8 pb-24">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight">Popular Near You</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base mt-2">Based on recent orders in your area</p>
                    </div>
                    <a className="text-primary font-bold text-sm hover:text-primary-hover transition-colors flex items-center group cursor-pointer">
                        See All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {restaurants.map((rest, i) => (
                        <RestaurantCard key={i} {...rest} />
                    ))}
                </div>
            </div>
        </div>
    );
}
