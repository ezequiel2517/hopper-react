import { apiKey } from "./apiKey";

export function getListComics(categoryId) {
    return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&sort=cover_date:desc&filter=volume:${categoryId}&limit=9`)}`)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => {
            let { results: comics } = data;
            return comics;
        });
}