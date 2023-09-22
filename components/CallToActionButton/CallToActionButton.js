import { ButtonLink } from "../ButtonLink"

export const CallToActionButton = ({ align = "left", buttonLabel, target, destination, type = "primary"}) => {
    const alignMap = {
        left: "text-align",
        center: "text-center",
        right: "text-right",
        color: "#FFFFFF"
    }
    const backgroundMap = {
        Primary: {
            bgColor: "#FFFFFF",
            fontColor: "#C64B9B"
        },
        Secondary: {
            bgColor: "#C64B9B",
            fontColor: "#FFFFFF"
        }
    }
    return (
        <div className={alignMap[align]}>
            <ButtonLink fontColor={backgroundMap[type]?.fontColor || "#000000"} destination={destination} target={target} color={backgroundMap[type]?.bgColor || "#FFFFFF"} label={buttonLabel}></ButtonLink>
        </div>
    )
}