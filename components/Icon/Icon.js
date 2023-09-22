import Image from "next/image"
import { useRouter } from "next/router"
export const Icon = ({ data }) => {
    const router = useRouter()
    return (
        <div className="rounded-xl text-white">
            <div className="mb-7 flex justify-center items-center">
                <span className="bg-white w-[120px] h-[120px] flex justify-center items-center rounded-[200px]">
                    <Image style={{ objectFit: 'cover', color: "#000000" }} src={data.icon_image.url} width={70} height={70} alt={data.icon_image.alt}></Image>
                </span>
            </div>
            <div className="">
                <h4 className=" text-center text-xl font-medium mb-5">{data.icon_title}</h4>
                <p className=" text-center text-[#FFFFFF90]">{data.icon_description}</p>
                {/* <div onClick={()=> {
                    router.push(data.link)
                }} className=" btn text-center w-full max-w-fit mx-auto block my-10" >Learn More</div> */}
            </div>
        </div>
    )
}