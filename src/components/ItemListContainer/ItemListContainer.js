import { useEffect, useState } from "react"
import { getListComics } from "../../helpers/ComicVine/getListComics.js"
import ItemList from "../ItemList/ItemList.js"


function ItemListContainer() {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        getListComics()
            .then((res) => {setComics(res);})
    }, [])
    
    return (
        <div>
            <ItemList productos={comics} />
        </div>
    )
}

export default ItemListContainer