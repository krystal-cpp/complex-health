export default function TargetAudience() {
    return (
        <div id='target-audience' className='px-4 xl:px-10 pt-10 pb-20 xl:pt-40'>
            <h2 className='text-black font-medium text-3xl/8 flex flex-col xl:px-50 xl:text-6xl/16 xl:text-center'>
                Комплекс для тех, кто хочет свободно двигаться и заботиться о своих суставах каждый день
            </h2>

            <div className='py-6 xl:hidden flex'>
                <img loading='lazy' src='/bones.webp' alt='Суставы БАД COMPLEX SW Оптисалт' />
            </div>

            <div className='hidden xl:flex xl:pt-20 xl:gap-45'>
                <img loading='lazy' className='xl:flex hidden w-190 h-120' src='/bones-xl.webp' alt='Суставы БАД COMPLEX SW Оптисалт' />
                <div className='flex flex-col gap-6 py-15'>
                    <h2 className='text-black font-medium text-3xl/10 flex flex-col'>
                        Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни
                    </h2>
                    <p className='text-[#808080] text-xl/5 flex flex-col pt-4'>
                        Это сбалансированный комплекс витаминов и микроэлементов, разработанный для ежедневного приема. Он обеспечивает питание суставов и стимулирует восстановление хряща, что дарит вам свободу движений без дискомфорта даже при высоких физических нагрузках.
                    </p>
                    <div className='flex pt-4'>
                        <a aria-label='Оставить заявку' href='#questions-form' className='bg-[#3193CC] rounded-4xl px-6 py-2 text-white text-2xl font-medium'>
                            Оставить заявку
                        </a>
                        <a aria-label='Оставить заявку' href='#questions-form' className='bg-[#3193CC] rounded-full w-14 h-14 flex items-center justify-center'>
                            <svg
                                className='w-8 h-8 text-white transform -rotate-45 ml-1 mb-1'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <h2 className='text-black font-medium text-xl/6 flex flex-col xl:hidden'>
                Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни
            </h2>

            <p className='text-[#808080] text-base/5 flex flex-col pt-4 xl:hidden'>
                Это сбалансированный комплекс витаминов и микроэлементов, разработанный для ежедневного приема. Он обеспечивает питание суставов и стимулирует восстановление хряща, что дарит вам свободу движений без дискомфорта даже при высоких физических нагрузках.
            </p>

            <div className='flex xl:hidden pt-4'>
                <a aria-label='Оставить заявку' href='#questions-form' className='bg-[#3193CC] rounded-4xl px-4 py-1.5 text-white text-base font-medium'>
                    Оставить заявку
                </a>
                <a aria-label='Оставить заявку' href='#questions-form' className='bg-[#3193CC] rounded-full w-10 h-10 flex items-center justify-center'>
                    <svg
                        className='w-6 h-6 text-white transform -rotate-45 ml-1 mb-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                    </svg>
                </a>
            </div>
        </div>
    );
}