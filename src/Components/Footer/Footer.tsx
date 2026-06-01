// ЭТОТ КОМПОНЕНТ СДЕЛАЛ ПОЛНОСТЬЮ САМ, ИИ ПОМОГ С ОПТИМИЗАЦИЕЙ SEO, ПРОИЗВОДИТЕЛЬНОСТИ И ДОСТУПНОСТИ
export default function Footer() {
    return (
        <footer className='pt-10 px-4 xl:px-10 pb-4 flex flex-col xl:flex-row gap-8'>
            <div className='flex flex-col gap-8 xl:hidden'>
                <div className='flex flex-col gap-3'>
                    <img loading='lazy' className='w-35 h-15' src='/logo-black.svg' alt='FMF Логотип' />
                    <p className='text-[#808080] text-sm/4'>БАД. Не является лекарственным средством. Требуется консультация специалиста</p>
                </div>
                <div className='flex flex-col gap-4 text-base'>
                    <div className='text-black flex flex-col gap-2'>
                        <a href='https://example.com' aria-label='Публичная Оферта'>Оферта</a>
                        <a href='https://example.com' aria-label='Политика конфиденциальности'>Политика конфиденциальности</a>
                    </div>
                    <div className='text-black flex flex-col gap-2'>
                        <p>Все права защищены</p>
                        <p>© 2026, Оптисалт</p>
                    </div>
                </div>
            </div>
            <div className='hidden xl:flex justify-between flex-1 py-10'>
                <div className='text-black flex flex-col gap-2 mt-auto'>
                    <p>© 2026, Оптисалт</p>
                    <p>Все права защищены</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <img loading='lazy' className='w-35 h-15' src='/logo-black.svg' alt='FMF Логотип' />
                    <p className='text-[#808080] text-sm/4'>БАД. Не является лекарственным средством. Требуется консультация специалиста</p>
                </div>
                <div className='text-black flex flex-col gap-2 mt-auto text-right'>
                    <a href='https://example.com' aria-label='Публичная Оферта' className='underline'>Оферта</a>
                    <a href='https://example.com' aria-label='Политика конфиденциальности' className='underline'>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}