import ProjectCard from './ProjectCard';

const backendProjects = [
  {
    title: "ToDoListApi",
    videoUrl: "https://www.youtube.com/embed/XPZOXRto0Ac",
    description: "Aplicación completa para gestión de tareas con Spring Security, JWT, PostgreSQL y containerización con Docker.",
    githubUrl: "https://github.com/Juandmj82/ToDoListApi"
  },
  {
    title: "Escuela de Música",
    videoUrl: "https://www.youtube.com/embed/XwQ4njR8sUk",
    description: "Ejercicio práctico con Spring Security (Backend) y JavaScript/HTML/CSS (Frontend) con autenticación JWT.",
    githubUrl: "https://github.com/Juandmj82/Portafolio/tree/main/EscuelaDeMusica"
  },
  {
    title: "CRUD de Productos",
    videoUrl: "https://www.youtube.com/embed/xC9_Qp-ArzY",
    description: "Aplicación de gestión de productos desarrollada con Spring Boot y Thymeleaf, demostrando las operaciones básicas de datos.",
    githubUrl: "https://github.com/Juandmj82/Portafolio/tree/main/CRUDproductos"
  }
];

const BackendPortfolio = () => {
  return (
    <section id="portafolio-backend" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-primary text-center">
        Proyectos<span className="text-accent">.</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backendProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default BackendPortfolio;
