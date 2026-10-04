function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="public/videos/motionvideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-5">

        <div className="max-w-4xl">

          <p className="text-orange-300 uppercase tracking-[0.4em] text-xs sm:text-sm mb-5">
            A Celebration of Faith & Culture
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white">
            Durga Puja
          </h1>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-200">
            Where devotion meets celebration
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#about"
              className="
                px-7 py-3.5
                rounded-full
                bg-gradient-to-r from-orange-400 to-yellow-300
                text-black
                font-semibold
                hover:scale-105
                transition-all duration-300
              "
            >
              Discover Our Puja
            </a>

            <a
              href="#gallery"
              className="
                px-7 py-3.5
                rounded-full
                border border-white/30
                bg-white/10
                backdrop-blur-md
                text-white
                font-semibold
                hover:bg-white/20
                hover:scale-105
                transition-all duration-300
              "
            >
              Explore Gallery
            </a>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10">

        <a
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition"
        >
          <span className="text-xs tracking-widest uppercase mb-2">
            Scroll
          </span>

          <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </a>

      </div>

    </section>
  );
}

export default Hero;