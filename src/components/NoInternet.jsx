import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { useWeather} from "../context/WeatherContext";

const NoInternet =()=>{
    const { handleCloseErr,connection } = useWeather()

    if(!connection.display){
        return null
    } else {
        return (
            <div className={`absolute z-40 top-0 size-full bg-grey flex justify-center items-center`}>
                <div className="size-[320px] rounded-lg shadow-lg bg-white flex justify-center items-center relative">
                    <button
                        onClick={handleCloseErr}
                        className="absolute cursor-pointer top-2 right-2">
                            <AiFillCloseCircle size={40}/>
                    </button>
                    <p className={"text-3xl text-gray-500 font-bold font-[Montserrat]"}>{connection.message}</p>
                </div>
            </div>
        )
    }
}

export default NoInternet;