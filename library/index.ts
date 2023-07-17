
// Utitilty function to fetch cars

import { CarProps } from "../types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b8fd37b723mshdf5ff3d26108d7ep195a00jsn3426bfb84fe3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=sportage', {
        headers: headers
    })

    const result = await response.json()

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car:CarProps, angle? :string) => {

    const url = new URL('https://cdn.imagin.studio/getimages')

    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('modelFamily',car.model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear',`${car.year}`)
    url.searchParams.append('angle',`${angle}`)

    return `${url}`

}