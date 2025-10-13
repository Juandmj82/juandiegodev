import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { href: "#", text: "Inicio" },
    { href: "#sobre-mi", text: "Sobre Mí" },
    { href: "#habilidades", text: "Habilidades" },
    { href: "#portafolio-backend", text: "Portafolio" },
    { href: "#contacto", text: "Hablemos" },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
            <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="font-bold text-lg text-primary">
                    JuanDiDev
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="relative text-secondary hover:text-primary transition-colors duration-300 py-2 group"
                        >
                            {link.text}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
