const About = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
        {/* Columna del Título */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-primary sticky top-20">
            Sobre Mí<span className="text-accent">.</span>
          </h2>
        </div>
        
        {/* Columna del Texto */}
        <div className="md:col-span-2">
          <p className="text-lg text-secondary leading-relaxed">
            Soy un desarrollador de software con una especialización en backend con Java, formado en programas de élite como Oracle Next Education y Amazon Junior Software Developer.
          </p>
          <p className="text-lg text-secondary mt-6 leading-relaxed">
            Mi trayectoria de más de 15 años como educador me ha dado una perspectiva única: transformo conceptos abstractos en soluciones de software prácticas y comprensibles, comunicando ideas complejas con claridad y empatía. Esta habilidad es mi mayor activo al colaborar en equipos y entender las necesidades reales del usuario.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
