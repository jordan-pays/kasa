import dataAppart from '../data/data.json'

export function getListAppartemment() {
    const arrayDepart  = [...dataAppart]
    const data = [];
    for (let index = 0; index < arrayDepart.length; index++) {
        const appart = arrayDepart[index];
        const obj = {
            id : appart.id,
            title:appart.title,
            cover:appart.cover
        }
        data.push(obj)
    }
    return data;
}


export function getAppartemmentById(id) {
    const arrayDepart  = [...dataAppart]
    const data = arrayDepart.filter(element => element.id == id)
    return data[0];
}