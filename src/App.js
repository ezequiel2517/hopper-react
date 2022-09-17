import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext/CartContext';
import AlertaGral from './components/AlertaGral/AlertaGral';
import { ExceptionProvider } from './contexts/ExceptionContext/ExceptionContext';


function App() {

  return (
    <ExceptionProvider>
      <CartProvider>
        <HashRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/comic/:comicId' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/error/:idError' element={<AlertaGral />}></Route>
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </CartProvider>
    </ExceptionProvider>

  );
}

export default App;
