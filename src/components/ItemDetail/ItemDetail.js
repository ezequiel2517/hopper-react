import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext/CartContext';

function ItemDetail({ producto: { cover_date: publicacion, image: { original_url }, image: { screen_url }, name, description, issue_number, precio, stock, id, cantidad } }) {

  const [counter, setCounter] = useState(1);
  const { itemInCart, addToCart } = useContext(CartContext);

  function handleAgregar() {
    const itemToCart = {
      id,
      precio,
      name,
      cantidad: counter,
      screen_url
    }
    console.log(itemToCart)
    addToCart(itemToCart);
  }

  return (
    <Container className="detalleGeneral my-5">
      <div
        className='portadaComic'
      >
        <img
          className="rounded imgComic mb-2"
          src={original_url}
        ></img>
        {itemInCart(id)
          ?
          <NavLink
            to={`/cart`}
            className="buttonTerminar"
          >
            <Button variant="success">TERMINAR COMPRA</Button>
          </NavLink>
          :
          <ItemCount stock={stock} counter={counter} setCounter={setCounter} onAdd={handleAgregar}></ItemCount>
        }
      </div>
      <Card className='detalle'>
        <Card.Body>
          <Card.Title>Disponibles:</Card.Title>
          <Card.Text>
            {stock}
          </Card.Text>
          <Card.Title>Precio:</Card.Title>
          <Card.Text>
            {"$" + precio}
          </Card.Text>
          <Card.Title>Titulo:</Card.Title>
          <Card.Text>
            {name}
          </Card.Text>
          <Card.Title>Fecha de publicación:</Card.Title>
          <Card.Text>
            {publicacion}
          </Card.Text>
          <Card.Title>Descripción: </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;