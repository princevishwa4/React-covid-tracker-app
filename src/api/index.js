import axios from 'axios';

const baseURL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changableUrl = baseURL;
    
    if (country)
        changableUrl = `${baseURL}/countries/${country}`;

    try {
        const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${baseURL}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const countries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${baseURL}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}