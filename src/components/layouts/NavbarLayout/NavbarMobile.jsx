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
        <div className="absolute right-0 top-20 bg-[#503C3C] rounded-md">
          {listHamburger ? (
            <Navbar.NavbarList
              orientation="flex-col"
              fontColor="text-white"
              size="px-5 py-2"
            />
          ) : (
            ""
          )}
        </div>
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
