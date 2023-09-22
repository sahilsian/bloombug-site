import Image from 'next/image';
import imageFormat from '../../lib/imageFormat'
import Slider from "react-slick";

export const ImageSlider = ({ data }) => {
    const newData = imageFormat(data);

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className='w-full h-full mx-auto'>
            <Slider {...settings}>
                {newData.map((item)=> {
                    return (
                        <div className=''>
                            <Image style={{objectFit: 'cover', width: "100%", height: "100%", borderRadius: "10px"}} src={item.url} width={item.width} height={item.height}></Image>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}