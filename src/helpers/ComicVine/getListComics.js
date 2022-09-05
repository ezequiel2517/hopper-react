import { apiKey } from "./apiKey";

export function getListComics() {
    return fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&sort=cover_date:asc&filter=volume:18166&limit=9`)
        .then((res)=> res.json())
        .then((data)=> {
            let {results : comics} = data
            return comics ;
        });
}