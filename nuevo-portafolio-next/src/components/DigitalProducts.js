import ProductCard from './ProductCard';

const digitalProducts = [
  {
    title: "Landing Page para Diseñador",
    imageUrl: "/products/landing-diseno.webp",
    stack: ["Next.js", "Vercel", "IA Asistida"],
    liveUrl: "https://landingdiseno.vercel.app/"
  },
  {
    title: "Web para Psicóloga",
    imageUrl: "/products/web-psicologa.webp",
    stack: ["Astro", "TailwindCSS", "Vercel"],
    liveUrl: "https://web-psicologa-delta.vercel.app/"
  },
  {
    title: "Página para Terapia de Conexión",
    imageUrl: "/products/connect-art.webp",
    stack: ["HTML", "CSS", "JS", "Vercel"],
    liveUrl: "https://connectartherapie.vercel.app/"
  },
  {
    title: "App de Finanzas Personales",
    imageUrl: "/products/pocket-wise.webp",
    stack: ["React", "Vite", "Vercel"],
    liveUrl: "https://pocket-wise-ten.vercel.app/"
  }
];

const DigitalProducts = () => {
  return (
    <section id="productos-digitales" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-primary text-center">
        Laboratorio de Productos Digitales<span className="text-accent">.</span>
      </h2>
      <p className="text-lg text-secondary mt-6 max-w-3xl mx-auto text-center">
        Además de mi especialización en backend, disfruto llevando ideas desde el concepto hasta un producto web funcional y desplegado, utilizando flujos de trabajo ágiles y modernos.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {digitalProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default DigitalProducts;
