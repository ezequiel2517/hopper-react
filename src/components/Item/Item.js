import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item({producto}) {
  return (
          <Card className='w-25 cardHover'>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>
                {producto.nombre}
                </Card.Title>
              <Card.Text>
                {producto.desc}
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default Item;