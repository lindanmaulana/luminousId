import ButtonHamburger from "../../elements/button/ButtonHamburger";
import Navbar from "../../fragments/Navigasi/Navbar";
import { BiAperture } from "react-icons/bi";
import { useState } from "react";
const NavbarMobile = () => {
  const [listHamburger, setListHamburger] = useState(false);

  const handleHamburger = () => {
    setListHamburger(!listHamburger);
    console.log("fungsi");
  };
  return (
    <div className="container w-full mx-auto bg-black">
      <Navbar>
        <ButtonHamburger color="white" onClick={handleHamburger} />
        {listHamburger ? <NavbarList /> : ""}
        <Navbar.NavbarName>
          Lumin
          <BiAperture className="self-center" />
          us
        </Navbar.NavbarName>
      </Navbar>
    </div>
  );
};

const NavbarList = () => {
  return (
    <ul className="text-white">
      <li>Home</li>
      <li>Portofolio</li>
      <li>Galery</li>
      <li>AboutUs</li>
    </ul>
  );
};

NavbarMobile.NavbarList = NavbarList;
export default NavbarMobile;
