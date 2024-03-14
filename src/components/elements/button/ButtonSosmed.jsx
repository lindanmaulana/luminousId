import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonSosmed = (props) => {
    const {href, icon} = props
    return(
        <a href={href}>
          <FontAwesomeIcon icon={icon} className="scale-125 hover:scale-150 transition-all duration-600 ease-in-out" />
        </a>
    )
}
export default ButtonSosmed