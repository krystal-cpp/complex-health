export default function QuestionsForm() {
    return (
        <div className='px-4 xl:px-10'>
            <div className='bg-white p-4 xl:p-10 flex flex-col gap-8 rounded-4xl'>
                <h2 className='font-medium text-3xl/9 xl:text-5xl text-black'>Остались вопросы? Напишите нам</h2>

                <div className='flex flex-col gap-10 xl:grid xl:grid-cols-2'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm xl:text-base text-[#808080]'>Эл. почта</p>
                            <a aria-label='Написать письмо' href='mailto:info@optisalt.ru' className='text-xl xl:text-3xl font-medium underline text-[#3496CE]'>info@optisalt.ru</a>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm xl:text-base text-[#808080]'>Мессенджеры</p>
                            <div className='flex gap-2'>
                                <a aria-label='Telegram' href='https://t.me/'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_728_841)">
                                            <path d="M20 0C14.6969 0 9.60625 2.10844 5.85938 5.85781C2.10866 9.6087 0.00107328 14.6956 0 20C0 25.3022 2.10938 30.3928 5.85938 34.1422C9.60625 37.8916 14.6969 40 20 40C25.3031 40 30.3937 37.8916 34.1406 34.1422C37.8906 30.3928 40 25.3022 40 20C40 14.6978 37.8906 9.60719 34.1406 5.85781C30.3937 2.10844 25.3031 0 20 0Z" fill="#3193CC" />
                                            <path d="M9.05291 19.7891C14.8842 17.2491 18.7717 15.5745 20.7154 14.7653C26.2717 12.455 27.4248 12.0538 28.1779 12.0402C28.3435 12.0375 28.7123 12.0784 28.9529 12.273C29.1529 12.437 29.2092 12.6589 29.2373 12.8147C29.2623 12.9703 29.2967 13.325 29.2685 13.6019C28.9685 16.7644 27.6654 24.4388 27.0029 27.9809C26.7248 29.4797 26.1717 29.9822 25.6373 30.0313C24.4748 30.1381 23.5935 29.2638 22.4685 28.5266C20.7092 27.3725 19.7154 26.6544 18.006 25.5284C16.031 24.2272 17.3123 23.5119 18.4373 22.3431C18.731 22.0372 23.8498 17.3825 23.9467 16.9603C23.9592 16.9075 23.9717 16.7106 23.8529 16.6069C23.7373 16.5028 23.5654 16.5384 23.4404 16.5666C23.2623 16.6066 20.4529 18.4653 15.0029 22.1425C14.206 22.6906 13.4842 22.9578 12.8342 22.9438C12.1217 22.9284 10.7467 22.54 9.72479 22.2081C8.47479 21.8009 7.47791 21.5856 7.56541 20.8941C7.60916 20.5341 8.10603 20.1656 9.05291 19.7891Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_728_841">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a aria-label='MAX' href='https://max.ru/'>
                                    <img loading='lazy' src='/max-logo.svg' alt='Мессенджер MAX' />
                                </a>
                                <a aria-label='WhatsApp' href='https://wa.me/'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_728_862)">
                                            <path d="M20 0C14.6969 0 9.60625 2.10844 5.85938 5.85781C2.10866 9.6087 0.00107328 14.6956 0 20C0 25.3022 2.10938 30.3928 5.85938 34.1422C9.60625 37.8916 14.6969 40 20 40C25.3031 40 30.3937 37.8916 34.1406 34.1422C37.8906 30.3928 40 25.3022 40 20C40 14.6978 37.8906 9.60719 34.1406 5.85781C30.3937 2.10844 25.3031 0 20 0Z" fill="#3193CC" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7148 9.16602C15.126 9.16602 10.5957 13.6963 10.5957 19.2851C10.5957 21.1976 11.127 22.9886 12.0508 24.5146L11.1482 27.5827C11.0964 27.7588 11.093 27.9457 11.1383 28.1236C11.1837 28.3016 11.2762 28.464 11.406 28.5938C11.5358 28.7237 11.6983 28.8161 11.8762 28.8615C12.0541 28.9068 12.241 28.9034 12.4171 28.8516L15.4852 27.949C17.0625 28.9032 18.8713 29.4065 20.7148 29.4041C26.3035 29.4041 30.8338 24.8738 30.8338 19.2851C30.8338 13.6963 26.3035 9.16602 20.7148 9.16602ZM18.4258 21.575C20.4729 23.6211 22.4269 23.8913 23.117 23.9166C24.1664 23.955 25.1884 23.1536 25.5861 22.2236C25.6358 22.1079 25.6538 21.9809 25.6382 21.8559C25.6225 21.7308 25.5738 21.6122 25.497 21.5123C24.9425 20.8039 24.1927 20.2949 23.46 19.789C23.3072 19.683 23.1191 19.6404 22.9355 19.6702C22.7519 19.7 22.5869 19.7999 22.4755 19.9489L21.8683 20.8748C21.8362 20.9244 21.7865 20.9599 21.7292 20.9742C21.6719 20.9884 21.6113 20.9804 21.5597 20.9517C21.1478 20.7159 20.5478 20.3152 20.1167 19.8841C19.6856 19.453 19.3092 18.8803 19.0977 18.4948C19.0721 18.4456 19.0649 18.389 19.0773 18.335C19.0898 18.2811 19.121 18.2333 19.1655 18.2003L20.1005 17.5061C20.2343 17.3904 20.3207 17.2293 20.3431 17.0538C20.3656 16.8782 20.3224 16.7006 20.222 16.5549C19.7686 15.8911 19.2404 15.0472 18.4744 14.4876C18.3753 14.4164 18.2596 14.3721 18.1383 14.3588C18.017 14.3455 17.8944 14.3637 17.7823 14.4117C16.8513 14.8104 16.0458 15.8324 16.0843 16.8838C16.1096 17.5739 16.3798 19.5279 18.4258 21.575Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_728_862">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a aria-label='VK' href='https://vk.com/'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_728_869)">
                                            <path d="M20 0C14.6969 0 9.60625 2.10844 5.85938 5.85781C2.10866 9.6087 0.00107328 14.6956 0 20C0 25.3022 2.10938 30.3928 5.85938 34.1422C9.60625 37.8916 14.6969 40 20 40C25.3031 40 30.3937 37.8916 34.1406 34.1422C37.8906 30.3928 40 25.3022 40 20C40 14.6978 37.8906 9.60719 34.1406 5.85781C30.3937 2.10844 25.3031 0 20 0Z" fill="#3193CC" />
                                            <path d="M31.3929 25.8392C31.3275 25.7321 30.9268 24.861 28.9982 23.0706C26.9786 21.1956 27.2497 21.4999 29.6818 18.2599C31.1636 16.2853 31.755 15.0799 31.5697 14.5635C31.394 14.0728 30.3054 14.2024 30.3054 14.2024L26.6818 14.2238C26.6818 14.2238 26.414 14.1874 26.2136 14.3063C26.0186 14.4242 25.8943 14.6953 25.8943 14.6953C25.8943 14.6953 25.32 16.2231 24.555 17.5228C22.9404 20.2635 22.2943 20.4081 22.0307 20.2378C21.4168 19.8413 21.57 18.6435 21.57 17.7938C21.57 15.1367 21.9729 14.0299 20.7857 13.7438C20.3915 13.6474 20.1022 13.5853 19.0929 13.5746C17.8007 13.5606 16.7057 13.5788 16.0865 13.8821C15.6729 14.0835 15.3557 14.5346 15.5507 14.5603C15.7897 14.5924 16.3318 14.706 16.62 15.0981C16.9918 15.6017 16.9779 16.7385 16.9779 16.7385C16.9779 16.7385 17.1922 19.8649 16.4797 20.2538C15.99 20.5217 15.3193 19.9774 13.8804 17.4896C13.3928 16.6235 12.9605 15.7274 12.5861 14.8067C12.5861 14.8067 12.479 14.5453 12.2872 14.4049C12.0557 14.2335 11.73 14.1799 11.73 14.1799L8.28539 14.2013C8.28539 14.2013 7.76896 14.2163 7.57825 14.4413C7.41003 14.6417 7.56539 15.0542 7.56539 15.0542C7.56539 15.0542 10.2622 21.3628 13.3147 24.5438C16.1165 27.4592 19.2954 27.2685 19.2954 27.2685H20.7365C20.7365 27.2685 21.1715 27.2203 21.3932 26.9803C21.5979 26.7606 21.5904 26.3481 21.5904 26.3481C21.5904 26.3481 21.5615 24.4142 22.4604 24.1303C23.3443 23.8496 24.4811 25.9978 25.6854 26.8249C26.595 27.4506 27.2861 27.3135 27.2861 27.3135L30.5068 27.2685C30.5068 27.2685 32.1911 27.1646 31.3918 25.8403L31.3929 25.8392Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_728_869">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form id="questions-form" className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2 xl:gap-4'>
                            <div className='flex flex-col xl:flex-row gap-2 xl:gap-6'>
                                <div className='flex flex-col flex-1 gap-1'>
                                    <label htmlFor='name' className='text-sm xl:text-base'>Имя</label>
                                    <input id='name' type='text' placeholder="Как к вам обращаться" className='bg-[#F3F3F3] rounded-xl p-4' />
                                </div>
                                <div className='flex flex-col flex-1 gap-1'>
                                    <label htmlFor='phone' className='text-sm xl:text-base'>Телефон</label>
                                    <input id='phone' type='tel' placeholder="+7 (___) ___-__-__" className='bg-[#F3F3F3] rounded-xl p-4' />
                                </div>
                                <div className='flex flex-col flex-1 gap-1'>
                                    <label htmlFor='email' className='text-sm xl:text-base'>Эл. почта</label>
                                    <input id='email' type='email' placeholder="Ваша эл.почта" className='bg-[#F3F3F3] rounded-xl p-4' />
                                </div>
                            </div>
                            <div className='flex items-start gap-2'>
                                <input
                                    id='consent'
                                    type='checkbox'
                                    className='peer sr-only'
                                />
                                <label htmlFor='consent' className='flex items-start gap-2 cursor-pointer'>
                                    <input type='checkbox' className='peer sr-only' />
                                    <span className='w-5 h-5 xl:w-6 xl:h-6 flex-none rounded bg-[#F3F3F3] border border-[#F3F3F3] flex items-center justify-center
                   peer-checked:bg-[#3496CE] peer-checked:border-[#3496CE]'>
                                        <svg className='hidden peer-checked:block' width="12" height="9" viewBox="0 0 12 9" fill="none">
                                            <path d="M1 4.5L4.5 8L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='text-sm/5 text-[#808080]'>
                                        Я даю свое согласие на обработку <a href='#' className='underline'>персональных данных</a>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className='flex'>
                            <button type='submit' className='bg-[#3193CC] rounded-4xl xl:px-6 xl:py-2 px-4 py-1.5 inline-flex text-white text-base xl:text-2xl font-medium'>
                                Оставить заявку
                            </button>
                            <button type='submit' className='bg-[#3193CC] rounded-full w-10 h-10 xl:w-14 xl:h-14 flex items-center justify-center'>
                                <svg
                                    className='w-6 h-6 xl:w-8 xl:h-8 text-white transform -rotate-45 ml-1 mb-1'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7 M16 12l-12 0' />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}