import { useEffect, useState } from "react";
import { tools } from "../../utils/constant";

const VISIBLE_COUNT = 7;

const StackSlot = ({ slotIndex }: { slotIndex: number }) => {
  const [index, setIndex] = useState(slotIndex % tools.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tools.length);
    }, 2400 + slotIndex * 350);
    return () => clearInterval(interval);
  }, [slotIndex]);

  const front = tools[index];
  const back = tools[(index + 1) % tools.length];

  return (
    <div className="relative w-7 h-7">
      <img
        key={`back-${back.name}`}
        src={back.url}
        alt=""
        aria-hidden="true"
        className="stack-back absolute inset-0 w-7 h-7 object-contain"
      />
      <img
        key={`front-${front.name}`}
        src={front.url}
        alt={front.name}
        className="stack-front absolute inset-0 w-7 h-7 object-contain"
      />
    </div>
  );
};

const ToolsCarousel = () => {
  return (
    <div className="flex gap-4 md:gap-6">
      {Array.from({ length: VISIBLE_COUNT }).map((_, i) => (
        <StackSlot key={i} slotIndex={i} />
      ))}
    </div>
  );
};

export default ToolsCarousel;
