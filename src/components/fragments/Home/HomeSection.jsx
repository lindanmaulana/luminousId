
import "../../../assets/font/font.css";
import ContentSection from "./ContentSection";
import SocialMediaSection from "./SocialMediaSection";

const HomeSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center bg-black/70 text-white lg:justify-center">
      <ContentSection />
      <SocialMediaSection />
    </div>
  );
};
export default HomeSection;
