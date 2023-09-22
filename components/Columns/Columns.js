export const Columns = ({ isStackedOnMobile, children, className }) => {
    return <div className="max-w-[1350px] mx-auto">
        <div className={`columns ${className} mx-auto gap-10 justify-between w-full flex-wrap ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </div>
}