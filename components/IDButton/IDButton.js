import { ButtonLink } from "../ButtonLink"
import { usePathname } from 'next/navigation'

export const IDButton = ({ align = "left", buttonLabel, target, destination, type = "primary"}) => {
    const alignMap = {
        left: "text-align",
        center: "text-center",
        right: "text-right",
        color: "#FFFFFF"
    }
    const backgroundMap = {
        primary: {
            bgColor: "#000000",
            fontColor: "#FFFFFF"
        },
        Secondary: {
            bgColor: "#000000",
            fontColor: "#FFFFFF"
        }
    }
    const pathname = usePathname()
    return (
        <div className={alignMap[align]}>
            <ButtonLink fontColor={backgroundMap[type]?.fontColor || "#000000"} destination={`${pathname}#${destination}`} color={backgroundMap[type]?.bgColor || "#FFFFFF"} label={buttonLabel}></ButtonLink>
        </div>
    )
}