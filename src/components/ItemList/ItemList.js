import Item from "../Item/Item"

function ItemList({productos = []}) {
    return (
        <div className="container mb-5 w-75"  >
            <div className="row justify-content-center gap-5 ">
                {productos.map((prod) => <Item key={prod.id} producto={prod} />)}
            </div>
        </div>
    )
}

export default ItemList