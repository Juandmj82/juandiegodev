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
            <Link href="/" className="font-semibold text-accent transition-opacity duration-300 hover:opacity-80">
              &larr; Volver a la página principal
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
