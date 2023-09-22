import Image from "next/image"

export const Gallery = ({ columns, cropImages, items }) => {
    let maxHeight = 0;
    let maxWidth = 0;
    
    if(cropImages) {
        items.forEach((item) => {
            if(item.attributes.height > maxHeight) {
                maxHeight = item.attributes.height;
            }
            if(item.attributes.width > maxWidth) {
                maxWidth = item.attributes.width;
            }
        })
    }
    
    const columnWidth = 100 / columns;

    return (
        <div className="flex flex-wrap w-full max-w-[1450px] mx-auto">
            {items.map((item) => {
                return (
                <div key={item.id} style={{ width: `${columnWidth}%` }} className={"p-5 flex-grow"}>
                    <Image
                    src={item.attributes.url}
                    height={maxHeight || item.attributes.height}
                    width={maxWidth || item.attributes.width}
                    alt={item.attributes.alt}
                    style={{objectFit: "cover", height: '100%', borderRadius: "10px"}}
                    >
                    </Image>
                </div>
                )
            })}
        </div>
    )
}