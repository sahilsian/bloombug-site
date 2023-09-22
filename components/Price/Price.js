export const Price = ({price, month}) => {
    return (
        <div className="w-full text-center">
            <span className="flex justify-center items-center">
            <h3 className=" text-[4em] m-0">${price}</h3>
            <p className="text-lg mt-6">/mo</p>
            </span>
        </div>
    )
}