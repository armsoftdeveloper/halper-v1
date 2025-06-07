/* Components */
import Main from "../Main/Main";
import SectionBadge from "../SectionBadge/SectionBadge";
import SectionBuild from "../SectionBuild/SectionBuild";
import SectionCalculator from "../SectionCalculator/SectionCalculator";
import SectionChooseUs from "../SectionChooseUs/SectionChooseUs";
import SectionFAQ from "../SectionFAQ/SectionFAQ";
import SectionHalperDo from "../SectionHalperDo/SectionHalperDo";
import SectionPlan from "../SectionPlan/SectionPlan";
import SolutionsSection from "../SectionSolutions/SectionSolutions";
import SectionStepper from "../SectionStepper/SectionStepper";
import SectionSwiper from "../SectionSwiper/SectionSwiper";

export default function Home() {
    return (
        <>
            <Main />
            <SolutionsSection />
            <SectionHalperDo />
            <SectionStepper />
            <SectionChooseUs />
            <SectionCalculator />
            <SectionBuild />
            <SectionSwiper />
            <SectionPlan />
            <SectionBadge/>
            <SectionFAQ/>
        </>
    )
}