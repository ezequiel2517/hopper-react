import { useEffect, useState } from "react"
import { getDatos } from "../../helpers/getDatos"
import ItemList from "../ItemList/ItemList.js"


function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getDatos()
            .then((res) => {setProductos(res);})
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer