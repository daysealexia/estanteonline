import React from 'react';
import  './catalogo.css';
import Button from './Buttons/index'
import Coracao from '../../assets/icon_coracao.png'
import Estrela from '../../assets/icon_estrela.png'
import Presente from '../../assets/icon_presente.png'
import Balao from '../../assets/icon_balao-de-fala.png'
import Estante from './Estante/index'
import Um from '../../assets/Cover_books/1.jpg'
import dois from '../../assets/Cover_books/2.jpg'
import tres from '../../assets/Cover_books/3.jpg'
import quatro from '../../assets/Cover_books/4.jpg'
import cinco from '../../assets/Cover_books/5.jpg'
import seis from '../../assets/Cover_books/6.jpg'
import sete from '../../assets/Cover_books/7.jpg'
import oito from '../../assets/Cover_books/8.jpg'
import nove from '../../assets/Cover_books/9.jpg'
import dez from '../../assets/Cover_books/10.jpg'



function Catalogo (){
    return(
        <div>
            <h3>Minha estante</h3>

            <div className='containercatalogo'>
            <div className='containerbuttons'>
                <Button icone={Coracao} texto="Favoritos"/>
                <Button icone={Estrela} texto="Avaliados"/>
                <Button icone={Presente} texto="Desejados"/>
                <Button icone={Balao} texto="Resenhas"/>
            </div>
            <ul className='containerestante'>
                <Estante img={Um}/>
                <Estante img={dois}/>
                <Estante img={tres}/>
                <Estante img={quatro}/>
                <Estante img={cinco}/>
                <Estante img={seis}/>
                <Estante img={sete}/>
                <Estante img={oito}/>
                <Estante img={nove}/>
                <Estante img={dez}/>
            </ul>
            </div>
        </div>
    )
}
export default Catalogo