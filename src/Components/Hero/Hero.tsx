// САМЫЙ ПРОБЛЕМНЫЙ КОМПОНЕНТ, ИЗ-ЗА ТОГО, ЧТО НУЖНО СОВМЕЩАТЬ BG С БАНКОЙ, ЧТОБЫ НА РАЗНЫХ РАЗМЕРАХ ЭКРАНА БАНКА ЛЕЖАЛА НА СУСТАВЕ, КОТОРЫЙ НА МАКЕТЕ, И ИИ С ЭТИМ СПРАВИЛСЯ, НО ПРИШЛОСЬ ПОПРОБОВАТЬ МНОГО РАЗНЫХ ВАРИАНТОВ, ЧТОБЫ ДОСТИЧЬ ЖЕЛАЕМОГО РЕЗУЛЬТАТА
// ИИ ПОМОГ С ОПТИМИЗАЦИЕЙ SEO, ПРОИЗВОДИТЕЛЬНОСТИ И ДОСТУПНОСТИ

export default function Hero() {
    return (
        <div className='relative px-4 xl:px-10 pb-10 xl:pb-30 w-full flex flex-col xl:grid xl:grid-cols-[auto_auto] bg-[#2F9DCF]'>
            <div
                className='hidden xl:block absolute inset-y-0 right-0 w-full bg-no-repeat bg-center pointer-events-none'
                style={{
                    backgroundImage: "url('/bg-hero-xl.webp')",
                    backgroundSize: '100% auto',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    WebkitMaskSize: '70% auto, 70% auto',
                    maskSize: '70% auto, 70% auto',
                    WebkitMaskPosition: 'right center, right center',
                    maskPosition: 'right center, right center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskComposite: 'source-in',
                    maskComposite: 'intersect',
                }}
            />
            <h1 className='text-6xl/14 xl:text-9xl/28 xl:pt-20 xl:z-10 text-white flex flex-col xl:col-span-1 pt-5'>
                <span>Свобода</span>
                <span>движения</span>
            </h1>

            <div className='border-t-2 mt-6 mb-4 xl:my-10 border-[#FFFFFF] xl:col-span-2 opacity-20' />

            <div className='hidden xl:flex xl:col-span-1 flex-1 z-10'>
                <div className='flex flex-col justify-between max-w-150'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl text-white font-medium'>«Complex SW СУСТАВЫ» порошок для опорно-двигательного аппарата</p>
                        <div className='flex'>
                            <a aria-label='Купить в 1 клик' href='#price-card' className='bg-white rounded-4xl px-6 py-2 text-[#3193CC] text-2xl font-medium'>
                                Купить в 1 клик
                            </a>
                            <a aria-label='Купить в 1 клик' href='#price-card' className='bg-white rounded-full w-14 h-14 flex items-center justify-center'>
                                <svg
                                    className='w-8 h-8 text-[#3193CC] transform -rotate-45 ml-1 mb-1'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='text-white flex flex-col gap-4'>
                        <p className='text-3xl/8 font-medium'>1 порция = 17 обычных капсул</p>
                        <p className='text-2xl/7'>Комплекс, который питает суставы изнутри и способствует обновлению хрящевой ткани</p>
                    </div>
                </div>
            </div>

            <div className='hidden xl:flex xl:col-span-1 xl:items-center justify-between xl:-mt-70'>
                <img loading='lazy' className='w-[clamp(380px,28vw,600px)] h-auto z-10 min-[1750px]:translate-x-30' src='/jar.webp' alt='Суставы БАД COMPLEX SW Оптисалт' />
                {/* ТУТ CODEX ПОМОГ РОВНЯТЬ БАНКУ ПО СУСТАВУ НА ВСЕХ РАЗМЕРАХ */}
                {/* НЕПРОСТОЙ МОМЕНТ, ЗАСТРЯЛ НА НЕМ, ВЕДЬ ПРОСТО ВЗЯТЬ BG ИЗ МАКЕТА - НЕДОСТАТОЧНО, НУЖНО ЕЩЕ ДВИГАТЬ БАНКУ, ЧТОБЫ НА РАЗНЫХ ЭКРАНАХ ОНА ЛЕЖАЛА НА СУСТАВЕ */}
                <div className='text-white font-medium text-2xl flex flex-col  xl:pt-10 gap-2 z-10 items-right'>
                    <p className='whitespace-nowrap'>420г. / 30 порций</p>
                    <p className='xl:text-right'>Месячный курс</p>
                </div>
            </div>

            <div className='text-xl font-medium text-white xl:hidden'>
                <p className='text-xl/6 xl:text-2xl'>«Complex SW СУСТАВЫ» порошок для опорно-двигательного аппарата</p>
                <p className='pt-4'>420г. / 30 порций</p>
                <p className=''>Месячный курс</p>
            </div>

            <div className='flex xl:hidden pt-4'>
                <a aria-label='Купить в 1 клик' href='#price-card' className='bg-white rounded-4xl px-4 py-1.5 text-[#3193CC] text-base font-medium'>
                    Купить в 1 клик
                </a>
                <a aria-label='Купить в 1 клик' href='#price-card' className='bg-white rounded-full w-10 h-10 flex items-center justify-center'>
                    <svg
                        className='w-6 h-6 text-[#3193CC] transform -rotate-45 ml-1 mb-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                    </svg>
                </a>
            </div>

            <div className='xl:hidden block -mx-4 bg-no-repeat bg-center relative'
                style={{ backgroundImage: "url('/bg-hero.svg')", backgroundSize: '100%' }}>
                <div className='absolute inset-x-0 top-0 h-10'
                    style={{ background: 'linear-gradient(0deg, rgba(47,157,207,0) 0%, #2F9DCF 100%)' }} />
                <div className='absolute inset-x-0 bottom-0 h-10'
                    style={{ background: 'linear-gradient(180deg, rgba(47,157,207,0) 0%, #2F9DCF 100%)' }} />
                <div className='flex items-center justify-center pt-8'>
                    <img loading='lazy' className='w-75 h-95' src='/jar.webp' alt='Суставы БАД COMPLEX SW Оптисалт' />
                </div>
            </div>

            <div className='text-white pt-6 xl:hidden'>
                <p className='text-xl font-medium'>1 порция = 17 обычных капсул</p>
                <p className='text-xl/6'>Комплекс, который питает суставы изнутри и способствует обновлению хрящевой ткани</p>
            </div>
        </div>
    );
}