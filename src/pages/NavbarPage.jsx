import NavbarDesktop from "../components/layouts/NavbarLayout/NavbarDesktop";
import NavbarMobile from "../components/layouts/NavbarLayout/NavbarMobile";

const NavbarPage = () => {
  const width = window.innerWidth;
  return <>{width < 769 ? <NavbarMobile /> : <NavbarDesktop />}</>;
};
export default NavbarPage;
