import { BiAlignLeft } from "react-icons/bi";

 const HamburgerMenu = (props) => {
    const {onclick, color} = props
    return (
        <button onClick={onclick}>
            <BiAlignLeft className={`text-${color} text-xl`}/>
        </button>
            
    )
}
export default HamburgerMenu