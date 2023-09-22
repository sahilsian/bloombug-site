export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        "left": "text-center lg:text-left",
        "right": "text-center lg:text-right",
        "center": "text-center lg:text-center"
    }

    return `${textAlignMap[textAlign] || ''}`
}

export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-[2rem] lg:text-[4.3rem] font-[700] drop-shadow-lg",
        2: "text-[2rem] lg:text-[3.2rem] font-[600]",
        3: "text-[1.7rem] lg:text-4xl leading-relaxed",
        4: "text-[1.5rem] lg:text-3xl leading-relaxed",
        5: "text-[1.5rem] lg:text-2xl leading-relaxed font-semibold",
        6: "text-xl"
    }

    return `${fontSizeMap[level] || ''}`
}

export const getPargraphColor = (level) => {
    const fontSizeMap = {
        "base": "#FFFFFF",
        "contract": "#000000"
    }

    return `${fontSizeMap[level] || ''}`
}