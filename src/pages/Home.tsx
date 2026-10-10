import LightRays from "@/components/LightRays";
import PageHolder from "@/components/PageHolder";
import IconSet, { devicon } from "@/components/IconSet";
import type { IconSetItem } from "@/components/IconSet";
import inkLogo from '../assets/ink_logo.png'
import neonLogo from '../assets/neon_logo.png'
import ProfileCard from "@/components/ProfileCard";
import profilePic_nobg from '../assets/profile_pic_nobg.png';
import lordMarshy_s from '../assets/Lord_Marshy_Logo_small2.png'
import { Button } from "@/components/ui/button"
import { ExternalLink, SquareTerminal, X, Brain } from "lucide-react"
// import { LiaLinkedin } from "react-icons/lia";
import CircularText from "@/components/CircularText";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import DemoPage from "@/certificates/page";
import { useMediaQuery } from '../hooks/windowWidth';
import GlassPanel from "@/components/GlassPanel";

interface StartAppAction {
  label: string;
  underConstruction?: boolean;
}

interface StartAppButtonProps extends StartAppAction {
  onClick?: () => void;
}

interface WebsiteLinkAction {
  label: string;
  url: string;
}

interface ProjectBoardData {
  title: string;
  description: string;
  techStack: IconSetItem[];
  startApp?: StartAppAction;
  websiteLink?: WebsiteLinkAction;
  modalContent?: React.ReactNode;
}

interface CourseData {
  title: string;
  description: string;
  startApp?: StartAppAction;
  modalContent?: React.ReactNode;
}

const PROJECTS: ProjectBoardData[] = [
  {
    title: "GitProof",
    description: "Web app for issuing and sharing developer proofs",
    techStack: [
      { src: devicon("react"), label: "React" },
      { src: devicon("typescript"), label: "TypeScript" },
      { src: neonLogo, label: "Neon", imageFillPercent: 68 },
      { src: devicon("bun"), label: "Bun" },
      { src: devicon("prisma"), label: "Prisma" },
      { src: devicon("tailwindcss"), label: "Tailwind" },
      { src: devicon("postgresql"), label: "PostgreSQL" },
    ],
    startApp: { label: "Run Demo"},
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/gitproof" },
    modalContent: (
      <iframe
        title="GitProof demo"
        className="w-full min-h-[min(70vh,calc(90vh-10rem))] flex-1 border-0 rounded-lg bg-black/20"
        src="https://wobwobbird.github.io/GitProof/"
      />
    ),
  },
  {
    title: "Mood Tracker",
    description: "Mental Health Tracker CLI tool, record mood and review results. Uses Ink to create a full screen TUI, saves results in a SQLite database.",
    techStack: [
      { src: devicon("javascript"), label: "JavaScript" },
      { src: devicon("nodejs"), label: "Node.js" },
      { src: devicon("react"), label: "React" },
      { src: inkLogo, label: "Ink (TUI)" },
      { src: devicon("sqlite"), label: "SQLite" },
    ],
    startApp: { label: "Run Demo"},
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Mood_Tracker" },
  },
  {
    title: "Tap 'O' Matic",
    description: "A React Native TypeScript random number generator app",
    techStack: [
      { src: devicon("typescript"), label: "TypeScript" },
      { src: devicon("react"), label: "React" },
      { src: "https://cdn.simpleicons.org/react/000020", label: "React Native" },
      { src: "https://cdn.simpleicons.org/expo/000020", label: "Expo" },
    ],
    startApp: { label: "Run Demo", underConstruction: true },
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Tap-O-Matic" },
  },
  {
    title: "Super Connect",
    description: "A two-player turn-based Connect 4–style game built in Unity 6 (URP). Get four in a row: horizontally, vertically, or diagonally to win. Full game with start scene, player naming, scoring, winning screen, music control, 3D background and animations",
    techStack: [
      { src: devicon("unity"), label: "Unity" },
      { src: devicon("csharp"), label: "C#" },
    ],
    startApp: { label: "Run Demo", underConstruction: true },
    websiteLink: { label: "Open on Github", url: "https://github.com/wobwobbird/Super-Connect-Game" },
  },
];

const COMMERCIAL_PROJECTS: ProjectBoardData[] = [
  {
    title: "iRealty PropTech",
    description: "Worked as a Junior Front-End Developer at the PropTech startup Converted the customer facing CRM to tablet and mobile responsive, and built a customer support pannel available across the app Built property filtering, comparison tools, and multilingual support (Catalan/French) ",
    techStack: [
      { src: devicon("javascript"), label: "JavaScript" },
      { src: devicon("typescript"), label: "TypeScript" },
      { src: devicon("react"), label: "React" },
      { src: devicon("redux"), label: "Redux" },
      { src: devicon("css3"), label: "CSS" },
      { src: devicon("sass"), label: "SASS" },
      { src: devicon("tailwindcss"), label: "Tailwind" },
    ],
    websiteLink: { label: "Visit Site", url: "https://irealty.app/" },
  },
];

