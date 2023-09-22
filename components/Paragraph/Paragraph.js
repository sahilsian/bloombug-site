import { getTextAlign } from "../../lib/fonts"
import { relativeToAbsoluteUrls } from '../../lib/relativeToAbsoluteUrls'

export const Paragraph = ({ textAlign = 'left', content, textColor, className, fontSize}) => {
    return (
        <p style={{ color: textColor, fontSize: fontSize || 'none'}} className={` ${className} mb-10 ${getTextAlign(textAlign)} `} dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}></p>
    )
}