export const Input = ({...rest}) => {
    return (
        <div className="py-3 mb-3 text-sm w-full outline-none outline-0 bg-white px-5 rounded-[10px] ">
        <input {...rest} className="!outline-none w-full bg-transparent " />
        </div>
    )
}