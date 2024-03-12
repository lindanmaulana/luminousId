import Image from "../../elements/image/Image";
import bgHome from "../../../assets/images/bg-home.jpg"
const ImageSection = () => {
  return (
    <div className="w-full h-[260px] flex justify-center gap-2 pt-10 self-center">
      <Image image1={bgHome} image2={bgHome}/>
    </div>
  );
};
export default ImageSection;
