import { apiKey } from "./apiKey";

export function getComic(id) {
    /*return fetch(`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&filter=id:${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            let {results : [comic]} = data;
            return comic;
        });*/

    return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&filter=id:${id}`)}`)
    .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
    })
    .then(data => {
        let {results : [comic]} = data;
        return comic;
    });
}