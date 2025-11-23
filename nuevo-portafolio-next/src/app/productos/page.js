'use client';

import { allDigitalProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useMemo } from 'react';

export default function ProductosPage() {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  // Extraer todas las tecnologías únicas
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    allDigitalProducts.forEach(product => {
      product.stack.forEach(tech => techSet.add(tech));
    });
    return ['Todos', ...Array.from(techSet).sort()];
  }, []);

  // Filtrar productos según la tecnología seleccionada
  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'Todos') {
      return allDigitalProducts;
    }
    return allDigitalProducts.filter(product =>
      product.stack.includes(selectedFilter)
    );
  }, [selectedFilter]);

  return (
    <>
      <Header />
      <div className="bg-background text-primary min-h-screen">
        <main className="max-w-5xl mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold">Laboratorio de Productos Digitales<span className="text-accent">.</span></h1>
            <p className="text-lg text-secondary mt-4">Desarrollo ágil con arquitectura asistida por IA</p>
          </div>

          {/* Methodology Callout */}
          <div className="mt-12 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🏗️</span>
              <h2 className="text-2xl font-bold text-primary">Metodología de Desarrollo</h2>
            </div>
            <p className="text-secondary mb-6 leading-relaxed">
              Cada producto es desarrollado siguiendo un flujo de trabajo estructurado que combina principios
              de ingeniería de software con desarrollo asistido por IA. El resultado: productos de calidad
              profesional con velocidad de prototipado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <strong className="text-primary">Arquitectura sólida:</strong>
                  <span className="text-secondary"> Clean Code, SOLID, DRY, KISS</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <strong className="text-primary">IA como copiloto senior:</strong>
                  <span className="text-secondary"> Asistencia en decisiones técnicas</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <strong className="text-primary">Stack optimizado:</strong>
                  <span className="text-secondary"> Selección estratégica de tecnologías</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <strong className="text-primary">Iteración rápida:</strong>
                  <span className="text-secondary"> De concepto a producción en días</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-secondary/70 mt-6 italic">
              No es "código generado por IA", es desarrollo profesional acelerado con IA como herramienta de productividad.
            </p>
          </div>

          {/* Technology Filters */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-secondary mb-4 text-center">Filtrar por tecnología:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedFilter(tech)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${selectedFilter === tech
                      ? 'bg-accent text-white shadow-[0_0_15px_rgba(255,77,26,0.4)]'
                      : 'bg-background border border-secondary/30 text-secondary hover:border-accent/50 hover:text-accent'
                    }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-secondary/70 mt-4">
              Mostrando {filteredProducts.length} de {allDigitalProducts.length} productos
            </p>
          </div>

          {/* Products Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} showDescription={true} />
            ))}
          </div>

          {/* Back Button */}
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
