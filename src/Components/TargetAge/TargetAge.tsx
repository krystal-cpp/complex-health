export default function TargetAge() {
    return (
        <div className='pt-16 px-4 xl:px-10'>
            <h2 className='font-medium xl:hidden text-black text-3xl/9 xl:text-5xl/10'>Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.</h2>

            <div className='relative pt-4 -mx-4 xl:-mx-10'>
                <h2 className='font-medium hidden xl:block inset-x-10 absolute top-30 max-w-[50%] z-2 text-black xl:text-5xl/14'>Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.</h2>
                <img loading='lazy' className='block xl:hidden' src='/target-age.webp' alt='Целевой возраст для употребления Суставы БАД COMPLEX SW Оптисалт' />
                <img loading='lazy' className='hidden xl:block' src='/target-age-xl.webp' alt='Целевой возраст для употребления Суставы БАД COMPLEX SW Оптисалт' />
                <div className='hidden xl:block absolute inset-x-0 top-120 z-1 pointer-events-none'>
                    <svg width="982" height="608" viewBox="0 0 982 608" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M972 642.362C678.025 765.203 292.444 108.734 -118.935 187.982C-259.907 215.138 -271.683 311.591 -502.107 339.586C-746.418 369.268 -1155.8 49.7188 -1255 24.7275" stroke="white" stroke-opacity="0.6" stroke-width="51" />
                    </svg>
                </div>
                <div className='absolute inset-x-4 xl:inset-x-10 bottom-4 xl:bottom-10 z-2 flex flex-col xl:flex-row xl:items-center xl:gap-6 gap-1'>
                    <div className='bg-white/30 backdrop-blur-xl p-4 xl:p-6 xl:flex xl:flex-col xl:flex-1 xl:gap-12 rounded-4xl text-white border-2 border-white/10'>
                        <h2 className='font-medium text-xl xl:text-3xl'>18+ лет</h2>
                        <p className='text-base xl:text-xl pt-4'>Поддержка суставов при травмах</p>
                    </div>
                    <div className='bg-[#FFFFFF] p-4 xl:p-6 xl:flex xl:flex-col xl:flex-1 xl:gap-12 rounded-4xl text-[#3496CE] border-2 border-white/10'>
                        <h2 className='font-medium text-xl xl:text-3xl'>35+ лет</h2>
                        <p className='text-base xl:text-xl pt-4'>Профилактика возрастных изменений</p>
                    </div>
                    <div className='bg-white/30 backdrop-blur-xl p-4 xl:p-6 xl:flex xl:flex-col xl:flex-1 xl:gap-12 rounded-4xl text-white border-2 border-white/10'>
                        <h2 className='font-medium text-xl xl:text-3xl'>45+</h2>
                        <p className='text-base xl:text-xl pt-4'>Сохранение здоровья у женщин</p>
                    </div>
                </div>
            </div>
        </div>
    );
}