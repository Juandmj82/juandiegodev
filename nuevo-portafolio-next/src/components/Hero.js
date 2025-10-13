import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen py-20">
      <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-5">
        {/* Columna de Texto (Izquierda) */}
        <div className="md:col-span-3 text-center md:text-left">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase text-secondary mb-4 animate-typewriter overflow-hidden">
            Junior Software Developer
            <br />
            Backend Java & Spring Boot
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary uppercase tracking-[0.15em] leading-[1.05] animate-fade-in-name">
            Juan Diego Merchán
          </h1>
          <p className="text-lg text-secondary mt-6 max-w-xl mx-auto md:mx-0 font-light animate-fade-in-copy">
            Partiendo de una base sólida en el desarrollo backend con Java y Spring Boot, mi filosofía es de aprendizaje continuo. Por eso, utilizo herramientas como el desarrollo asistido por IA para crear flujos de trabajo que se expanden más allá de un solo lenguaje, permitiéndome construir soluciones completas y eficientes con una perspectiva integral del producto.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#portafolio-backend"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,77,26,0.5)]"
            >
              Ver Portafolio
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-secondary/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Hablemos
            </a>
          </div>
        </div>
        {/* Columna de Imagen (Derecha) */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-full max-w-sm rounded-[2.5rem] border border-accent/20 bg-surface/80 p-4 shadow-[0_35px_80px_-30px_rgba(232,122,62,0.5),0_0_40px_rgba(255,112,67,0.15)] animate-fade-in-image">
            <div className="pointer-events-none absolute -left-10 top-12 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(232,122,62,0.45)_0%,transparent_65%)]"></div>
            <Image
              src="/profile-hero.webp"
              alt="Retrato de Juan Diego Merchán"
              width={400}
              height={400}
              className="relative z-10 w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
