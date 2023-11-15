import { PopupWidget } from "react-calendly";

export const AppointmentOpenButton = ({ align = "left", buttonLabel, calendlyURL, type = "primary"}) => {
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
    return (
        <div className={alignMap[align]}>
            <div style={{cursor: 'pointer',backgroundColor: backgroundMap[type]?.bgColor || "#FFFFFF", color: backgroundMap[type]?.fontColor || "#000000"}} className="btn font-semibold w-full">
            {buttonLabel}
            </div>
        </div>
    )
}

