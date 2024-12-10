import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import data from '../data/data.json';

export const WeatherContext = createContext();

export const WeatherData = ({ children }) => {
    const cities = data;
    const [city, setCity] = useState("Ankara");
    const [WeatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const selectedCity = data.find(item => item.name === city);
        if (selectedCity) {
            const { latitude, longitude } = selectedCity;
            const key = "20ff055bba4e4fed8d4122421232702";
            axios(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=7&hour=24`)
                .then(response => {
                    console.log(response);
                    setWeatherData(response.data.forecast.forecastday);
                })
                .catch(error => {
                    console.error('Hava durumu verisi alınırken hata oluştu:', error);
                    setWeatherData([]); // Hata durumunda boş veri setleniyor
                });
        }
    }, [city]);

    if (!WeatherData || WeatherData.length === 0) {
        return <div>Yükleniyor...</div>;
    }

    // Doğrudan weather, city, setCity gibi verileri sağlıyoruz
    const values = {
        cities,
        city,
        setCity,
        WeatherData,
    };

    return (
        <WeatherContext.Provider value={values}>
            <div>{children}</div>
        </WeatherContext.Provider>
    );
};

export const useWeatherData = () => useContext(WeatherContext);
