import PageHolder from "@/components/PageHolder";
import { GridScan } from "@/components/GridScan";
import DemoPage from "@/certificates/page";
  
const EmptyPage = () => {
      
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
        >
            {DemoPage()}
        </PageHolder>
    );
}

export default EmptyPage;
