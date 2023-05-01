import React from 'react';
import  './header.css';
import Logo from '../../assets/foto_bio.jpg'


function Header (){
    return(
        <div id='divHeader'>
           <div className='containerlogo'>
            <img src={Logo} className='fotobio'/>
            <h1 className='daysealexia'>Dayse Alexia</h1>
           </div>
            <div className='containerdados'>
                <div>
                    <label>130</label>
                    <h2>Lidos</h2>
                </div>
                <div>
                    <label>60</label>
                    <h2>Vou ler</h2>
                </div>
            </div>
            
        </div>
    )
}
export default Header