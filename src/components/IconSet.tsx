import React, { useState, useRef, useEffect } from 'react';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Returns the Devicon CDN URL for an icon (e.g. devicon('javascript') -> javascript-original.svg) */
export const devicon = (name: string) =>
  `${DEVICON_BASE}/${name}/${name}-original.svg`;

export interface IconSetItem {
  src: string;
  label: string;
  /** Width/height of the image inside the tile, as % of the tile (default 80). */
  imageFillPercent?: number;
}

export interface IconSetProps {
  items: IconSetItem[];
  className?: string;
}

const IconSet: React.FC<IconSetProps> = ({ items, className }) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const [tapRevealedIndex, setTapRevealedIndex] = useState<number | null>(null);
  const tapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    return () => {
      if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    };
  }, []);

  const handleTapReveal = (index: number) => {
    if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    setTapRevealedIndex(index);
    tapTimeoutRef.current = setTimeout(() => {
      setTapRevealedIndex(null);
      tapTimeoutRef.current = null;
    }, 1000);
  };

  const handlePointerDown = (e: React.PointerEvent, index: number) => {
    if (e.pointerType !== 'touch') setPressedIndex(index);
  };

  return (
    <>
      <style>{`
        .icon-set-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .icon-set-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className={`icon-set-scroll grid grid-flow-col auto-cols-[5rem] gap-[0em] justify-items-center py-[0em] pb-[0em] overflow-x-auto overflow-y-hidden w-full max-w-full min-w-0 touch-pan-x ${className || ''}`}
      >
      {items.map((item, index) => {
        const fill = item.imageFillPercent ?? 80;
        return (
        <div
          key={index}
          className="relative flex flex-col items-center group pb-[2em]"
          data-pressed={pressedIndex === index}
          data-tap-revealed={tapRevealedIndex === index}
          onPointerDown={(e) => handlePointerDown(e, index)}
          onPointerUp={() => setPressedIndex(null)}
          onPointerLeave={() => setPressedIndex(null)}
          onPointerCancel={() => setPressedIndex(null)}
          onClick={() => isTouchDevice && handleTapReveal(index)}
        >
          <div
            role="img"
            aria-label={item.label}
            className="relative w-[3.5em] h-[3.5em] overflow-hidden [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] cursor-default rounded-[1.25em] touch-manipulation"
          >
            <span
              className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex items-center justify-center backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] [will-change:transform] group-hover:[transform:translate3d(0,0,2em)]"
              style={{
                boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="min-w-0 min-h-0 object-contain pointer-events-none"
                style={{ width: `${fill}%`, height: `${fill}%` }}
                loading="lazy"
              />
            </span>
          </div>

          <span className="absolute select-none top-full left-1/2 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] [transform:translate(-50%,0)] group-hover:opacity-100 group-hover:[transform:translate(-50%,-2em)] group-data-[pressed=true]:opacity-100 group-data-[pressed=true]:[transform:translate(-50%,-2em)] group-data-[tap-revealed=true]:opacity-100 group-data-[tap-revealed=true]:[transform:translate(-50%,-2em)]">
            {item.label}
          </span>
        </div>
        );
      })}
      </div>
    </>
  );
};

export default IconSet;
