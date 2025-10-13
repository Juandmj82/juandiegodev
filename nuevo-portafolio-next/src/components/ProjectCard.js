const ProjectCard = ({ title, videoUrl, description, githubUrl }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden flex flex-col text-left shadow-lg border border-border transition-shadow duration-300 hover:shadow-accent/20 hover:shadow-lg">
      <div className="aspect-video">
        <iframe 
          src={videoUrl} 
          title={`Video demo de ${title}`} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-secondary mt-2 flex-grow">{description}</p>
        <div className="mt-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent transition-opacity duration-300 hover:opacity-80">
            Ver en GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
