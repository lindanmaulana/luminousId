import ButtonHamburger from "../../elements/button/ButtonHamburger";
import Navbar from "../../fragments/Navigasi/Navbar";
import { BiAperture } from "react-icons/bi";
const NavbarMobile = () => {
  return (
    <div className="container w-full mx-auto bg-black">
      <Navbar>
        <ButtonHamburger color="white" />
        <Navbar.NavbarName>
          Lumin
          <BiAperture className="self-center" />
          us
        </Navbar.NavbarName>
      </Navbar>
    </div>
  );
};
export default NavbarMobile;
