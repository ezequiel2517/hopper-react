import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListaContainer';

function App() {
  return (
    <div>
      <Header></Header>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
