const skills = [
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'Spring Boot', icon: '/icons/springboot.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'HTML5', icon: '/icons/html.png' },
  { name: 'CSS3', icon: '/icons/css.png' },
  { name: 'SQL', icon: '/icons/mysql.png' },
  { name: 'PostgreSQL', icon: '/icons/postgres.png'},
  { name: 'Git', icon: '/icons/git.png' },
  { name: 'Docker', icon: '/icons/docker.png' },
  { name: 'Azure DevOps', icon: '/icons/azure.png' },
];

const Skills = () => {
  // Duplicamos el array para el efecto de bucle infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="habilidades" className="py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary">
          Habilidades Técnicas<span className="text-accent">.</span>
        </h2>
        <p className="text-lg text-secondary mt-4 max-w-3xl mx-auto">
          Un ecosistema de herramientas para construir soluciones robustas y escalables.
        </p>
      </div>
      <div className="mt-12 w-full overflow-hidden relative">
        <div className="flex animate-scroll group-hover:pause">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="flex-shrink-0 w-48 flex flex-col items-center justify-center mx-4">
              <img src={skill.icon} alt={skill.name} className="h-16 object-contain" />
              <p className="mt-2 text-secondary">{skill.name}</p>
            </div>
          ))}
        </div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background via-transparent to-background pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Skills;
