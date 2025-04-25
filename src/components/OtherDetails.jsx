import React from 'react'
import {WiHumidity} from "react-icons/wi";
import {wind} from "../assets/constant";

const icon = {
    size: 40,
    color: "white"
}
const OtherDetails =({src , title ,  value})=>{
    return(
        <div className={"other-details"}>
            { title === "Humidity" ? <WiHumidity color={icon.color} size={icon.size} />
            : <img src={wind} width={icon.size} />}
            <p>{value}</p>
            <p>{title}</p>
        </div>
    )
}
export  default OtherDetails;