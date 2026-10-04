import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/pandel.png",
    title: "Durga Puja Celebration",
  },
  {
    src: "/images/photo1.jpeg",
    title: "Maa Durga",
  },
  {
    src: "/images/photo2.jpeg",
    title: "Puja Moments",
  },
  {
    src: "/images/photo3.jpeg",
    title: "Community Celebration",
  },
  {
    src: "/images/photo4.jpg.jpg",
    title: "Festive Moments",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const showPrevious = (event) => {
    event.stopPropagation();

    setSelectedImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNext = (event) => {
    event.stopPropagation();

    setSelectedImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="gallery"
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
          top-20
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
            Moments We Cherish
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            Our Gallery
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
            A collection of moments, celebrations and memories
            from our Durga Puja journey.
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
            GALLERY GRID
        ========================= */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-3
            sm:gap-5
          "
        >

          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(index)}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                text-left
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400/60

                ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : ""
                }
              `}
            >

              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  w-full
                  h-full
                  min-h-[180px]
                  sm:min-h-[220px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* View Icon */}
              <div
                className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-white
                  opacity-0
                  scale-90
                  group-hover:opacity-100
                  group-hover:scale-100
                  transition-all
                  duration-300
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              {/* Image Title */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-4
                  sm:p-5
                  translate-y-2
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              >

                <p
                  className="
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                  "
                >
                  {image.title}
                </p>

                <p
                  className="
                    text-xs
                    text-orange-300
                    mt-1
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                >
                  View photo
                </p>

              </div>

            </button>
          ))}

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================= */}
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm">
            Every photograph tells a story.
          </p>

          <p
            className="
              mt-2
              text-orange-300/80
              text-sm
              italic
            "
          >
            Celebrating faith, culture and togetherness.
          </p>

        </div>

      </div>


      {/* =========================
          FULLSCREEN LIGHTBOX
      ========================= */}

      {selectedImage !== null && (
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
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
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
            aria-label="Close image"
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


          {/* Previous Button */}
          <button
            onClick={showPrevious}
            className="
              absolute
              left-3
              sm:left-6
              z-20
              w-11
              h-11
              sm:w-12
              sm:h-12
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
            aria-label="Previous image"
          >
            ←
          </button>


          {/* Selected Image */}
          <div
            className="
              max-w-6xl
              max-h-[85vh]
              flex
              flex-col
              items-center
            "
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="
                max-w-full
                max-h-[75vh]
                object-contain
                rounded-xl
                shadow-2xl
              "
            />

            <div className="mt-5 text-center">

              <h3
                className="
                  text-white
                  text-lg
                  sm:text-xl
                  font-semibold
                "
              >
                {galleryImages[selectedImage].title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {selectedImage + 1} / {galleryImages.length}
              </p>

            </div>

          </div>


          {/* Next Button */}
          <button
            onClick={showNext}
            className="
              absolute
              right-3
              sm:right-6
              z-20
              w-11
              h-11
              sm:w-12
              sm:h-12
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
            aria-label="Next image"
          >
            →
          </button>

        </div>
      )}

    </section>
  );
}

export default Gallery;