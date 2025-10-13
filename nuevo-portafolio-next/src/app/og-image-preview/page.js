export default function OGImagePreview() {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-background via-surface to-background flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="flex items-center gap-12 px-16 z-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-80 h-[500px] rounded-3xl overflow-hidden border-4 border-accent/30 shadow-2xl bg-surface/50">
            <img 
              src="/profile-hero.webp" 
              alt="Juan Diego Merchán"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
        </div>
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-primary mb-4 leading-tight">
            Juan Diego Merchán
          </h1>
          <p className="text-3xl text-accent font-semibold mb-6">
            Junior Software Developer
          </p>
          <p className="text-2xl text-secondary leading-relaxed max-w-xl">
            Backend con Java & Spring Boot
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="px-6 py-3 bg-accent/20 rounded-full">
              <p className="text-xl text-primary font-semibold">juandiegodev.vercel.app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
