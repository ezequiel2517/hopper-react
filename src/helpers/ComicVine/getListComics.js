import { apiKey } from "./apiKey";
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser"


export function getListComics(categoryId) {
    /*return fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&sort=cover_date:desc&filter=volume:${categoryId}&limit=9`)
        .then((res)=> res.json())
        .then((data)=> {
            let {results : comics} = data
            console.log(data)
            return comics ;
        });*/



// with fetch
return fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&format=json&sort=cover_date:desc&filter=volume:${categoryId}&limit=9`)}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => {
    const parser = new XMLParser();
    console.log(data.results)
    let {results : comics} = data
            return comics ;
});
}