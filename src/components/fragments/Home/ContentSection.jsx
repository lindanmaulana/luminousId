import ImageSection from "./ImageSection";
import TitleSection from "./TitleSection";

const ContentSection = () => {
  return (
    <div className="h-[90vh] flex flex-col gap-8 lg:flex-row lg:pt-0">
        <TitleSection />
        <ImageSection />
    </div>
  );
};
export default ContentSection
