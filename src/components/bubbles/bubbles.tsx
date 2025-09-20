"use client";
import { BoxItem, boxItems } from "@/components/bubbles/bubblesData";

const Bubbles = () => {
  const renderBoxItem = (item: BoxItem) => {
    const IconComponent = item.icon;
    return (
      <div className="cursor-grab" key={item.id}>
        <div
          className={`h-18 w-18 bg-white/70 dark:bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] absolute top-1/2 left-1/2 text-black rounded-full flex flex-col items-center justify-center border border-white/40  dark:border-white/10 bg-gradient-to-r from-white/70 to-purple-50 dark:from-white/10 dark:to-transparent ${item.animationClass} `}
          style={{
            transform: `translate(${item.position.x}px, ${item.position.y}px) translate(-50%, -50%)`,
          }}
          title={`${item.name} - ${item.description}`}
        >
          <IconComponent
            size={22}
            className={` mb-1`}
            style={{ color: item.color }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 -z-10">{boxItems.map(renderBoxItem)}</div>
  );
};

export default Bubbles;
