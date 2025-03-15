// rafce

import React from "react";

const Feedback = (props) => {
    
    return (

        //.d-flex.justify-content-evenly.m-2
        
        <div className="d-flex justify-content-center m-2">
            
            <button
                className="btn btn-outline-primary mx-2" 
                type="button" 
                onClick={props.funcaoOK}
            >

                {props.textoOK}
            
            </button>

            <button 
                className="btn btn-outline-danger mx-2"
                type="button" 
                onClick={props.funcaoNOK}
            >

                {props.textoNOK}
            
            </button>

        </div>

    )

}

export default Feedback