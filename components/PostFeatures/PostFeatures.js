import { faBiking, faCar, faPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PostFeatures = ({ price, vehicles, microMobilityAvailable, nearAirport }) => {
    return (
        <div className="w-full gap-20 opacity-100 absolute bottom-[-10px] shadow-sm max-w-[920px] bg-white text-black p-6 rounded-2xl flex justify-center">
            <div className="text-center">
                <FontAwesomeIcon icon={faCar} size="3x"></FontAwesomeIcon>
                <div className="mt-3 text-lg">
                    {vehicles} Vehicles On-Site
                </div>
            </div>
            {
                (!!microMobilityAvailable) && (
                    <div className="text-center">
                        <FontAwesomeIcon icon={faPlane} size="3x"></FontAwesomeIcon>
                        <div className="mt-3 text-lg">
                            Nearby an Airport
                        </div>
                    </div>
                )
            }

            {
                (!!nearAirport) && (
                    <div className="text-center ">
                        <FontAwesomeIcon icon={faBiking} size="3x"></FontAwesomeIcon>
                        <div className="mt-3 text-lg">
                            Micro Mobility Options
                        </div>
                    </div>
                )
            }

        </div>
    )
}