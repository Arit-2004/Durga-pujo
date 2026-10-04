const committeeGroups = [
  {
    title: "President",
    members: ["Niranjan Mahattam"],
    featured: true,
  },
  {
    title: "Secretary",
    members: ["Bisal Koley", "Rahul Pandit"],
  },
  {
    title: "Cashier",
    members: ["Soumyadev Banerjee", "Aritra Mahattam"],
  },
  {
    title: "Advisor",
    members: [
      "Arun Roy",
      "Bubai Pandey",
      "Nilkhanta Mahattam",
      "Rabi Das",
    ],
  },
];

const workingMembers = [
  "Biswajit Dutta",
  "Baban",
  "Santanu",
  "Ayan",
  "Babai",
  "Dhruba",
  "Papai",
  "Rajbir",
  "Babla",
  "Banty",
  "Kushal",
  "Dipal",
  "Panthib",
  "Santu",
  "Subhojeet",
];

function Committee() {
  return (
    <section
      id="committee"
      className="
        relative overflow-hidden
        bg-[#0b0806] text-white
        py-24 sm:py-28
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute -top-40 -right-40
          w-[450px] h-[450px]
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-40 -left-40
          w-[400px] h-[400px]
          rounded-full
          bg-yellow-500/5
          blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">

          <p
            className="
              text-orange-400
              uppercase tracking-[0.35em]
              text-xs sm:text-sm
              mb-4
            "
          >
            The People Behind The Celebration
          </p>

          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-bold
            "
          >
            Our Committee
          </h2>

          <p
            className="
              max-w-2xl mx-auto
              mt-5
              text-gray-400
              leading-7
            "
          >
            The people who come together every year to make
            our Durga Puja a celebration for the entire township.
          </p>

          <div
            className="
              mt-6 mx-auto
              w-20 h-[2px]
              bg-gradient-to-r
              from-orange-400
              to-yellow-300
            "
          />
        </div>


        {/* Main Committee */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {committeeGroups.map((group) => (
            <div
              key={group.title}
              className={`
                group
                relative
                rounded-3xl
                border
                ${
                  group.featured
                    ? "border-orange-400/30 bg-gradient-to-br from-orange-500/10 to-yellow-400/5"
                    : "border-white/10 bg-white/[0.03]"
                }
                p-6
                transition-all duration-500
                hover:-translate-y-2
                hover:border-orange-300/30
                hover:bg-white/[0.06]
              `}
            >

              {/* Decorative icon */}
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  flex items-center justify-center
                  border border-orange-400/20
                  bg-orange-400/10
                  text-xl
                  mb-5
                "
              >
                {group.title === "President" && "👑"}
                {group.title === "Secretary" && "📋"}
                {group.title === "Cashier" && "💰"}
                {group.title === "Advisor" && "🤝"}
              </div>

              {/* Role */}
              <p
                className="
                  text-orange-300
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  mb-3
                "
              >
                {group.title}
              </p>

              {/* Names */}
              <div className="space-y-2">
                {group.members.map((member) => (
                  <h3
                    key={member}
                    className="
                      text-lg
                      font-semibold
                      text-white
                      group-hover:text-orange-100
                      transition-colors
                    "
                  >
                    {member}
                  </h3>
                ))}
              </div>

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0 left-6 right-6
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-orange-400/40
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />
            </div>
          ))}

        </div>


        {/* Working Members */}
        <div className="mt-16">

          <div className="text-center mb-10">

            <p
              className="
                text-orange-400
                uppercase
                tracking-[0.3em]
                text-xs
                mb-3
              "
            >
              Community Volunteers
            </p>

            <h3
              className="
                text-3xl
                sm:text-4xl
                font-bold
              "
            >
              Working Members
            </h3>

          </div>


          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-sm
              p-6 sm:p-8
            "
          >

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                gap-3
              "
            >

              {workingMembers.map((member, index) => (
                <div
                  key={member}
                  className="
                    group
                    flex items-center
                    gap-3
                    px-4 py-3
                    rounded-xl
                    border border-white/5
                    bg-white/[0.02]
                    hover:bg-orange-400/10
                    hover:border-orange-400/20
                    transition-all duration-300
                  "
                >

                  <span
                    className="
                      flex-shrink-0
                      w-7 h-7
                      rounded-full
                      flex items-center justify-center
                      text-xs
                      text-orange-300
                      bg-orange-400/10
                      border border-orange-400/10
                    "
                  >
                    {index + 1}
                  </span>

                  <span
                    className="
                      text-sm
                      text-gray-300
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {member}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* Closing Message */}
        <div className="mt-16 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-6 py-3
              rounded-full
              border border-orange-400/10
              bg-orange-400/5
            "
          >
            <span className="text-orange-300">🪔</span>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-300
                italic
              "
            >
              Together we celebrate, together we preserve our tradition.
            </p>

            <span className="text-orange-300">🪔</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Committee;