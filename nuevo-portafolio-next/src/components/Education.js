import Link from 'next/link';

const institutions = [
  { name: "Amazon", logo: "/education/amazon.png", url: "/certificados/certificado final amazon.pdf" },
  { name: "Oracle Next Education", logo: "/education/one.png", url: "/certificados/Certificado Alura Latam .pdf" },
  { name: "Coursera", logo: "/education/coursera.png", url: "/certificados/certificado final amazon.pdf" },
  { name: "Alura Latam", logo: "/education/alura.png", url: "/certificados/Certificado Alura Latam .pdf" },
];

const Education = () => {
  return (
    <section id="formacion" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-primary text-center">
        Formación Profesional<span className="text-accent">.</span>
      </h2>
      <p className="text-lg text-secondary mt-6 max-w-3xl mx-auto text-center">
        Comprometido con el aprendizaje continuo, he completado programas intensivos en algunas de las plataformas y empresas líderes en la industria tecnológica.
      </p>
      <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        {institutions.map((inst, index) => (
          <a href={inst.url} target="_blank" rel="noopener noreferrer" key={index} title={`Certificado de ${inst.name}`}>
            <img 
              src={inst.logo} 
              alt={`Logo de ${inst.name}`} 
              className="h-12 md:h-14 object-contain grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </a>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/certificaciones" className="border border-secondary/50 text-secondary font-bold py-3 px-6 rounded-md transition-colors duration-300 hover:bg-surface hover:border-surface">
          Ver Catálogo Completo
        </Link>
      </div>
    </section>
  );
};

export default Education;
