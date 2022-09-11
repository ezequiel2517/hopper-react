import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

function ItemDetail({ producto: { cover_date: publicacion, image: { original_url }, name, description, issue_number, precio, stock } }) {
  const [counter, setCounter] = useState(1);
  const [onAdd, setOnAdd] = useState(false);

  return (
    <Container className="detalleGeneral my-5">
      <div
        className='portadaComic'
      >
        <img
          className="rounded imgComic mb-2"
          src={original_url}
        ></img>
        {!onAdd ? <ItemCount stock={stock} counter={counter} setCounter={setCounter} setOnAdd={setOnAdd} ></ItemCount> :
          <NavLink
            to={`/cart`}
            className="buttonTerminar"
          >
            <Button variant="success">TERMINAR COMPRA</Button>
          </NavLink>
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