export const Home = () => {
    return (
        <section className="flex mx-[5.6rem] text-white py-[calc(4.5rem+73px)]">
            <div className="w-6/12">
                <p className="uppercase text-[#d0f224] font-bold text-[1.32rem] tracking-tighter">La plataforma de comercio número 1.</p>
                
                <h1 className="font-bold text-[3.6rem] leading-[4rem] mb-[1rem] mr-[8rem] whitespace-pre-wrap tracking-normal">Vende más, actúa rápido        y no pares jamás</h1>

                <p className="text-[1.5rem] mb-[1.5rem]">Shopify Plus es la mejor plataforma de comercio para llegar a más clientes, convertir más pagos y crecer rápido. Descubre por qué las marcas más innovadoras del mundo están de acuerdo.</p>
                <button className="bg-[#d0f224] text-black font-bold px-7 py-4 rounded-[50px] text-[1.1rem] hover:bg-[#b8d40c] tracking-normal">Contactar con el equipo de ventas</button>
            </div>

            <div className="w-6/12 flex items-center">
                <video className="w-full" src="https://www.youtube.com/watch?v=YR3KmH6ZPkc"></video>
            </div>
        </section>
    )
}