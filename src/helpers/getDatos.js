import { stock } from "../data/data"

export function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
}
