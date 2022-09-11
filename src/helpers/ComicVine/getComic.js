import { apiKey } from "./apiKey";

export function getComic(id) {
    return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&filter=id:${id}`)}`)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => {
            let { results: [comic] } = data;
            comic.stock = Math.floor(Math.random() * 10);
            comic.precio = Number(comic.issue_number.substring(comic.issue_number.length - 1)) * 3 + 500;
            return comic;
        });
}