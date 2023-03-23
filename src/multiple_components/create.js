import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Create = ({handleSubmit}) => {
    const history = useHistory();
    

    //This function Executes Two Tasks
    function addFighterAndRedirect(){
        //Redirects user to the endpoint '/'
        history.push('/');

        //Reloads page
        window.location.reload();

        //handleSubmit function from App.js
        handleSubmit(); 
    }
    

    


    return ( 
        <div className="create">
            <h2>Add a New Fighter</h2>
            {/* onSumbit={handleSubmit} - Function that is invoked when the onSubmit 
                event occurs ie. when submit button is clicked*/}
            <form onSubmit={addFighterAndRedirect}>
            <label>Fighter ID (Must be Unique): </label>
                <input 
                id="ID"
                type="number" 
                required
                />
                <label>Fighter Name: </label>
                <input 
                id="Name"
                type="text" 
                required
                />
                <label>Fighter Body: </label>
                <textarea
                id="Body"
                required
                ></textarea>
                <label>Fighter Technique: </label>
                <select
                id="Technique"
                >
                    <option value="Fly">Fly</option>
                    <option value="Energy Wave">Energy Wave</option>
                    <option value="Fly">Solar Flare</option>
                    <option value="Energy Wave">Energy Bomb</option>
                </select>
                {/* Outputting buttons based on the state of isLoading */}
                {/* Solar Flareputting buttons based on the state of isLoading */}
                <button>Add Fighter</button>          
            </form>
        </div>
    );

    
}

export default Create;