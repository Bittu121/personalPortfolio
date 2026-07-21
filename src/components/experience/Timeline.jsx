import FadeIn from "../FadeIn";

const Timeline = ({ items }) => {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[4px] top-2 bottom-2 w-px bg-content/[0.08]" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <FadeIn
            key={item.role}
            y={16}
            duration={0.4}
            delay={i * 0.1}
            className="relative"
          >
            <span className="absolute -left-6 top-1.5 w-[11px] h-[11px] rounded-full bg-[#818cf8] ring-4 ring-page" />

            <div className="flex items-start justify-between gap-4">
              <h4 className="text-[17px] font-bold text-content tracking-[-0.01em]">
                {item.role}
              </h4>
              <span className="font-mono text-[11px] text-content/30 whitespace-nowrap pt-1">
                {item.duration}
              </span>
            </div>

            <p className="text-sm text-[#818cf8] mt-1">
              {item.org}
              {item.location ? (
                <span className="text-[#818cf8]/70"> · {item.location}</span>
              ) : null}
            </p>

            <ul className="mt-4 space-y-2.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[14px] text-content/55 leading-[1.7]"
                >
                  <span className="text-content/25 flex-shrink-0">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {item.tech && (
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tech.map((tech, idx) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${
                      idx === 0
                        ? "text-[#a5b4fc] bg-[#6366f1]/15 border-[#6366f1]/40"
                        : "text-content/55 bg-content/[0.03] border-content/10"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
