import Check from '../imgs/check.svg';

export const Description6 = () => {
    return (
        <section className="px-[5.6rem] bg-white py-[7.2rem]">
            <p className="uppercase text-[#1a41c0] font-bold text-[1.32rem]">Comprometidos con la atencion al cliente</p>
            <h1 className="font-bold text-[3.6rem] pr-[8rem] leading-[4rem] mb-[1rem] tracking-normal mr-[20rem]">Cuenta con toda la asistencia que necesites</h1>

            <div className="flex mt-[3.5rem]">
                <div className="w-6/12 pr-[7rem]">
                    <ul className="grid grid-cols-1 gap-[2rem] text-[1.52rem]">
                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Atención al cliente técnica prioritaria 24/7 por teléfono, email o chat en vivo</span>
                        </li>

                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Conocimiento de la plataforma e información útil sobre el sector mediante el Programa de Éxito de los Emprendedores (Merchant Success)</span>
                        </li>

                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Migración personalizada, lanzamiento y atención al cliente para la gestión de cuentas sin coste adicional</span>
                        </li>

                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Personalización de la plataforma con más de 8.000 apps y cientos de partners de Shopify Plus y aplicaciones certificadas</span>
                        </li>
                    </ul>
                </div>

                <img className="w-6/12 h-[454.11px]" src="https://cdn.shopify.com/shopifycloud/plus_website/assets/pages/home/launch-engineers-large-401fe5a3e8d4ab934811a90871146cd7758efa167896901b937fcae8db70e51e.jpg?crop=none" alt="" />
            </div>

            <h1 className="font-bold text-[2.9rem] pr-[8rem] leading-[4rem] mb-[1rem] tracking-normal mt-[3.5rem]">Our customers say it better</h1>
            <img className="mb-[1.5rem]" src="https://cdn.shopify.com/b/shopify-brochure2-assets/3ae52b02e6420cfb957397fe42568cc9.png?originalWidth=290&originalHeight=97&crop=none" alt="" />

            <a className="text-[#1a41c0] font-bold text-[1.1rem] underline" href="">Read real, unbiased customer reviews on G2 </a>
        </section>
    )
}