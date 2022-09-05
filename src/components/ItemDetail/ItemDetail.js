import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ producto: { cover_date: publicacion, image: { original_url }, name, description, issue_number } }) {
  const stock = Math.floor(Math.random() * 10);
  const precio = Number(issue_number.substring(issue_number.length - 1))*3+500;
  return (

    <Container className="detalleGeneral my-5">
      <div
        className='portadaComic'
      >
        <img
          className="rounded imgComic mb-2"
          src={original_url}
        ></img>
        <ItemCount stock={stock} inicial={stock > 0 ? 1 : 0} ></ItemCount>
      </div>
      <Card className='detalle'>
        <Card.Body>
          <Card.Title>Disponibles:</Card.Title>
          <Card.Text>
            {stock}
          </Card.Text>
          <Card.Title>Precio:</Card.Title>
          <Card.Text>
            {"$"+precio}
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