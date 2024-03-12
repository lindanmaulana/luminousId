import {
    faWhatsapp,
    faInstagram,
    faFacebook,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  
import ButtonSosmed from "../../elements/button/ButtonSosmed"
const SocialMediaSection = () => {
    return (
        <div className="w-full h-[10vh] flex justify-start items-end px-5 py-4 gap-6">
        <ButtonSosmed
          href="whatsapp://send?phone=6281546967707&text=Halo,%20apa%20kabar%3F"
          icon={faWhatsapp}
        />
        <ButtonSosmed
          href="https://www.instagram.com/qqqqmln"
          icon={faInstagram}
        />
        <ButtonSosmed
          href="https://www.facebook.com/qqqqmln"
          icon={faFacebook}
        />
        <ButtonSosmed href="https://www.youtube.com/qqqqmln" icon={faYoutube} />
      </div>
    )
}
export default SocialMediaSection