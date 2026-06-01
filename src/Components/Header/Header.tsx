import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    
    // ТУТ ИИ ИМПРОВИЗИРОВАЛ И СДЕЛАЛ БУРГЕР МЕНЮ, КОТОРОГО НЕТ В МАКЕТЕ, НО ЕСТЬ КНОПКА БУРГЕР, ИИ ПОМОГ С ОПТИМИЗАЦИЕЙ SEO, ПРОИЗВОДИТЕЛЬНОСТИ И ДОСТУПНОСТИ

    return (
        <header>
            <div className='bg-[#2F9DCF] px-4 xl:px-10 xl:py-6 py-2 flex items-center justify-between'>
                <a className='xl:hidden flex' aria-label='Меню' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 14H34" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <path d="M6 26H34" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </a>
                <img loading='lazy' className='w-18.25 h-7 xl:w-39 xl:h-15' src='/logo.svg' alt='FMF Логотип' />
                <div className='hidden xl:flex items-center justify-center text-xl font-medium text-white gap-8'>
                    <a href='#product-info' className='hover:underline' aria-label='О продукте'>О продукте</a>
                    <a href='#ingredients' className='hover:underline' aria-label='Состав'>Состав</a>
                    <a href='#target-audience' className='hover:underline' aria-label='Кому подходит'>Для кого</a>
                    <a href='#price' className='hover:underline' aria-label='Цена'>Цена</a>
                    <a href='#faq' className='hover:underline' aria-label='Частозадаваемые вопросы'>Вопросы</a>
                </div>
                <div className='hidden xl:flex'>
                    <a href='#questions-form' aria-label='Оставить заявку' className='bg-white rounded-4xl px-6 py-2 text-[#3193CC] text-2xl font-medium'>
                        Оставить заявку
                    </a>
                    <a href='#questions-form' aria-label='Оставить заявку' className='bg-white rounded-full w-14 h-14 flex items-center justify-center'>
                        <svg
                            className='w-8 h-8 text-[#3193CC] transform -rotate-45 ml-1 mb-1'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                        </svg>
                    </a>
                </div>
                <a href='#price' aria-label='Стоимость' className='xl:hidden flex'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 22.5C18 23.163 18.2634 23.7989 18.7322 24.2678C19.2011 24.7366 19.837 25 20.5 25C21.163 25 21.7989 24.7366 22.2678 24.2678C22.7366 23.7989 23 23.163 23 22.5C23 21.837 22.7366 21.2011 22.2678 20.7322C21.7989 20.2634 21.163 20 20.5 20C19.837 20 19.2011 20.2634 18.7322 20.7322C18.2634 21.2011 18 21.837 18 22.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.1107 17.5L23.6662 10M13.8881 17.5L16.3326 10M11.4448 15H28.5552C28.9077 15 29.256 15.0779 29.5762 15.2284C29.8965 15.3789 30.1811 15.5984 30.4106 15.872C30.6402 16.1456 30.8091 16.4666 30.906 16.8132C31.0028 17.1598 31.0252 17.5237 30.9716 17.88L29.4377 26.82C29.3045 27.7056 28.8657 28.5131 28.2007 29.0964C27.5357 29.6797 26.6885 30.0003 25.8124 30H14.1863C13.3105 30 12.4635 29.6793 11.7988 29.096C11.1341 28.5127 10.6955 27.7053 10.5623 26.82L9.0284 17.88C8.97483 17.5237 8.99722 17.1598 9.09405 16.8132C9.19087 16.4666 9.35983 16.1456 9.58935 15.872C9.81887 15.5984 10.1035 15.3789 10.4238 15.2284C10.744 15.0779 11.0923 15 11.4448 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>

            <div
                ref={menuRef}
                className={`xl:hidden fixed top-14 left-0 right-0 z-50
            bg-white rounded-b-2xl shadow-xl transition-all duration-300 ease-in-out
            overflow-hidden
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <nav className='flex flex-col py-4'>
                    <a
                        aria-label='О продукте'
                        href='#product-info'
                        onClick={handleLinkClick}
                        className='px-6 py-3 text-gray-700 transition'
                    >
                        О продукте
                    </a>
                    <a
                        aria-label='Состав'
                        href='#ingredients'
                        onClick={handleLinkClick}
                        className='px-6 py-3 text-gray-700 transition'
                    >
                        Состав
                    </a>
                    <a
                        aria-label='Кому подходит'
                        href='#target-audience'
                        onClick={handleLinkClick}
                        className='px-6 py-3 text-gray-700 transition'
                    >
                        Для кого
                    </a>
                    <a
                        aria-label='Стоимость'
                        href='#price'
                        onClick={handleLinkClick}
                        className='px-6 py-3 text-gray-700 transition'
                    >
                        Цена
                    </a>
                    <a
                        aria-label='Частозадаваемые вопросы'
                        href='#faq'
                        onClick={handleLinkClick}
                        className='px-6 py-3 text-gray-700 transition'
                    >
                        Вопросы
                    </a>
                </nav>
            </div>
        </header>
    );
}