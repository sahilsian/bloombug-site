import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export const PostSearch = () => {
    const [posts, setPosts] = useState([])
    const router = useRouter()

    const search = async () => {
        const response = await fetch(`/api/program-search`, {
            method: "POST"
        });
        const data = await response.json();
        setPosts(data.programs)
    }

    useEffect(() => {
        search();
    }, [])

    return (
        <div className='max-w-[1350px] gap-6 flex justify-center flex-wrap mx-auto'>
            {
                posts.map((i)=> {
                    return <div className='flex-1 gradient relative overflow-hidden h-[300px] max-w-[49%] min-w-[350px] flex-wrap '>
                        <Link className=' w-full h-full' href={i.uri}>
                        <Image style={{width: "100%", height: "100%", objectFit: "cover"}} src={i.programProperties.image?.link} width={1000} height={1000}>
                        </Image>
                        <div className='gradient hover:bg-[#051A2500] cursor-pointer transition-all absolute top-0 w-full h-full p-10'>
                            <div>
                                <h3 className='text-white text-[30px] mb-4'>{i.programProperties.metaTitle}</h3>
                                <p className='text-white text-[16px]'>{i.programProperties.metaDescription}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                })
            }
        </div>


    )
}