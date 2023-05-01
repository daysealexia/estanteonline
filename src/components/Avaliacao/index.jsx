import React from 'react';
import  './index.css';


function Avaliacao (props){
    return(
        <li className='containeravaliacao'>
            <img src={props.cover} width='200'/>
            <div className='containertexto'>
                <h5>{props.titulo}</h5>
                <p>{props.corpo}</p>
            </div>
        </li>
        
    )
}
export default Avaliacao