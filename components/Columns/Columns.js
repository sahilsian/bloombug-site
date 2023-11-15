export const Columns = ({ isStackedOnMobile, children, className }) => {
    console.log(className)
    return <div className="max-w-[1350px] columns mx-auto">
        <div className={`columns ${className} overflow-hidden mx-auto gap-10 justify-between w-full flex-wrap ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </div>
}