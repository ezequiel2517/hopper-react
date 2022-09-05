import { useEffect, useState } from "react"
import { getListComics } from "../../helpers/ComicVine/getListComics.js"
import ItemList from "../ItemList/ItemList.js"
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [comics, setComics] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getListComics(categoryId ? categoryId : 18166)
            .then((res) => {setComics(res);})
    }, [categoryId])
    
    return (
        <div>
            <ItemList productos={comics} />
        </div>
    )
}

export default ItemListContainer