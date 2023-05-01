import React from 'react';
import  './index.css';


function Button (props){
    return(
        <button>
            <img src={props.icone} width="30"/>
            <label>{props.texto}</label>
        </button>
        
    )
}
export default Button