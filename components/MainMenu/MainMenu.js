
import Image from "next/image"
import Link from "next/link"
import { ButtonLink } from "../ButtonLink"
import { faChevronDown, faClose, faNavicon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

export const MainMenu = ({ items, callToActionLabel, callToActionDestination, social }) => {
    const router = useRouter()
    const [navbar, setNavbar] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const changeScrollElements = () => {
        window.addEventListener('scroll', () => {
            if (scrollY >= 80) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        })

    }
    useEffect(() => {

        changeScrollElements()
    })

    useEffect(() => {
        window.screen.width > 953 ? setActiveMenu(true) : setActiveMenu(false)

    }, [])

    return <div className="navContainer">
        <div id={"Nav"} className={`px-4 navbar bg-[#412842] text-white py-4 fixed top-0 right-0 left-0 z-30 w-full`}>
            <div className={`max-w-[1350px] mx-auto flex items-center`}>
                <div className="flex flex-[2] itemsContainer gap-2 items-center">
                    <div className="flex justify-between">
                        <Image onClick={()=> {
                            router.push('/');
                        }} src={"/logo.png"} className="cursor-pointer" width={170} height={0}></Image>
                        <div className="iconContainer justify-center items-center">
                            {activeMenu ?
                                <FontAwesomeIcon onClick={() => setActiveMenu(!activeMenu)} size="16px" width={24} height={24} color="#FFFFFF" icon={faClose}></FontAwesomeIcon>
                                :
                                <FontAwesomeIcon onClick={() => setActiveMenu(!activeMenu)} size="16px" width={24} height={24} color="#FFFFFF" icon={faNavicon}></FontAwesomeIcon>
                            }
                        </div>
                    </div>
                    {

                        activeMenu && (items || []).map(item => {
                            return (
                                <div key={item.id} className="cursor-pointer items relative group">
                                    <div>
                                        <Link onClick={() => window.screen.width < 953 && setActiveMenu(false)} href={item.destination} className={`p-5 transition-all flex items-center hover:text-opacity-80`}>
                                            {item.label}
                                            {!!item.subMenuItem?.length && (
                                                <FontAwesomeIcon width={24} height={24} className="pl-3" size="xs" icon={faChevronDown}></FontAwesomeIcon>
                                            )}

                                        </Link>
                                    </div>
                                    {!!item.subMenuItem?.length && (
                                        <div className={`block subItems  shadow-md border-[#00000010] border-[1px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all text-black ${activeMenu ? "" : "group-hover:h-[150px]"} min-w-[250px] bg-white absolute rounded-md p-5 left-0 top-10 group-hover:top-[60px]`}>
                                            <div className={`font-semibold menuLabel pb-3`}>{item.label}</div>
                                            {item.subMenuItem.map(subMenuItems => (
                                                <Link onClick={() => window.screen.width < 953 && setActiveMenu(false)} key={subMenuItems.id} href={subMenuItems.destination} className="flex whitespace-nowrap pb-3 text-opacity-70 transition-all  hover:text-[#fad] hover:text-opacity-50 items-center gap-3">
                                                    <FontAwesomeIcon width={24} height={24} className="" size="xs"></FontAwesomeIcon>
                                                    {subMenuItems.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                </div>
                {activeMenu && (
                    <div className="flex flex-1 justify-end">
                        <div className="ml-3 my-auto buttonContainer">
                            <ButtonLink onClick={() => window.screen.width < 953 && setActiveMenu(false)} fontColor="#000000" destination={callToActionDestination} label={callToActionLabel}></ButtonLink>
                        </div>
                    </div>
                )

                }
                {activeMenu && <div>
                    <div className="flex gap-4 px-4 py-4 items-center justify-center">

                        {
                            social.facebook && (<Link href={social.facebook} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" width={20} color="#FFFFFF" icon={faFacebook}></FontAwesomeIcon></Link>)
                        }
                        {
                            social.instagram && (<Link href={social.instagram} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" width={20} color="#FFFFFF" icon={faInstagram}></FontAwesomeIcon></Link>)
                        }
                        {
                            social.tiktok && (<Link href={social.tiktok} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" width={20} color="#FFFFFF" icon={faTiktok}></FontAwesomeIcon></Link>)
                        }

                    </div>
                </div>}
            </div>
        </div>
    </div>
}