import Image from "next/image"
import { useRouter } from "next/router"
import { useParallax } from "react-scroll-parallax";

export const Cover = ({children, background, className}) => {
    const router = useRouter()
    const parallax = useParallax({
        speed: -12,
      });
    return (
        <div className={`${className} bg-[#412842] min-h-screen text-white relative flex justify-center`}>
            <div ref={parallax.ref} className={`w-full flex  pt-[200px] flex-col min-h-screen z-20`}>
            {children}
            </div>
            <div className={`w-full  max-h-screen  h-full absolute`}>
                <div className="gradient w-full h-full absolute z-10"></div>
                <Image alt="Cover" src={background} fill className=' object-cover w-full h-screen ' />
            </div>

        </div>
    )
}