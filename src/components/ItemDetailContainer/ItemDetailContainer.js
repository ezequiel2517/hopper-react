import { useEffect, useState } from "react"
import { getComic } from "../../helpers/ComicVine/getComic.js"
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const { comicId } = useParams();

    const [comic, setComic] = useState(null);

    useEffect(() => {
        getComic(comicId)
            .then((res) => {
                setComic(res);
            })
    }, [])

    return (
        <div>
            {comic && <ItemDetail producto={comic}></ItemDetail>}
        </div>
    )
}

export default ItemDetailContainer