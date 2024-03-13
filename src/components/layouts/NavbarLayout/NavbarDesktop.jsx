import Navbar from "../../fragments/Navigasi/Navbar";
import { BiAperture } from "react-icons/bi";
const NavbarDesktop = () => {
  return (
    <div className="container w-full mx-auto bg-black">
      <Navbar>
        <Navbar.NavbarList orientation="flex-wrap" fontColor="text-white" />
        <Navbar.NavbarName>
          Lumin
          <BiAperture className="self-center" />
          us
        </Navbar.NavbarName>
      </Navbar>
    </div>
  );
};
export default NavbarDesktop;
