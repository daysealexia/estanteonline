import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/header';
import Catalogo from './components/Catalogo/catalogo';
import Avaliacao from './components/Avaliacao/index';
import quatro from './assets/Cover_books/4.jpg'
import sete from './assets/Cover_books/7.jpg'

function App() {
  return (
    <div className="App">
        <Header/>
        <Catalogo/>
      
        <h3>Últimas Avaliações</h3>
        <ul className='containerul'>
          <Avaliacao
            cover={quatro}
            titulo="Pensamento Feminista: Conceitos Fundamentais"
            corpo="A missão deste livro é, portanto, a de mostrar o caminho no qual os conceitos centrais do pensamento feminista foram se desdobrando, sendo questionados e dando origem a novas formas de pensar e definir identidades, gênero, subjetividades e sexualidades. A sinalização desse longo processo que constituiu o léxico feminista vai certamente facilitar o estudo das tendências teóricas e o avanço dos trabalhos acadêmicos e políticos no contexto atual."
          />
          <Avaliacao
            cover={sete}
            titulo="A revolução dos bichos: Um conto de fadas"
            corpo="Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos."
          />
        </ul>
       
    </div>
  )
}

export default App;
