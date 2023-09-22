export const Group = ({ children, bgColor, contentSize, padding, className, border }) => {
    return (
        <div className={` ${className} overflow-auto box-border`} style={{backgroundColor: bgColor, maxWidth: contentSize, margin: 'auto', paddingBottom: padding ? padding.bottom : "0px", paddingTop: padding ? padding.top : "0px", paddingLeft: padding ? padding.left : "0px", paddingRight: padding ? padding.right : "0px", borderColor: border ? border.color : "none", borderWidth: border ? border.width : "none"}}>
            {children}
        </div>
    )
}