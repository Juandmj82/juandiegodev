import { allDigitalProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Productos Digitales - Juan Diego Merchán',
  description: 'Catálogo completo de proyectos web y prototipos desarrollados por Juan Diego Merchán.',
};

export default function ProductosPage() {
  return (
    <>
      <Header />
      <div className="bg-background text-primary min-h-screen">
        <main className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Laboratorio de Productos Digitales<span className="text-accent">.</span></h1>
            <p className="text-lg text-secondary mt-4">Un listado completo de proyectos web y prototipos.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {allDigitalProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/" className="inline-block border border-secondary/50 text-secondary font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(255,77,26,0.3)]">
              &larr; Volver a la página principal
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
