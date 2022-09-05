import { apiKey } from "./apiKey";

export function getListComics(categoryId) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&sort=cover_date:desc&filter=volume:${categoryId}&limit=9`)
        .then((res)=> res.json())
        .then((data)=> {
            let {results : comics} = data
            return comics ;
        });
}