import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import getInfoComic from '../../helpers/firebase/getInfoComic';
import { useEffect, useState } from "react"

function Item({ producto }) {



  const [infoComic, setInfoComic] = useState(0);

  useEffect(() => {
    getInfoComic(producto.id)
      .then((res) => {
        setInfoComic(res);
      });
  }, [])

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
          Precio: {"$" + infoComic.precio}
        </Card.Text>
      </Card.Body>
      <Link to={`/comic/${producto.id}`} className="btn btn-danger my-2">Ver más</Link>
    </Card>
  );
}

export default Item;