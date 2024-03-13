import { BiAlignLeft } from "react-icons/bi";

const HamburgerMenu = (props) => {
  const { onClick, color } = props;
  return (
    <button onClick={onClick}>
      <BiAlignLeft className={`text-${color} text-xl`} />
    </button>
  );
};
export default HamburgerMenu;
