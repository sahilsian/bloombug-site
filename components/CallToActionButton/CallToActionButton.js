import { ButtonLink } from "../ButtonLink"

export const CallToActionButton = ({ align = "left", buttonLabel, target, destination, type = "primary"}) => {
    const alignMap = {
        left: "text-align",
        center: "text-center",
        right: "text-right",
        color: "#FFFFFF"
    }
    const backgroundMap = {
        primary: {
            bgColor: "#f9ac13",
            fontColor: "#FFFFFF"
        },
        Secondary: {
            bgColor: "#bf4c93",
            fontColor: "#FFFFFF"
        }
    }
    console.log(type)
    return (
        <div className={alignMap[align]}>
            <ButtonLink fontColor={backgroundMap[type]?.fontColor || "#000000"} destination={destination} target={target} color={backgroundMap[type]?.bgColor || "#FFFFFF"} label={buttonLabel}></ButtonLink>
        </div>
    )
}