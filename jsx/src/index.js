// Import libs
import React from "react";
import ReactDOM from "react-dom";


// Create component

function getBtnText(){
    return "I'm a button";
}

const App = () => {
    const btnText= "Click here";
    const btnText2= 2345;
    const btnText3= ['Shivam', 3012];
    const btnText4= {name: "Hi Button"}

    return <div > 
        <label className="label" htmlFor="nameI">Enter Name</label>
        <input type="text" id="nameI"/>
        <button style={{ backgroundColor: 'green', color: 'white'}}>
            {getBtnText()}
        </button>
        <button>{btnText}</button>
        <button>{btnText2}</button>
        <button>{btnText3}</button>
        {/* <button>{btnText4}</button> */}
        <button>{btnText4.name}</button>
    </div>
};


// Render components on screen
ReactDOM.render( <
    App / > ,
    document.querySelector("#root")
);