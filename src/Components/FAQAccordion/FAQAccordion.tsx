import { useState } from "react";

type FAQAccordionProps = {
    title: string;
    children: React.ReactNode;
};

const FAQAccordion = ({ title, children }: FAQAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='rounded-4xl overflow-hidden'>
            <button type='button'
                className={[
                    'w-full p-4 xl:p-6 flex items-center gap-3 justify-between text-left text-xl/5 xl:text-2xl font-medium text-black',
                    'bg-white',
                    isOpen ? 'border-b-0' : ''
                ].join(' ')}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}>
                <span>{title}</span>
                <span className='text-xl'>{isOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_676_1472)">
                        <path d="M6 12L18 12" stroke="#3496CE" stroke-width="2" stroke-linecap="round" />
                        <circle cx="12" cy="12" r="11" stroke="#3496CE" stroke-width="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_676_1472">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_676_1463)">
                            <path d="M12 18L12 6" stroke="#3496CE" stroke-width="2" stroke-linecap="round" />
                            <path d="M6 12L18 12" stroke="#3496CE" stroke-width="2" stroke-linecap="round" />
                            <circle cx="12" cy="12" r="11" stroke="#3496CE" stroke-width="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_676_1463">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                }</span>
            </button>

            {isOpen && (
                <div className='bg-white px-4 pb-4 text-sm/4 xl:text-lg text-[#808080]'>{children}</div>
            )}
        </div>
    );
};

export const FAQ = () => {
    return (
        <section id='faq' className='px-4 xl:px-50 lg:py-30 py-16'>

            <div className='space-y-1'>
                <FAQAccordion title='Можно ли «Complex SW СУСТАВЫ» принимать с другими препаратами'>
                    Совместим с большинством лекарств. Перерыв между приемами — 30 минут.
                </FAQAccordion>

                <FAQAccordion title='Какие противопоказания?'>
                    Противопоказанием является индивидуальная непереносимость компонентов препарата.
                </FAQAccordion>

                <FAQAccordion title='Почему в форме порошка, а не капсул?'>
                    Быстрое усвоение и удобная дозировка.
                </FAQAccordion>

                <FAQAccordion title='Какие показания для приема комплекса'>
                    Боли в суставах, профилактика, высокие нагрузки, восстановление.
                </FAQAccordion>
            </div>
        </section>
    );
};