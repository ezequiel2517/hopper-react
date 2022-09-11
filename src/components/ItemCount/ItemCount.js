import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./ItemCount.scss"

function ItemCount({ stock, counter, setCounter, setOnAdd }) {

    function handleSumar() {
        if (counter < stock)
            setCounter(counter + 1);
    }

    function handleRestar() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='itemCount'>
            <div className='contenedorCounter'>
                <InputGroup className='formCounter'>
                    <Button
                        variant="secondary"
                        className='buttonIter'
                        onClick={handleRestar}
                    >-</Button>
                    <Card body className='itemCounter'>
                        {counter}
                    </Card>
                    <Button variant="secondary"
                        className='buttonIter'
                        onClick={handleSumar}
                    >+</Button>
                </InputGroup>
            </div>
            <Button
                variant="danger"
                className='buttonCompra'
                onClick={stock > 0 ? () => setOnAdd(true) : null}
            >Comprar
            </Button>
        </div>
    );
}

export default ItemCount;