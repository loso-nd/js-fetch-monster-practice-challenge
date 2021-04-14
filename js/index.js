let page = 1;
const URL_PREFIX='http://localhost:3000/'


const getMonsters = (a) => {
    fetch (URL_PREFIX + `monsters/?_limit=50&_pages=${a}`)
    .then(resp => resp.json())
    .then (newMonster => {
        //console.log(data)
        newMonster.forEach(monster => {
            buildMonster(monster)})
    })
}
getMonsters()

//Building our Form 
const buildForm = () => {
   const container = document.querySelector('#monster-container')
   const form = document.createElement('form')
   let name = document.createElement('input')
   name.setAttribute('type', 'text')
   name.setAttribute('name', 'name')
   name.setAttribute('placeholder', 'name')

   let age = document.createElement('input')
   age.setAttribute('type', 'text')
   age.setAttribute('name', 'age')
   age.setAttribute('placeholder', 'age')

   let description = document.createElement('input')
   description.setAttribute('type', 'text')
   description.setAttribute('name', 'description')
   description.setAttribute('placeholder', 'description')

   //create submit button
   let submit = document.createElement('input')
   submit.textContent= "Create"
   submit.setAttribute('type', 'submit')
   submit.setAttribute('value', 'Submit')

   form.append(name, age, description, submit)

   container.appendChild(form)
}
buildForm()

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

// const handleAddMonster = (monsterObj) =>{
//     fetch ( 'http://localhost:3000/monsters', {
//         method: 'POST', 
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
            
//         })
//     })