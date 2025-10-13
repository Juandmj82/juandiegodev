import ProductCard from './ProductCard';
import { allDigitalProducts } from '@/data/products';
import Link from 'next/link';

// Seleccionamos solo los primeros 3 proyectos para la página principal
const featuredProducts = allDigitalProducts.slice(0, 3);

const DigitalProducts = () => {
  return (
    <section id="productos-digitales" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-primary text-center">
        Laboratorio de Productos Digitales<span className="text-accent">.</span>
      </h2>
      <p className="text-lg text-secondary mt-6 max-w-3xl mx-auto text-center">
        Además de mi formación en backend, disfruto llevando ideas desde el concepto hasta un producto web funcional y desplegado, utilizando flujos de trabajo ágiles y modernos.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/productos" className="inline-block border border-secondary/50 text-secondary font-bold py-3 px-6 rounded-md transition-colors duration-300 hover:bg-surface hover:border-surface">
          Ver Todos los Productos
        </Link>
      </div>
    </section>
  );
};

export default DigitalProducts;
