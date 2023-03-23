import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FighterDetails = ({fighter_data}) => {
    //gives us acces to route parameters/ url parameters from the Route Component
    //that wraps the FighterDetails Component in App.js
    //Accepting the id route parameter
    //We get this id when we click the Link Component
    const {id} = useParams();
    var i;
    //Loops through all the Objects in the Array and Compares the id parameter to the newID property
    for(i=0; i<fighter_data.length; i++){
        //This block of code only runs if the id parameter matches the newID property of the object in the fighters_data Array
        if(fighter_data[i].newID === id){
            var fighter_body = fighter_data[i].Body;
            var fighter_name = fighter_data[i].Name;
            //deleteIndex is set to the index of the the element(Object) that has newID property that matches the id parameter in the url
            //this value is utilized by the splice method to ensure that the element we remove is indeed the one being outputted
            //to the page
            var deleteIndex = i;
            console.log(fighter_data[i].Body)
        }
    };

    //Delete Function
    function Delete(){
        //Removes Element
        //Returns a new Array
        fighter_data.splice(deleteIndex, 1);
        //Updates sessionStorage
        sessionStorage.setItem("fighter_data", JSON.stringify(fighter_data));
    }

    return (
        <div className="blog-details">
            <br></br>
            <br></br>
            <br></br>
            
            <h2>This fighter's Name is {fighter_name}</h2>
            <br></br>
            <h3>Description:    </h3>
            <p>{fighter_body}</p>
            <br></br>
            <Link to={`/`}>
            <button onClick={() => Delete()}>Delete This Fighter</button>
            </Link>
            
        </div>
    )
}
export default FighterDetails;