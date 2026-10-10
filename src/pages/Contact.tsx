import { GridScan } from "@/components/GridScan";
import PageHolder from "@/components/PageHolder";
import GlassIcons from "@/components/GlassIcons";
import { FiGithub, FiFileText } from 'react-icons/fi';
import { LiaLinkedin } from "react-icons/lia";
import cvPdf from '@/assets/Guy_Marshman_CV.pdf';
// import GlassPanel from "@/components/GlassPanel";

const Contact = () => {
    const items = [
        { icon: <FiGithub />, color: '#24292e', label: 'GitHub', onClick: () => window.open("https://github.com/wobwobbird") },
        { icon: <LiaLinkedin />, color: '#0A66C2', label: 'LinkedIn', onClick: () => window.open("https://linkedin.com/in/guymarshman")},
        { 
            icon: <FiFileText />,
            color: '#059669',
            label: 'Download CV',
            onClick: () => {
                const link = document.createElement('a');
                link.href = cvPdf;
                link.download = 'Guy_Marshman_Full-Stack_Software_Dev_CV.pdf';
                link.click();
            }
        },
    ];

    return (
        <PageHolder
            background={
                <GridScan 
                    sensitivity={0.1}
                    lineThickness={1}
                    linesColor="rgba(44, 81, 36, 0.87);"
                    gridScale={0.03}
                    scanColor="rgba(3, 196, 51, 0.87);"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.05}
                    scanDuration={6}
                />
            }
            className="items-center"
        >
            <h1 className="display select-none text-[#61dca3]">
                <span className="block -mb-5 text-8xl! max-sm:text-5xl!">Get in</span>
                <span className="block text-8xl! max-sm:text-7xl!">Contact</span>
            </h1>
            <h2 className="pt-0 text-4xl! max-sm:text-3.5xl! select-none data-table">I don't bite</h2>
            <div className="h-auto relative">
                <GlassIcons items={items} className="custom-class " />
            </div>
            {/* <div className="w-[280px] sm:w-[380px] h-auto pt-0 mx-auto">
                <GlassPanel>
                    <div className="flex flex-col text-center text-[#61dca3]"> 
                        <p className="text-xl font-semibold select-none">Open to fulltime</p>
                        <p className="text-xl font-semibold select-none">(Office | Hybrid | Remote)</p>
                        <p className="text-xl font-semibold select-none">and contract work</p>
                    </div>
                </GlassPanel>
            </div> */}
        </PageHolder>
    );
}

export default Contact;
