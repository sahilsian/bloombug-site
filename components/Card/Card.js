import Image from "next/image"
import { useRouter } from "next/router"
export const Card = ({ data }) => {
    const router = useRouter()
    return (
        <div className=" p-5 ">

        
        <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className="text-black my-auto pb-10  bg-white rounded-xl overflow-hidden">
            <div className="max-h-[250px] overflow-hidden">
            <Image style={{objectFit: 'cover'}} src={data.card_image.url} width={data.card_image.width} height={data.card_image.height} alt={data.card_image.alt}></Image>
            </div>
            <div className="p-5">
                <h4 className=" text-center text-xl font-medium mb-5">{data.card_title}</h4>
                <p className=" text-center text-[#00000090]">{data.card_description}</p>
                {/* <div onClick={()=> {
                    router.push(data.link)
                }} className=" btn text-center w-full max-w-fit mx-auto block my-10" >Request Information</div> */}
            </div>
        </div>
        </div>
    )
}