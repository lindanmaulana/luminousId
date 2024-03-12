import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonSosmed = (props) => {
    const {href, icon} = props
    return(
        <a href={href}>
          <FontAwesomeIcon icon={icon} className="scale-125" />
        </a>
    )
}
export default ButtonSosmed