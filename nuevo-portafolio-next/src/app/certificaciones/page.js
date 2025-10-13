import { allCertificates } from '@/data/certificates';
import Link from 'next/link';

const CertificateCard = ({ title, platform, date, url }) => {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 flex flex-col">
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      <p className="text-secondary mt-2">{platform}</p>
      <p className="text-sm text-secondary mt-1">{date}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white font-bold py-2 px-4 rounded-md mt-4 text-center transition-opacity duration-300 hover:opacity-90">
        Ver Certificado
      </a>
    </div>
  );
};

export default function CertificacionesPage() {
  return (
    <div className="bg-background text-primary min-h-screen">
      <main className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Catálogo de Certificaciones</h1>
          <p className="text-lg text-secondary mt-4">Un listado completo de mi formación continua.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="font-semibold text-accent transition-opacity duration-300 hover:opacity-80">
            &larr; Volver a la página principal
          </Link>
        </div>
      </main>
    </div>
  );
}
