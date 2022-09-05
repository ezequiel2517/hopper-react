import { apiKey } from "./apiKey";

export function getComic(id) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&filter=id:${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            let {results : [comic]} = data;
            return comic;
        });
}