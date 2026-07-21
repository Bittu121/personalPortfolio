import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMonitor } from "react-icons/fi";

const ProjectCarousel = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div>
      <div className="relative rounded-2xl border border-content/10 bg-content/[0.02] overflow-hidden">
        {total > 0 ? (
          <img
            src={images[index]}
            alt={`${title} preview ${index + 1}`}
            className="w-full h-auto block"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-10 px-4">
            <FiMonitor size={28} className="text-content/15 mb-2" />
            <p className="text-content/55 font-semibold text-xs mb-0.5">
              Preview coming soon
            </p>
            <p className="text-content/30 text-[11px]">
              Screenshots will be added shortly.
            </p>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-card border border-content/10 text-content hover:border-content/30 transition"
            >
              <FiChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-card border border-content/10 text-content hover:border-content/30 transition"
            >
              <FiChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-[#818cf8]" : "w-1.5 bg-content/15"
                }`}
              />
            ))}
          </div>
          <span className="text-content/40 text-xs font-mono">
            {index + 1} / {total}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
