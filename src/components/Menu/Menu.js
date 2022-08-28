import Nav from 'react-bootstrap/Nav';
import './Menu.scss'

function Menu() {
  return (
    <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Ofertas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Galeria</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;