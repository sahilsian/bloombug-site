import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { ContactBar } from "../ContactBar"


export const Footer = ({ items, data }) => {
    return (
        <div style={{ backgroundColor: data.color }} className={` mobile-text-center footer w-full py-20`}>
            <div className="w-full max-w-[1350px] p-2 mx-auto flex">
                <div className=" flex-1">
                    <div className="mb-8 max-w-[800px]">
                        <Image className="mb-20 footerImage" src={"/logo.png"} width={250} height={0}></Image>
                        <h2 className="text-white text-2xl mb-5 font-bold">{data.site_title}</h2>
                        <p className="text-white mb-10">{data.site_description}</p>
                        <ContactBar ></ContactBar>
                    </div>
                    <div className="flex gap-4 mb-7">
                        {
                            data.social_links_facebook && (<Link href={data.social_links_facebook} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" color="#FFFFFF" icon={faFacebook}></FontAwesomeIcon></Link>)
                        }
                        {
                            data.social_links_instagram && (<Link href={data.social_links_instagram} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" color="#FFFFFF" icon={faInstagram}></FontAwesomeIcon></Link>)
                        }
                        {
                            data.social_links_tiktok && (<Link href={data.social_links_tiktok} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" color="#FFFFFF" icon={faTiktok}></FontAwesomeIcon></Link>)
                        }
                        {
                            data.social_links_youtube && (<Link href={data.social_links_youtube} target="_blank"><FontAwesomeIcon className="hover:opacity-70 opacity-100 transition-all hover:cursor-pointer" color="#FFFFFF" icon={faYoutube}></FontAwesomeIcon></Link>)
                        }
                    </div>
                    <div>
                        <h3 className="text-white font-medium text-xl mb-5">Navigation</h3>
                    </div>
                    <div className=" flex-1 text-xs footerNav gap-5 flex ">
                        {(items || []).map(item => (
                            <div key={item.id} className="cursor-pointer relative group">
                                <div>
                                    <Link href={item.destination} className={`${item.subMenuItem.length && `font-semibold`} transition-all block hover:text-opacity-80 text-white pb-2`}>
                                        {item.label}
                                    </Link>
                                </div>
                                {!!item.subMenuItem?.length && (
                                    <div className=" flex-1 flex flex-col">
                                        {item.subMenuItem.map(subMenuItems => (
                                            <Link className="hover:text-opacity-80 pb-2 text-white transition-all " key={subMenuItems.id} href={subMenuItems.destination}>
                                                {subMenuItems.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="cursor-pointer relative group">
                            <div>
                                <Link href={"privacy-policy"} className={`transition-all block hover:text-opacity-80 text-white pb-2`}>
                                    Privacy Policy
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="text-white copyright text-xs mt-10">Copyright 2023 {data.site_title}. All Rights Reserved</div>
                </div>

            </div>
        </div>
    )
}