import Image from "next/image"
import { useEffect, useState } from "react"

export const CheckedList = ({ items }) => {
    const [data, setData] = useState([])
    const getList = (items) => {
        for (let i = 0; i <= items.list; i++) {
            setData(data => [...data, items[`list_${i}_item`]])
        }
    }
    useEffect(() => {
        getList(items)
    }, [])
    return (
        <div className="w-full">
            <div className="flex gap-3 flex-wrap w-full">

                {data && data.map((item) => {
                    return (
                       item && <div className="flex w-full">
                            <div>
                                <Image src={"/checkbox.png"} width={24} height={24}></Image>
                            </div>
                            <p className="ml-3">{item}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}