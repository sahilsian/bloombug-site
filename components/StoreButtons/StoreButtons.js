import Image from "next/image"
import Link from "next/link"

export const StoreButtons = ({ data }) => {
    return <div className="py-6">
        <h4 className={`text-[#ffffff] text-xs mb-3 text-${data.alignment}`} >Available on</h4>
        <div className={`flex gap-3 ${data.alignment == 'left' && 'justify-start'} ${data.alignment == 'center' && 'justify-center'} ${data.alignment == 'right' && 'justify-end'}`}>
            {data.appstore_image && (
                <div className="max-w-[100px]">
                    <Image src={data.appstore_image.url} width={data.appstore_image.width} height={data.appstore_image.height} alt="App Store Button"></Image>
                </div>
            )}
            {data.playstore_image && (
                <div className="max-w-[120px]">
                    <Image src={data.playstore_image.url} width={data.playstore_image.width} height={data.playstore_image.height} alt="Play Store Button"></Image>
                </div>

            )}
        </div>
    </div>
}