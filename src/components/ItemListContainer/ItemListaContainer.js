import './ItemListaContainer.scss'

function ItemListContainer({greeting}) {
    return (
        <div className="formatoLista">
            {greeting}
        </div>
    )
}

export default ItemListContainer;