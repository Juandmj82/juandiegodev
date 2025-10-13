const Contact = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-primary">
        Hablemos<span className="text-accent">.</span>
      </h2>
      <p className="text-lg text-secondary mt-6 max-w-2xl mx-auto">
        Estoy buscando activamente nuevas oportunidades y desafíos. Si tienes un proyecto en mente o una vacante que se alinee con mi perfil, me encantaría conectar contigo.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="https://wa.me/+573133697599" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105"
        >
          Enviar Mensaje
        </a>
        <a 
          href="/cv/cvespanol.pdf" 
          target="_blank"
          download
          className="w-full sm:w-auto inline-block border border-secondary/50 text-secondary font-bold py-3 px-8 rounded-md transition-colors duration-300 hover:bg-surface hover:border-surface"
        >
          Descargar CV (ES)
        </a>
        <a 
          href="/cv/cvenglish.pdf" 
          target="_blank"
          download
          className="w-full sm:w-auto inline-block border border-secondary/50 text-secondary font-bold py-3 px-8 rounded-md transition-colors duration-300 hover:bg-surface hover:border-surface"
        >
          Descargar CV (EN)
        </a>
      </div>
    </section>
  );
};

export default Contact;
