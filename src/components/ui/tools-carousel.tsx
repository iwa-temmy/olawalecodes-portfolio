import { useEffect, useMemo, useState } from "react";
import { tools } from "../../utils/constant";

const VISIBLE_COUNT = 7;
const ROTATION_MS = 1800;

const ToolsCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOffset((previous) => (previous + 1) % tools.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  const visibleTools = useMemo(() => {
    const selected: typeof tools = [];
    let cursor = offset;

    while (selected.length < VISIBLE_COUNT) {
      const tool = tools[cursor % tools.length];

      if (!selected.some((item) => item.name === tool.name)) {
        selected.push(tool);
      }

      cursor += 1;
    }

    return selected;
  }, [offset]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-4 md:gap-6">
        {visibleTools.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex h-7 w-7 shrink-0 items-center justify-center opacity-0 animate-[toolFade_500ms_ease-out_forwards] md:h-8 md:w-8"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <img
              src={tool.url}
              alt={tool.name}
              className="h-full w-full object-contain opacity-80 transition-all duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCarousel;
