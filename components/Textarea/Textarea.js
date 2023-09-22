export const Textarea = ({...rest}) => {
    return (
        <div className="py-3 mb-3 text-sm w-full outline-none outline-0 border-b-2 border-[#FFFFFF]">
        <textarea {...rest} className="!outline-none bg-transparent w-full" />
        </div>
    )
}