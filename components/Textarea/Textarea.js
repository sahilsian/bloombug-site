export const Textarea = ({...rest}) => {
    return (
        <div className="py-3 mb-3 text-sm w-full outline-none outline-0 bg-white px-5 rounded-[10px] ">
        <textarea {...rest} className="!outline-none bg-transparent w-full" />
        </div>
    )
}