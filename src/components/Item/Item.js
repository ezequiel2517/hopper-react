import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Item({producto}) {
  const precio = Number(producto.issue_number.substring(producto.issue_number.length - 1))*3+500;
  return (
          <Card className='w-25'>
            <Card.Img variant="top" src={producto.image.original_url} />
            <Card.Body>
              <Card.Title>
                {producto.name}
                </Card.Title>
              <Card.Text>
                Publicación: {producto.cover_date}
              </Card.Text>
              <Card.Text>
                Precio: {"$"+precio}
              </Card.Text>
            </Card.Body>
            <Link to={`/comic/${producto.id}`} className="btn btn-danger my-2">Ver más</Link>
          </Card>
  );
}

export default Item;