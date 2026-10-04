function Location() {
  return (
    <section
      id="location"
      className="
        relative
        overflow-hidden
        bg-[#0b0806]
        text-white
        py-24 sm:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-yellow-500/5
          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="text-center mb-14">

          <p
            className="
              text-orange-400
              uppercase
              tracking-[0.35em]
              text-xs sm:text-sm
              mb-4
            "
          >
            Come Celebrate With Us
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            Visit Us
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-gray-400
              leading-7
            "
          >
            Join us at our Puja celebration and be a part of
            the tradition, devotion and togetherness of our township.
          </p>

          <div
            className="
              mt-6
              mx-auto
              w-20
              h-[2px]
              bg-gradient-to-r
              from-orange-400
              to-yellow-300
            "
          />

        </div>


        {/* =========================
            LOCATION CONTENT
        ========================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-10
            items-stretch
          "
        >

          {/* =========================
              LOCATION INFORMATION
          ========================= */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-sm
              p-7
              sm:p-10
              flex
              flex-col
              justify-between
            "
          >

            <div>

              {/* Location Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  border
                  border-orange-400/20
                  bg-orange-400/10
                  text-2xl
                  mb-7
                "
              >
                📍
              </div>

              <p
                className="
                  text-orange-300
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  mb-3
                "
              >
                Our Venue
              </p>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                "
              >
                D.T. Children's Park
              </h3>

              <p
                className="
                  mt-4
                  text-gray-300
                  leading-7
                "
              >
                MAMC Township,
                <br />
                Durgapur - 10,
                <br />
                West Bengal, India
              </p>

            </div>


            {/* Location Details */}
            <div className="mt-10 space-y-4">

              {/* Address */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.02]
                  p-4
                "
              >

                <span className="text-orange-300 text-lg">
                  🏠
                </span>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Address
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    D.T. Children's Park, MAMC Township, Durgapur-10
                  </p>
                </div>

              </div>


              {/* Celebration */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.02]
                  p-4
                "
              >

                <span className="text-orange-300 text-lg">
                  🪔
                </span>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Celebration
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    63 Years of Durga Puja Tradition
                  </p>
                </div>

              </div>

            </div>


            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=D.T.%20Children's%20Park%2C%20MAMC%20Township%2C%20Durgapur"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                w-full
                flex
                items-center
                justify-center
                gap-3
                px-6
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-orange-400
                to-yellow-300
                text-black
                font-semibold
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(251,146,60,0.25)]
                transition-all
                duration-300
              "
            >
              <span>📍</span>
              Get Directions
              <span>→</span>
            </a>

          </div>


          {/* =========================
              MAP
          ========================= */}
          <div
            className="
              relative
              min-h-[400px]
              lg:min-h-full
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-white/[0.03]
            "
          >

            <iframe
              title="D.T. Children's Park Location"
              src="https://www.google.com/maps?q=D.T.%20Children's%20Park,%20MAMC%20Township,%20Durgapur&output=embed"
              className="
                absolute
                inset-0
                w-full
                h-full
                border-0
                grayscale-[20%]
                contrast-[95%]
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay */}
            <div
              className="
                absolute
                top-4
                left-4
                right-4
                pointer-events-none
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-black/70
                  backdrop-blur-md
                  border
                  border-white/10
                "
              >
                <span className="text-orange-300">
                  📍
                </span>

                <span className="text-sm text-white">
                  D.T. Children's Park
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================= */}
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm">
            We look forward to celebrating with you.
          </p>

          <p
            className="
              mt-2
              text-orange-300/80
              text-sm
              italic
            "
          >
            Maa Durga's blessings • Our community • Our tradition
          </p>

        </div>

      </div>

    </section>
  );
}

export default Location;