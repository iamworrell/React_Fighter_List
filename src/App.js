import logo from './logo.svg';
import Navbar from './multiple_components/navbar';
import Home from './multiple_components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './multiple_components/create';
import FighterDetails from './multiple_components/fighterdetails';
import React from 'react';


function App() {
  /* Since we need to share the fighter_data array between the home component and the create component
    We use a Method known as Lifting State Up - Which is Moving the fighters_data array an all its related
    funtions to the closest common ancestor of the home & create component ie. the Root Component App.js*/



    //On load this block of code runs
    //Assigns parsed (string to array) value of key "fighter_data" in session storage 
    //to variable pre_saved_data
    //We need to assign values to the variables pre_saved_data & fighter_data on load
    //in order to check if the key "fighter_data" exists in the session storage ie null
    //If it is null or not null the programme will act accordingly
    var pre_saved_data = JSON.parse(sessionStorage.getItem("fighter_data"));
    var fighter_data = [];
    fighter_data = pre_saved_data;
    console.log(fighter_data);

    //Function Invoked when the onSubmit Event Occurs in the Form
    const handleSubmit = (e) => {
        //Gains access to the value in the input fields of the form
        var newID = document.getElementById("ID").value;
        var Name = document.getElementById("Name").value;
        var Body = document.getElementById("Body").value;
        var Technique = document.getElementById("Technique").value;

        //Stores Form Data in a Javascript Object
        //Stored as {Name: "", Body: "", Technique: ""}
        //Assigns Object to the variable fighter
        var fighter = {newID, Name, Body, Technique};

        //if pre_saved_data ie key "fighter_data" in session storage is null
        //this block of code runs
        if(pre_saved_data === null){

            console.log('fighter_data is null, we are now setting defaut data...');

            //Assign an empty Array to the variable fighter_data
            fighter_data = [];
            
            //Adds Form Data to the Array fighter_data as an Object
            fighter_data.push(fighter);

            //JSON.stringify(fighter_data)) - Converts JavaScript Object ie. Array fighter_data
            //to a JSON String
            //sessionStorage.setItem("fighter_data", JSON.stringify(fighter_data)) -
            //Stores fighter_data (Array) as a String in the session storage in browser in the key
            //"fighter_data"
            sessionStorage.setItem("fighter_data", JSON.stringify(fighter_data));
            console.log('fighter_data now contains: ',JSON.parse(sessionStorage.getItem("fighter_data")));

        //If pre_saved_data is not null then this block of code runs
        }else{
          var i;
          //This block of code checks if the Fighter ID entered is unique
          //This for loop cycles through each newID property of an Object in the fighter_data Array
          //if the newID entered in the form matches a newID that is already in the array isIDUnique is set to false
          for(i=0; i<fighter_data.length; i++){
            if(fighter_data[i].newID == newID){
              console.log("ID Must be Unique");
              var isIDUnique = false;
            }
          }

          //If isIDUnique is set to null then that means the Fighter ID Entered is not the same value as
          //newID property of an Object in the Array
          //Therefore we can push the fighter data to the array in the session Storage
          if(isIDUnique == null){
            //Assigns pre_saved_data ie parsed (string to array) value of key 
            //"fighter_data" in session storage to fighter_data Array
            fighter_data = pre_saved_data;

            //Adds Form Data to the Array fighter_data as an Object
            fighter_data.push(fighter);
            
            //JSON.stringify(fighter_data)) - Converts JavaScript Object ie. Array fighter_data
            //to a JSON String
            //sessionStorage.setItem("fighter_data", JSON.stringify(fighter_data)) -
            //Stores fighter_data (Array) as a String in the session storage in browser in the key
            //"fighter_data"
            sessionStorage.setItem("fighter_data", JSON.stringify(fighter_data));

            console.log('fighter_data contains: ', fighter_data);
          }
        }
        //e - event object ie. the object the event is occurring in.
        //e refers to the form
        //e.preventDefault() - preventDefault behavior of form.
        e.preventDefault();
    }
  
      


  return (
    //Router - Allows us to use the router component
    <Router>
      <div className="App">
        <header className="App-header">
          {/* because the navbar comp is not nested in the switch, it is present for each endpoint visited */}
          <Navbar/>
          {/* Switch Component - Ensures only one component is loaded at a time in the webpage */}

          
          <Switch>
            {/* Route - Component that stores the endpoint in the path property.
                It nests the component that is loaded when the user visits that endpoint  */}
            <Route exact path="/">
              <Home fighter_data={fighter_data}></Home>
            </Route>
            <Route exact path="/create">
              {/* By default '/create' loads the home page because of how react works
                  to fix this error we add the 'exact' property*/}
              <Create handleSubmit={handleSubmit}></Create>
            </Route>
            <Route exact path="/fighters/:id">
              <FighterDetails fighter_data={fighter_data}></FighterDetails>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
