import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
        <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/comic/:comicId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
