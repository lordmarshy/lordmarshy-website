interface GlassPanelProps {
  children: React.ReactNode
}

const GlassPanel = ({ children }: GlassPanelProps) => {
  return (
    <div
      className="relative w-full h-full  rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] flex items-center justify-center p-2"
      style={{
        boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'
      }}
    >
      {children}
    </div>
  );
};

export default GlassPanel;



    // <button
    // key={index}
    // type="button"
    // aria-label={item.label}
    // onClick={item.onClick}
    // className={`relative !bg-transparent outline-none border-none cursor-pointer w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
    //   item.customClass || ''
    // }`}
    // >

    // </button>