const LEARNING_COURSES: CourseData = {
  title: "Courses Completed",
  description: "Software development courses I have completed",
  modalContent: DemoPage()
};

const StartAppButton = ({ label, underConstruction = false, onClick }: StartAppButtonProps) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [clickedText, setClickedText] = useState<string | null>(null);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 799px)");
    const handler = () => setIsNarrowScreen(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleClick = () => {
    if (underConstruction) {
      setIsFlashing(true);
      setClickedText(isNarrowScreen ? "View on desktop to run app" : "Coming soon!");
      setTimeout(() => {
        setIsFlashing(false);
      }, 400);
      return;
    }

    if (onClick) {
      onClick();
      return;
    }
  };

  return (
    <Button
      className={`data-table data-table-button-hover border-dashed w-full min-[470px]:w-[200px] transition-colors duration-150 ${isFlashing ? "bg-red-500!" : ""}`}
      variant="outline"
      onClick={handleClick}
    >
      {clickedText ?? label} <SquareTerminal />
    </Button>
  );
};

const WebsiteLinkButton = ({ label, url }: WebsiteLinkAction) => (
  <Button className="data-table data-table-button-hover border-dashed w-full min-[470px]:w-[200px]" variant="outline" onClick={() => window.open(url)}>
    <p>{label}</p>
    <ExternalLink className="size-4 shrink-0" aria-hidden />
  </Button>
);

interface BoardProps {
  title: string;
  description: string;
  techStack: IconSetItem[];
  startApp?: StartAppAction;
  websiteLink?: WebsiteLinkAction;
  onStartAppClick?: () => void;
}

