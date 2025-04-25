import React, {createContext, useContext, useEffect, useState} from "react";
import {cloudy, drizzle, heavyRain, mist, sun} from "../assets/constant";

const WeatherContext = createContext();

const apiKey = "29adf92449bf1424faa950f129ddfbf8"

const forcastEndpoint = "https://api.weatherapi.com/v1/forecast.json?key=3b93086a858d42828f640629252204&q=London&days=6&aqi=yes&alerts=no"
const search = "https://api.weatherapi.com/v1/search.json?key=3b93086a858d42828f640629252204&q=London"

export const WeatherContextProvider =({children})=>{
    const [inputValue , setInputValue] = useState("")
    const [weatherData, setWeatherData] = useState({})
    // const [city , setCty] = useState("")
    // const [humidity , setHumidity] = useState("")
    // const [windSpeed , setWindSpeed] = useState("")
    // const [temperature , setTemperature] = useState("")
    const [img , setImg] = useState(null)
    const [errMessage , setErrMessage] = useState("")
    const [connection, setConnection] = useState({ message: "", display: false})

    const url =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${  inputValue === "" ? "London" : inputValue}&appid=${apiKey}`

    useEffect(()=>{
        fetchWeather()
    },[])


    const handleSearch=()=>{
        fetchWeather()
        setInputValue("")
    }

    async function fetchWeather(){
        try{
            const response = await fetch(url)
            const data = await response.json()

            console.log(data)
             if(data.cod !== 200){
                 setErrMessage(data.message)
                 setConnection({message: "Check internet Connection", display: true});
             }
             setWeatherData({
                 city: data.name,
                 temp: Math.round(data.main.temp),
                 humidity: data.main.humidity,
                 windSpeed: data.wind.speed,
             })
            // setCty(data.name)
            // setTemperature(Math.round(data.main.temp))
            // setHumidity(data.main.humidity)
            // setWindSpeed(data.wind.speed)
            if(data.weather[0].main === "Clouds"){
                setImg(cloudy)
            }else if(data.weather[0].main === "Rain"){
                setImg(heavyRain);
            }else if(data.weather[0].main === "Clear"){
                setImg(sun);
            }else if(data.weather[0].main === "Drizzle"){
                setImg(drizzle);
            }else if(data.weather[0].main === "Mist"){
                setImg(mist);
            }


        }catch (e) {
            setConnection({message: "No internet" , display: true})
            console.log( "An Error ", e)
            fetchWeather();
        }
    }

    function handleCloseErr() {
        setConnection({...connection, display: false})
    }

    return(
        <WeatherContext.Provider value={{
            inputValue,
            setInputValue,
            handleSearch,
            // humidity,
            // windSpeed,
            // temperature,
            // city,
            weatherData,
            img,
            errMessage,
            connection,
            handleCloseErr,
        }}>
            {  children }
        </WeatherContext.Provider>
    )
}

export const useWeather =()=> useContext(WeatherContext)