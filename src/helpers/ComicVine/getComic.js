import { apiKey } from "./apiKey";
import getInfoComic from "../firebase/getInfoComic";

export function getComic(id) {
    const promiseApi = fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&filter=id:${id}`)}`)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => {
            let { results: [comic] } = data;
            return comic
        });
    return Promise.all([promiseApi, getInfoComic(id)]).then((res) => ({ ...res[0], ...res[1] }));
}