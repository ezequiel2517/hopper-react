import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Item({producto}) {
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
            </Card.Body>
            <Link to={`/comic/${producto.id}`} className="btn btn-danger my-2">Ver más</Link>
          </Card>
  );
}

export default Item;