export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-cream-lilac">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-balance leading-tight text-foreground">
            Highway is closed.
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0 text-pretty">
            We were building self-driving content for your blog. We walked away from it.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            The full pitch, and why we didn't ship it:{' '}
            <a
              href="https://moochagency.substack.com"
              className="font-semibold text-foreground underline underline-offset-4 hover:text-accent transition-colors"
            >
              Why we're not building Highway &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
