export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-8 px-6 border-t border-gray-200 dark:border-surface-dark-hover">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 Levifood. All rights reserved.</p>
                <div className="flex gap-4">
                    {/* Add social links or secondary nav here if needed */}
                </div>
            </div>
        </footer>
    );
}
