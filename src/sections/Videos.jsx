import { useEffect, useState } from "react";

const videos = [
  {
    src: "/videos/dance.mp4",
    title: "Cultural Dance",
    description:
      "A glimpse of the cultural performances during our celebration.",
  },
  {
    src: "/videos/fucntion.mp4",
    title: "Puja Function",
    description:
      "Celebrating together as a community during the festive days.",
  },
  {
    src: "/videos/kolabou-snan.mp4",
    title: "Kolabou Snan",
    description:
      "A beautiful traditional ritual from our Durga Puja.",
  },
  {
    src: "/videos/procession.mp4",
    title: "The Procession",
    description:
      "A celebration of devotion, joy and togetherness.",
  },
];

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close video modal with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section
      id="videos"
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
          -right-40
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
          -left-40
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
            Moments in Motion
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            Our Videos
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
            Experience the rituals, celebrations and unforgettable
            moments of our Durga Puja.
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
            VIDEO GRID
        ========================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {videos.map((video, index) => (
            <div
              key={video.src}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.06]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              {/* Video Preview */}
              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-black
                "
              >

                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {/* Play Button */}
                <button
                  onClick={() => setSelectedVideo(index)}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                  aria-label={`Play ${video.title}`}
                >
                  <span
                    className="
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-white/15
                      border
                      border-white/30
                      backdrop-blur-md
                      text-white
                      shadow-[0_0_30px_rgba(0,0,0,0.3)]
                      group-hover:scale-110
                      group-hover:bg-orange-400/80
                      transition-all
                      duration-300
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>

                {/* Video Number */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1
                    rounded-full
                    bg-black/40
                    border
                    border-white/10
                    backdrop-blur-md
                    text-xs
                    text-orange-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>


              {/* Video Information */}
              <div className="p-5 sm:p-6">

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                    group-hover:text-orange-200
                    transition-colors
                  "
                >
                  {video.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-gray-400
                    leading-6
                  "
                >
                  {video.description}
                </p>

                <button
                  onClick={() => setSelectedVideo(index)}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-orange-300
                    hover:text-orange-200
                    transition-colors
                  "
                >
                  Watch Video
                  <span
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>

              </div>

            </div>
          ))}

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================= */}
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm">
            Relive the moments. Feel the celebration.
          </p>

          <p
            className="
              mt-2
              text-orange-300/80
              text-sm
              italic
            "
          >
            Faith • Culture • Community
          </p>

        </div>

      </div>


      {/* =========================
          FULLSCREEN VIDEO MODAL
      ========================= */}
      {selectedVideo !== null && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/95
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            sm:p-8
          "
          onClick={() => setSelectedVideo(null)}
        >

          {/* Close Button */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              setSelectedVideo(null);
            }}
            className="
              absolute
              top-5
              right-5
              sm:top-7
              sm:right-7
              z-20
              w-11
              h-11
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              text-white
              flex
              items-center
              justify-center
              hover:bg-white/20
              transition
            "
            aria-label="Close video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>


          {/* Video Container */}
          <div
            className="
              w-full
              max-w-5xl
              flex
              flex-col
              items-center
            "
            onClick={(event) => event.stopPropagation()}
          >

            <video
              src={videos[selectedVideo].src}
              controls
              autoPlay
              playsInline
              className="
                w-full
                max-h-[75vh]
                rounded-2xl
                shadow-2xl
                bg-black
              "
            />

            <div className="mt-5 text-center">

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-white
                "
              >
                {videos[selectedVideo].title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {videos[selectedVideo].description}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Videos;