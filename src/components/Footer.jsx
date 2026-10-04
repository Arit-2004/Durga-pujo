function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Committee", href: "#committee" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Location", href: "#location" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#070504] text-white border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* =========================
              BRAND
          ========================= */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  border border-orange-400/30
                  bg-gradient-to-br from-orange-500/20 to-yellow-400/10
                  shadow-[0_0_25px_rgba(251,146,60,0.12)]
                  group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]
                  transition-all duration-500
                "
              >
                <span className="text-2xl">🪔</span>
              </div>

              <div className="leading-tight">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                  Durga Puja
                </h3>

                <p className="text-[10px] sm:text-xs text-orange-300 tracking-[0.25em] uppercase">
                  Our Celebration
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-gray-400 leading-7">
              A 63-year-old tradition of faith, culture and togetherness,
              celebrated by the community of MAMC Township, Durgapur.
            </p>

            <p className="mt-5 text-orange-300/90 italic text-sm">
              A Puja Built by the Township, for the Township.
            </p>
          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    flex items-center gap-2
                    text-gray-400
                    hover:text-white
                    transition-colors duration-300
                  "
                >
                  <span
                    className="
                      w-1.5 h-1.5
                      rounded-full
                      bg-orange-400/60
                      group-hover:bg-orange-300
                      transition-colors
                    "
                  />

                  <span className="text-sm">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>


          {/* =========================
              LOCATION
          ========================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Visit Us
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">
                <span className="text-orange-300 text-lg">
                  📍
                </span>

                <div>
                  <p className="text-sm text-white font-medium">
                    D.T. Children's Park
                  </p>

                  <p className="mt-1 text-sm text-gray-400 leading-6">
                    MAMC Township,
                    <br />
                    Durgapur - 10,
                    <br />
                    West Bengal, India
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=D.T.%20Children's%20Park%2C%20MAMC%20Township%2C%20Durgapur"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  border border-orange-400/20
                  bg-orange-400/5
                  text-sm
                  text-orange-300
                  hover:bg-orange-400/10
                  hover:border-orange-400/40
                  transition-all duration-300
                "
              >
                Get Directions
                <span>→</span>
              </a>

            </div>
          </div>

        </div>


        {/* Divider */}
        <div className="mt-14 border-t border-white/10" />


        {/* =========================
            BOTTOM FOOTER
        ========================= */}
        <div
          className="
            py-7
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-center
            sm:text-left
          "
        >

          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} DT Children's Park Sarbojonin
            Durgapujo Committee. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-gray-500">
            Made with <span className="text-red-400">❤️</span> from Aritra Mahattam
          </p>

        </div>

      </div>


      {/* Decorative Bottom Glow */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

    </footer>
  );
}

export default Footer;