"use client";
import { BoxItem, boxItems } from "@/components/bubbles/bubblesData";

const Bubbles = () => {
  const mobileBubbles = [
    boxItems[0],
    boxItems[3],
    boxItems[4],
    boxItems[8],
    boxItems[9],
  ];

  const mobilePositions = [
    { x: -150, y: 150 },
    { x: -80, y: 190 },
    { x: 0, y: 200 },
    { x: 80, y: 190 },
    { x: 150, y: 150 },
  ];

  const renderBoxItem = (item: BoxItem, index?: number, isMobile = false) => {
    const IconComponent = item.icon;
    const position =
      isMobile && index !== undefined ? mobilePositions[index] : item.position;

    return (
      <div className="cursor-grab" key={item.id}>
        <div
          className={`h-18 w-18 bg-white/70 dark:bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] absolute top-1/2 left-1/2 text-black rounded-full flex flex-col items-center justify-center border border-white/40 dark:border-white/10 bg-gradient-to-r from-white/70 to-purple-50 dark:from-white/10 dark:to-transparent ${item.animationClass}`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          }}
          title={`${item.name} - ${item.description}`}
        >
          <IconComponent
            size={22}
            className="mb-1"
            style={{ color: item.color }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 -z-10">
      <div className="hidden md:block">
        {boxItems.map((item) => renderBoxItem(item))}
      </div>

      <div className="block md:hidden">
        {mobileBubbles.map((item, index) => renderBoxItem(item, index, true))}
      </div>
    </div>
  );
};
export default Bubbles;
