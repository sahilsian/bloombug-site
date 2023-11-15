import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Reviews = ({ place_id }) => {
    const [reviews, setReviews] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    const getReviews = async () => {
        try {
            setError(false)
            const response = await fetch(`/api/get-reviews`, {
                method: "POST",
                body: JSON.stringify({ place_id: place_id })
            });

            if (!response.status == 'OK') {
                throw new Error('Network response was not ok');
            }

            const res = await response.json();
            const reviewsArray = res.data.result.reviews;
            console.log(res)
            const newArr = reviewsArray.filter(item => item.rating >= 3);

            return newArr;

        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError(true)
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getReviews();
                setReviews(data);
            } catch (error) {
                setError(true)
            }
        };

        fetchData();
    }, []);


    return (
        reviews.length > 0 && <div className="">
            <div className="navigation-wrapper pl-2 pr-2">
                {error && (
                    <div>An error has occured, please try again later</div>
                )}
                <div ref={sliderRef} className="keen-slider  overflow-auto max-h-max">
                    {reviews.map((item) => {
                        return <div className={`keen-slider__slide h-full w-full`}>
                            <div className=" bg-white !min-h-0 flex items-center flex-col justify-center p-10 mx-1 lg:mx-20 rounded-[8px] mb-5 "> 
                                <Image className=" mb-4" src={item.profile_photo_url} width={100} height={100}></Image>
                                <h3 className="text-[1.4rem] font-[600] mb-2">{item.author_name}</h3>
                                <div className="flex gap-1 text-[#FCAF17] mb-3">

                                {Array.from(Array(item.rating), (e, i) => {
                                    return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                })}
                                </div>
                                <p className="text-center text-ellipsis">{item.text}</p>
                            </div>
                        </div>
                    })}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
