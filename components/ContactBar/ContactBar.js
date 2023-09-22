import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ContactBar = ({phoneNumber, email}) => {
    return (
        <div className="w-full flex gap-5 justify-center lg:justify-start">
            <a href={`tel:${phoneNumber}`} className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faPhone} size="16px"></FontAwesomeIcon>
                <p className="text-sm">{phoneNumber}</p>
            </a>
            <a href={`mailto:${email}`} className="flex gap-3 items-center ">
                <FontAwesomeIcon icon={faEnvelope} size="16px"></FontAwesomeIcon>
                <p className="text-sm">{email}</p>
            </a>
        </div>
    )
}