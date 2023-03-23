import {useState, useEffect} from 'react';
import React from 'react';
import { Link } from "react-router-dom";

//Arrow Functional Component
const Home = ({fighter_data}) => {
    //When the Webpage is initally loaded the Array is null
    //This creates an Error, as we cannot map a null Array
    //To prevent this we set fighter_data to an empty array (this is not the same as null)
    if(fighter_data == null){
        fighter_data = [];
    }

    return (
       <div className="home">
        {/* map() - cycles through each element of an array
            (fighter) - each element in the array is referred to as blog
            (fighter)=> () - Arrow function that returns JSX
        */}
        
        {fighter_data.map((fighter) => (
            //key={fighter.newID} = this is what react uses to identity each element when an update occurs

            /*fighter_data.map cycles through each element in the array fighter_data
            Therefore fighter.newID automatically is related to fighter.Name & fighter.Body.
            to={`/blogs/${fighter.newID}`} automatically is connected to the
            Route Component in App.js with the path="/fighters/:id". 
            However fighter.Name & fighter.Body is not what is loaded when we click the Link
            The FighterDetails Comp is loaded because it is what is nested in the Route Component.
                   
            to={`/fighters/${fighter.newID}`} loads the corresponding :id route parameter
            in the Route Component. FighterDetails Component then extracts the id from the Route
            and utilizes it
            */
            
            <div className='fighter-preview' key={fighter.newID}>
                <Link to={`/fighters/${fighter.newID}`}>
                    <h2>{fighter.Name}</h2>
                    <p>Click to See Description</p>
                </Link>
            </div>
        ))}
       </div>
    );
}

export default Home;