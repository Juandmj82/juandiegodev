const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 mt-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-secondary">
          &copy; {currentYear} Juan Diego Merchán. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
