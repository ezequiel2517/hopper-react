import { db } from "./config";
import { doc, getDoc } from 'firebase/firestore/lite';

function getInfoComic(id) {
    const comicInfo = doc(db, "comics", id.toString());
    return getDoc(comicInfo)
        .then((snapshot) => {
            return {
                stock: snapshot.data().stock,
                precio: snapshot.data().precio
            }
        })
        .catch(() => {
            return {
                stock: 0,
                precio: 0
            }
        })
}

export default getInfoComic;