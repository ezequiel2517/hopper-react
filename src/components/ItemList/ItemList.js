import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

function ItemList({ productos = [] }) {

    return (
        <div className="container my-5 w-75"  >
            <h2>Productos</h2>
            <hr></hr>
            <ItemCount stock="3" inicial="2" onAdd={()=>{console.log("Soy un mensaje")}}></ItemCount>
            <hr></hr>
            <div className="row justify-content-center gap-5 ">
                {productos.map((prod) => <Item key={prod.id} producto={prod} />)}
            </div>
        </div>
    )
}

export default ItemList