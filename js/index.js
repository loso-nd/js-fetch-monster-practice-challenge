//Fetch the montsters
//GET http://localhost:3000/monsters/?_limit=20&_page=3

const URL_PREFIX='http://localhost:3000/';
let page = 1;
const getMonsters = (a) => {
    fetch (URL_PREFIX + `monsters/?_limit=50&_pages=${a}`)
    .then(resp => resp.json())
    .then (monsters => {
        //console.log(data)
        monsters.forEach(monster => buildMonster(monster))})
}
getMonsters("a")

//Display data on the page
buildMonster = (monster) => {
    let div = document.querySelector('#monster-container')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    h2.textContent = monster.name
    h3.textContent = `Age: ${monster.age}`
    p.textContent = monster.description

    div.append(h2, h3, p)
}