const Board = ({ title, description, techStack, startApp, websiteLink, onStartAppClick }: BoardProps) => {
  const hasActions = startApp || websiteLink;
  // const isSmOrLarger = useMediaQuery("(min-width: 640px)");

  return (
    <div
      className="
        relative w-full min-h-50 flex flex-col gap-4 p-3 xs:p-5 rounded-[1.25em] 
        bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] 
        border border-[#61dca3] border-dashed
        transition-all duration-200  hover:shadow-[0_0_25px_6px_rgba(200,255,150,0.25)]
        hover:bg-[hsla(0,0%,100%,0.05)] hover:scale-[1.01]
        active:shadow-[0_0_25px_6px_rgba(200,255,150,0.25)]
        active:bg-[hsla(0,0%,100%,0.05)] active:scale-[1.01]
      "
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <IconSet items={techStack} />
      {hasActions && (
        <div className="flex flex-col gap-5 py-0 min-[470px]:flex-row">
          {startApp && (
            <StartAppButton 
              label={startApp.label}
              underConstruction={startApp.underConstruction} 
              onClick={onStartAppClick}
            />
          )}
          {websiteLink && <WebsiteLinkButton label={websiteLink.label} url={websiteLink.url} />}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [openProject, setOpenProject] = useState<ProjectBoardData | CourseData | null >(null);
  const [bannerShown, setBannerShown] = useState(true);
  const [bannerConstructionShown, setBannerConstructionShown] = useState(true);
  const isNarrowScreen = !useMediaQuery("(min-width: 640px)");

  const handleOpenDemo = (project: ProjectBoardData | CourseData) => {
    setOpenProject(project);
  }

  const handleCloseDemo = () => {
    setOpenProject(null);
  }

  return (
      <PageHolder
          background={<LightRays />}
          scrollable
      >
        {bannerShown && isNarrowScreen &&(
          <div className="mt-5 flex flex-row items-center gap-3">
            <GlassPanel>
              <Brain className="size-5 mx-"/>
              <p className="flex-1 min-w-0">View on desktop for the best experiance!</p>
              {/* <Brain className="size-5"/> */}
              <button 
                className="shrink-0 p-1! mx-2 bg-black! " aria-label="Dismiss"
                onClick={() => setBannerShown(false)}
              ><X className="size-4 text-white stroke-5"/></button>
            </GlassPanel>
          </div>
        )}
        {bannerConstructionShown && (
          <div className="mt-5 flex flex-row items-center gap-3">
            <GlassPanel>
              <p className="flex-1 min-w-0">🚧 Site under construction | Some features may not currently work as intended 🚧</p>
              <button 
                className="shrink-0 p-1! mx-2! bg-black!" aria-label="Dismiss"
                onClick={() => setBannerConstructionShown(false)}
              ><X className="size-4 text-white stroke-5"/></button>
            </GlassPanel>
          </div>
        )}

        {/* Body - heading*/}
        {/* Body - intro*/}

        <h2 className="pt-5 text-left data-table">Introduction</h2>
        <div className="flex flex-col sm:flex-row md:p-5 gap-4 data-table">
          <div className="h-auto p-0 flex flex-col gap-4 pt-5 flex-1" >
            <h1 className="">Hi I'm Guy</h1>
            <h1 className="">Full-Stack Developer</h1>
            <p>I'm a Full-Stack Developer based in London with two years of intensive self-driven learning and nine months of commercial experience at a PropTech startup.</p>
            <p>Recently, I've been focusing more on backend development, working with Node.js, Express, server architecture, authentication, and databases including SQLite and PostgreSQL.</p>
          </div>
          <div className="origin-top-left w-full flex-1 flex justify-center">
            <ProfileCard
              name="Guy Marshman"
              title="Junior Full-Stack Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profilePic_nobg}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => console.log('Contact clicked')}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl={lordMarshy_s}
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              cardHeight='min(45svh, 380px)'
              nameTextSize='min(5svh, 2em)'
              roleTextSize='16px'
              iconSize='50%'
            />
          </div>
        </div>

        {/* Body - Projects */}

        <div className="flex flex-col gap-4 text-left data-table">
          <h2 className="pt-5 text-left ">Projects</h2>
          {PROJECTS.map((project) => (
            <Board
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              startApp={project.startApp}
              websiteLink={project.websiteLink}
              onStartAppClick={() => handleOpenDemo(project)}
            />
          ))}
        </div>
        
        {/* Body - Commercial */}
        <div className="text-left flex flex-col gap-4 pt-4 data-table">
          <h2 className="pt-5 text-left">Commercial Experience</h2>
          {COMMERCIAL_PROJECTS.map((project) => (
            <Board
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              startApp={project.startApp}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
        {/* Body - Learning */}
        <div className="text-left flex flex-col gap-4 data-table">
          <h2 className="pt-5 text-left">Learning</h2>
          <p>
            Over the last two years I've been learning intensively and have completed many courses across the front end and the back end. I've focused mainly on Codecademy because I like the blend of theory and interactive practice the platform offers.
          </p>
          <p>
            I have completed over 20 courses, and they can all be viewed in the certificate section on my LinkedIn.
          </p>

          <p>
            <span
              role="link"
              tabIndex={0}
              className="cursor-pointer text-blue-600 underline hover:text-blue-800"
              onClick={() => window.open("https://www.linkedin.com/in/guymarshman/details/certifications/")}
              onKeyDown={(e) => e.key === "Enter" && (e.currentTarget as HTMLElement).click()}
            >
              View my certificates on LinkedIn
            </span>
          </p>
          <Button className="data-table data-table-button-hover border-dashed w-full min-[470px]:w-[200px]" variant="outline" onClick={() => handleOpenDemo(LEARNING_COURSES)}>
            <p className=" ">{"View Certs"}</p>
            <SquareTerminal className="size-4 shrink-0" />
          </Button>

        </div>
        <div className="h-[220px] flex items-center justify-center">
          <CircularText
            text="FRONT-END * BACK-END * DEVELOPER * "
            size="text-xs"
            width="100px"        
            onHover="speedUp"
            spinDuration={40}
            className="goBonkers mx-2 select-none text-[#61dca3]!"
            />
        </div>

        <Dialog open={!!openProject} onOpenChange={(open) => (open ? null : handleCloseDemo())} >
          <DialogContent className="data-table sm:max-w-[90vw] w-[90vw] max-h-[90vh] h-[90vh] z-10000 rounded-2xl p-0 overflow-hidden flex flex-col" >
            
            <DialogHeader className="px-6 pt-4 pb-2">
              <DialogTitle
                className= "data-table"
                >{openProject?.title ?? "Project demo"}</DialogTitle>
              <DialogDescription
                className="data-table"
                > {openProject?.description ?? "Interactive demo"}</DialogDescription>
            </DialogHeader>
            
            <div className="flex-1 overflow-auto px-6 pb-6 min-h-0 flex flex-col">
              <div className="w-full flex-1 min-h-0 flex flex-col items-stretch border border-dashed border-white/20 rounded-xl overflow-hidden">
                {openProject && "modalContent" in openProject && openProject.modalContent
                  ? openProject.modalContent
                  : (
                    <h3 className="text-3xl text-center text-white/80 flex items-center justify-center flex-1">
                        Demo area for <span className="font-semibold">{openProject?.title}</span>                   </h3>
                    )
                  }
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </PageHolder>
  );
};

{/* <Button className="w-full min-[470px]:w-[200px]" variant="outline" onClick={() => window.open("https://www.linkedin.com/in/guymarshman/details/certifications/")}>
  <p className=" ">{"View Certs"}</p>
  <LiaLinkedin className="size-6 shrink-0 -ml-1.5" aria-hidden />
  <ExternalLink className="size-4 shrink-0" aria-hidden />
</Button> */}
export default Home;