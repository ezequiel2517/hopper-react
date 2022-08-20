import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu/Menu';
import './App.scss'
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListaContainer';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <div>
      <Header></Header>
      <ItemListContainer greeting="¡Soy un saludo de prueba!"></ItemListContainer>
    </div>
  );
}

export default App;
