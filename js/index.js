//Fetch the montsters
//GET http://localhost:3000/monsters/?_limit=20&_page=3

const URL_PREFIX='http://localhost:3000/';
let page = 1;
const getMonsters = (a) => {
    fetch (URL_PREFIX + `monsters/?_limit=50&_pages=${a}`)
    .then(resp => resp.json())
    .then (data => console.log(data))
}
getMonsters()