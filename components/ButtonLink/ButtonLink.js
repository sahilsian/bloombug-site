import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const ButtonLink = ({destination, label, target = "_self", color = "#FFFFFF", fontColor = "#C64B9B"}) => {
    return <Link target={target} href={destination} style={{backgroundColor: color, color: fontColor}} className="btn w-full">
    {label}
    <FontAwesomeIcon style={{paddingLeft: "20px", fontSize: "16px"}} size="16px" icon={faArrowRight}></FontAwesomeIcon>
    </Link>
}