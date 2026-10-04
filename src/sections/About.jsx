function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden text-white"
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
      <div className="absolute inset-0 bg-black/65" />

      {/* Warm Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0806]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-28">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-300 uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">
            63 Years of Tradition
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            About Our Puja
          </h2>

          <div className="mt-5 mx-auto w-20 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-300" />

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Story */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-black/30
              backdrop-blur-md
              p-7 sm:p-10
            "
          >

            <p className="text-orange-300 text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
              A Puja Built by the Township, for the Township
            </h3>

            <p className="text-gray-200 leading-8">
              For 63 years, our Durga Puja has been a cherished part of
              the MAMC Township. What began as a community celebration
              has grown into a tradition that connects generations of
              families.
            </p>

            <p className="mt-5 text-gray-300 leading-8">
              Every year, neighbours come together to celebrate Maa Durga,
              share happiness, participate in cultural activities and
              create memories that continue from one generation to the next.
            </p>

            <p className="mt-5 text-gray-300 leading-8">
              Our Puja is not only about the four days of celebration.
              It represents the spirit of togetherness, friendship and
              community that makes our township special.
            </p>

          </div>

          {/* Tradition */}
          <div>

            <p className="text-orange-300 text-sm uppercase tracking-widest mb-4">
              Our Tradition
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mb-8">
              More Than a Puja.
              <br />
              <span className="text-orange-300">
                It's Our Community.
              </span>
            </h3>

            <div className="space-y-4">

              <TraditionItem
                icon="🪔"
                title="63 Years of Tradition"
                text="A legacy carried forward through generations of the MAMC Township."
              />

              <TraditionItem
                icon="🤝"
                title="Together as One"
                text="Neighbours and families come together to celebrate Maa Durga."
              />

              <TraditionItem
                icon="🎭"
                title="Culture & Celebration"
                text="Community participation, cultural programs and festive gatherings."
              />

              <TraditionItem
                icon="❤️"
                title="Memories Across Generations"
                text="A place where childhood memories become traditions for the next generation."
              />

            </div>

          </div>

        </div>

        {/* Puja Information */}
        <div className="mt-16">

          <div
            className="
              rounded-3xl
              border border-orange-300/20
              bg-black/40
              backdrop-blur-md
              p-6 sm:p-8
            "
          >

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <InfoItem
                title="Our Puja"
                value="63 Years"
              />

              <InfoItem
                title="Location"
                value="MAMC Township, Durgapur"
              />

              <InfoItem
                title="Venue"
                value="D.T. Children's Park"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


/* Tradition Card */

function TraditionItem({ icon, title, text }) {
  return (
    <div
      className="
        flex gap-4
        p-4
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        hover:bg-white/[0.08]
        transition-all duration-300
      "
    >
      <div className="text-2xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg">
          {title}
        </h4>

        <p className="text-sm text-gray-400 mt-1 leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}


/* Information Card */

function InfoItem({ title, value }) {
  return (
    <div className="text-center sm:text-left">

      <p className="text-xs uppercase tracking-widest text-orange-300">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value}
      </p>

    </div>
  );
}


export default About;