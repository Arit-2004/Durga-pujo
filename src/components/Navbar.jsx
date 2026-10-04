import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Committee", href: "#committee" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Glass Navbar */}
      <div className="mx-3 mt-3 sm:mx-6">
        <div
          className="
            max-w-7xl mx-auto
            rounded-2xl
            border border-white/10
            bg-black/50
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >

          <div className="px-5 sm:px-7">
            <div className="h-[72px] flex items-center justify-between">

              {/* LOGO */}
              <a
                href="#home"
                className="group flex items-center gap-3"
              >
                {/* Logo Symbol */}
                <div
                  className="
                    relative
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    border border-orange-400/40
                    bg-gradient-to-br from-orange-500/20 to-yellow-400/10
                    shadow-[0_0_20px_rgba(251,146,60,0.15)]
                    group-hover:shadow-[0_0_25px_rgba(251,146,60,0.35)]
                    transition-all duration-500
                  "
                >
                  <span className="text-xl">🪔</span>
                </div>

                {/* Logo Text */}
                <div className="leading-tight">
                  <h1
                    className="
                      text-white
                      font-semibold
                      text-lg sm:text-xl
                      tracking-wide
                    "
                  >
                    Durga Puja
                  </h1>

                  <p className="text-[10px] sm:text-xs text-orange-300 tracking-[0.25em] uppercase">
                    Our Celebration
                  </p>
                </div>
              </a>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden lg:flex items-center gap-1">

                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      relative
                      px-4 py-2
                      text-sm
                      text-gray-300
                      font-medium
                      rounded-lg
                      transition-all
                      duration-300
                      hover:text-white
                      hover:bg-white/5
                      group
                    "
                  >
                    {link.name}

                    {/* Animated underline */}
                    <span
                      className="
                        absolute
                        left-1/2
                        -bottom-0.5
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-orange-400
                        via-yellow-300
                        to-orange-400
                        group-hover:w-7
                        transition-all
                        duration-300
                      "
                    />
                  </a>
                ))}

              </div>

              {/* CTA BUTTON */}
              <a
                href="#location"
                className="
                  hidden md:flex
                  items-center gap-2
                  px-5 py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  text-black
                  bg-gradient-to-r
                  from-orange-400
                  via-yellow-300
                  to-orange-400
                  shadow-[0_0_20px_rgba(251,146,60,0.2)]
                  hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <span>📍</span>
                Visit Us
              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  lg:hidden
                  w-11 h-11
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-white
                  hover:bg-white/10
                  transition-all
                "
                aria-label="Toggle navigation"
              >
                <div className="space-y-1.5">
                  <span
                    className={`
                      block w-5 h-[2px] bg-white transition-all duration-300
                      ${isOpen ? "rotate-45 translate-y-2" : ""}
                    `}
                  />

                  <span
                    className={`
                      block w-5 h-[2px] bg-white transition-all duration-300
                      ${isOpen ? "opacity-0" : ""}
                    `}
                  />

                  <span
                    className={`
                      block w-5 h-[2px] bg-white transition-all duration-300
                      ${isOpen ? "-rotate-45 -translate-y-2" : ""}
                    `}
                  />
                </div>
              </button>

            </div>

            {/* MOBILE MENU */}
            <div
              className={`
                lg:hidden
                overflow-hidden
                transition-all
                duration-500
                ${
                  isOpen
                    ? "max-h-[500px] opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="border-t border-white/10 pt-4">

                <div className="flex flex-col gap-1">

                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        flex items-center
                        px-4 py-3
                        rounded-xl
                        text-gray-300
                        hover:text-white
                        hover:bg-white/5
                        transition-all
                        duration-300
                      "
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-400 mr-3 opacity-70" />

                      {link.name}
                    </a>
                  ))}

                  {/* Mobile CTA */}
                  <a
                    href="#location"
                    onClick={() => setIsOpen(false)}
                    className="
                      mt-3
                      flex items-center justify-center gap-2
                      py-3
                      rounded-xl
                      font-semibold
                      text-black
                      bg-gradient-to-r
                      from-orange-400
                      to-yellow-300
                    "
                  >
                    📍 Visit Us
                  </a>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;