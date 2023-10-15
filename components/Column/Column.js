export const Column = ({ children, padding, bgColor = "none", width = "none", verticalAlignment, layout, className }) => {
    let columnAlignment;
    switch(verticalAlignment) {
        case "center" : {
            columnAlignment = "center";
            break;
        }
        case "bottom" : {
            columnAlignment = 'flex-end';
            break;
        }
        default : {
            columnAlignment = 'flex-start';
        }
    }
    console.log(padding)
    return <div data-aos="fade-up" style={{maxWidth: width, backgroundColor: bgColor, justifyContent: columnAlignment, paddingBottom: padding ? padding.bottom : "0px", paddingTop: padding ? padding.top : "0px", paddingLeft: padding ? padding.left : "0px", paddingRight: padding ? padding.right : "0px"}} className={`column overflow-hidden box-border mx-auto flex flex-1 flex-col min-w-[100px]`}>
        <div style={{display: 'flex', justifyContent:  layout ? layout.justifyContent : "initial"}}>
            <div style={{maxWidth: layout ? layout.contentSize : "none"}}>
                {children}
            </div>
        </div>
    </div>
}