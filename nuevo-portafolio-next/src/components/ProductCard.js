import Image from 'next/image';

const ProductCard = ({ title, imageUrl, stack, liveUrl, description }) => {
  return (
    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group block bg-surface rounded-lg overflow-hidden shadow-lg border border-border transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg hover:border-accent/50">
      <div className="overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={`Previsualización de ${title}`} 
          width={800} 
          height={600}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        {description && (
          <p className="text-sm text-secondary mt-2 leading-relaxed">{description}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((tech, index) => (
            <span key={index} className="text-xs font-semibold px-3 py-1 rounded-full bg-background text-secondary border border-border">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 font-semibold text-accent transition-opacity duration-300 group-hover:opacity-80">
          Ver proyecto &rarr;
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
