import LetterGlitch from "@/components/LetterGlitch";
import { Link } from "react-router-dom";
import PageHolder from "@/components/PageHolder";
import { Button } from "@/components/ui/button"
import { GrCodeSandbox } from "react-icons/gr";
import Cubes from '../components/Cubes';
import { useState } from "react";
import { useMediaQuery } from '../hooks/windowWidth';

const CubeHolder = () => {
    const isSm = useMediaQuery("(min-width: 640px)");
    return (
        <div className="size-[320px] max-sm:size-[280px] mx-4 bg-[rgba(0,0,0,0.6)] rounded-2xl flex items-center justify-center shadow-[0_0_50px_15px_rgba(0,0,0,0.6)]">
            <div className="size-full">
                <Cubes
                    gridSize={isSm ? 7 : 6}
                    maxAngle={150}
                    radius={3}
                    borderStyle="2px dashed #61b3dc"
                    faceColor="rgb(0, 0, 0)" 
                    rippleColor="rgba(97, 220, 163, 0.3)"
                    rippleSpeed={1.5}
                    autoAnimate
                    rippleOnClick
                />
            </div>
        </div>
    );
};

const Entry = () => {
    const [tagLineRandomNumber, _setTagLineRandomNumber] = useState(Math.floor(Math.random() * 6));

    const tagLine = [
        "Full-Stack Developer · React, Node & beyond",
        "Building apps from idea to deployment",
        "Full-Stack Developer · Problem solver & builder",
        "Portfolio · Projects · Contact",
        "See what I've been building",
        "Projects, experience & how to get in touch"
    ]


    return (
        <PageHolder 
            background={
                <LetterGlitch 
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    glitchSpeed={200}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            } 
            className="items-center gap-4 max-sm:gap-[14px] !w-[612px]"
        >
            <h1 className="
                w-[320px] max-sm:w-[280px] sm:h-[64px] text-3xl! max-sm:text-2.5xl! text-[#61dca3] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                flex items-center justify-center text-center
                transition-all duration-200 hover:scale-[1.05] active:scale-[1.05]"
            >Welcome to</h1>
            <h1 className="
                w-[416px] max-sm:w-[280px] sm:h-[82px] text-5xl! max-sm:text-4xl! text-[#61b3dc] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61dca3] border-2 border-dashed
                flex items-center justify-center text-center
                transition-all duration-200 hover:scale-[1.05] active:scale-[1.05]"
            >Guy's Website</h1>
            <h1 className="
                w-[320px] max-sm:w-[280px] sm:h-[64px] text-xl! max-sm:text-md! text-[#61dca3] select-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                bg-black rounded-xs border-[#61b3dc] border-2 border-dashed
                flex items-center justify-center text-center
                transition-all duration-200 hover:scale-[1.05] active:scale-[1.05]"
            >{tagLine[tagLineRandomNumber]}</h1>

            {/* Desktop */}
            {/* cube height spacing: (320 - ((28+4)*7)) /6 = 16 */}
            {/* cube spacing: (320 - ((28+4)*7)) /6 = 16 */}
            {/* Too add row on either side: 64+32=96 */} 
            
            {/* Mobile */}
            {/* cube height spacing: (280 - ((31+4)*6)) /5 = 14 */}
            {/* Too add row on either side: 70+28=98 */}             <CubeHolder/>
            
            <Button className="
                w-[224px] max-sm:w-[182px] h-[40px] drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]
                rounded-xs  border-[#61dca3] border-2 border-dashed
                hover:bg-[rgba(97,220,163,0.6)] hover:scale-[1.01]
                active:bg-[rgba(97,220,163,0.6)] active:scale-[1.01]"
                variant="outline"
            >
                <Link to="/home" className="flex flex-row items-center gap-4 ">
                    <p className="p2 text-2xl! text-[#61b3dc] select-none">Explore</p>
                    <GrCodeSandbox className="size-7 text-[#61b3dc] stroke-[2]"/>
                </Link>
            </Button>
        </PageHolder>
    )
}

export default Entry;