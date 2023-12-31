import Check from '../imgs/check.svg';

export const Description2 = () => {
    return (
        <section className="px-[5.6rem] bg-white py-[7.2rem]">
            <div className="flex justify-between">
                <div className="w-6/12">
                    <p className="uppercase text-[#1a41c0] font-bold text-[1.32rem] tracking-tighter">Diseñada para convertir</p>
                    <h1 className="font-bold text-[3.6rem] pr-[8rem] leading-[4rem] mb-[1rem] tracking-normal">Convierte hasta un 91% más desde el primer día</h1>
                    <p className="text-[1.5rem]">Más información</p>
                </div>

                <div className="w-6/12">
                    <ul className="grid grid-cols-1 gap-[2rem] text-[1.52rem]">
                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Atrae a compradores que estén buscando productos como los tuyos con audiencias segmentadas por datos en marketplaces sociales populares.</span>
                        </li>

                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Siempre realiza las ventas con Shop Pay, el proceso de pago de mejor conversión en internet.</span>
                        </li>
                        
                        <li className="flex justify-between items-start gap-[2rem]">
                            <img className='w-[3.8rem]' src={Check} alt="Check" />
                            <span>Retén a los clientes con programas de fidelización y un toque personal desde la página de inicio hasta la bandeja de entrada.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-[1rem] pt-[5rem]">
                <div>
                    <h1 className="mt-[-12px] text-[4.5rem] font-bold text-[#1a41c0]">91%</h1>
                    <p className="mt-[-12px] text-[1.15rem]">más de conversión en dispositivos móviles con Shop Pay que los procesos de pago habituales</p>
                </div>

                <div>
                    <h1 className="mt-[-12px] text-[4.5rem] font-bold text-[#1a41c0]">4 veces</h1>
                    <p className="mt-[-12px] text-[1.15rem]">más rapidez en los pagos con Shop Pay</p>
                </div>

                <div>
                    <h1 className="text-[4.5rem] font-bold text-[#1a41c0] leading-[5rem]">6,6 veces</h1>
                    <p className="text-[1.15rem]">más de retorno de la inversión publicitaria con Shopify Audiences</p>
                </div>

                <div>
                    <h1 className="mt-[-12px] text-[4.5rem] font-bold text-[#1a41c0]">100M+</h1>
                    <p className="mt-[-12px] text-[1.15rem]">de compradores de todo el mundo usan Shop Pay</p>
                </div>
            </div>
        </section>
    )
}
