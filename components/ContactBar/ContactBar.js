import { faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const ContactBar = ({phoneNumber = "(604) 722-4371", email = "hello@bloombug.ca", address = "12689 72 Ave, Surrey, BC V3W 2M7"}) => {
    return (
        <div className="text-white">
            <div className="w-full  flex gap-5 justify-center mb-6 lg:justify-start">
                <a href={`tel:${phoneNumber}`} className="flex gap-3 items-center">
                    <FontAwesomeIcon icon={faPhone} width={24} height={24} size="16px"></FontAwesomeIcon>
                    <p className="text-md">{phoneNumber}</p>
                </a>
                <a href={`mailto:${email}`} className="flex gap-3 items-center ">
                    <FontAwesomeIcon icon={faEnvelope} width={24} height={24} size="16px"></FontAwesomeIcon>
                    <p className="text-md">{email}</p>
                </a>
            </div>
            <div className="w-full flex gap-5 justify-center lg:justify-start">
                <span className="flex gap-3 items-center ">
                    <FontAwesomeIcon icon={faMapPin} width={20} height={20} size="16px"></FontAwesomeIcon>
                    <p className="text-md">{address}</p>
                </span>
            </div>
        </div>  
    )
}