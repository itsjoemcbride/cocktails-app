import React, { useEffect } from 'react';
import DrinkListing from '../DrinkListing/DrinkListing';
import drinkApi from "../../common/apis/drinkApi"
import { APIKey } from "../../common/apis/DrinkApiKey"

const Home = () => {
    const drinkText = "margarita"

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await drinkApi.get(`${APIKey}/search.php?s=${drinkText}`)
            .catch((err) => {
                console.log("Err :", err);
            });
            console.log("THE response from API: ", response);
        };

        fetchDrinks();

    }, []);

    return (
        <>
          <div className='banner-img'></div>
          <DrinkListing />
        </>
    );
};

export default Home;