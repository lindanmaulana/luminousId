const Navbar = (props) => {
  const { children } = props;
  return (
    <nav className="w-full flex justify-between items-center px-8 py-6 fixed top-0">
      {children}
    </nav>
  );
};

const NavbarList = (props) => {
  const {orientation, fontColor, size} = props
  return (
    <ul className={`flex ${orientation} gap-2 ${fontColor} ${size}`}>
      <List>Home</List>
      <List>Portfolio</List>
      <List>Gallery</List>
      <List>AboutUs</List>
    </ul>
  );
};

const List = (props) => {
  const { children } = props;
  return (
    <li>
      <a
        href=""
        className="hover:border-b-2 border-white transition-all duration-800 ease-in-out"
      >
        {children}
      </a>
    </li>
  );
};

const NavbarName = (props) => {
  const { children } = props;
  return (
    <div className="text-white">
      <Name>{children}</Name>
    </div>
  );
};

const Name = (props) => {
  const { children } = props;
  return <h1 className="flex text-xl">{children}</h1>;
};

Navbar.NavbarList = NavbarList;
Navbar.NavbarName = NavbarName;

export default Navbar;
