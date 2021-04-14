let page = 1;
const URL_PREFIX='http://localhost:3000/'
const monstrPARAMS = `${URL_PREFIX}/?_limit=50&_page=`;

//Init page buttons on page load when clicked
document.addEventListener('DOMContentLoaded', () => {
   // getMonsters(`${monstrPARAMS}${page}`);
    buttonsInit();
//document.getElementById('create-monster').append(buildForm())

});

//Fetch monsters from the server
const getMonsters = (a) => {
    const container = document.querySelector('#monster-container')
    container.innerHTML=''
    fetch (URL_PREFIX + `monsters/?_limit=5&_pages=${a}`)
    .then(resp => resp.json())
    .then (newMonster => {
        console.log(newMonster)
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

   //append form to the page
   form.append(name, age, description, submit)
   container.appendChild(form)

   //add addEventListener to the form
   form.addEventListener('submit', e => {
       e.preventDefault(),
       submitMonster(e) //handle func for submit button
   })
}
buildForm()


const submitMonster = (e) =>{
    const { name, age, description } = e.target
    fetch ( 'http://localhost:3000/monsters', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            age: age.value,
            description: description.value
        })
    })
    .then(resp => resp.json())
    .then(addMonster => buildMonster(addMonster))
}

//Display data on the page
buildMonster = (monster) => {

    let div = document.querySelector('#monster-container')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    h2.textContent = monster.name
    h3.textContent = `Age: ${parseInt(monster.age)}`
    p.textContent = monster.description

    div.append(h2, h3, p)
}

//Add addEventListener on the page buttons that loads the next list of monsters
function buttonsInit() {
    const back = document.getElementById('back');
    const forward = document.getElementById('forward');
    back.addEventListener('click', () => {
        if (page <= 1) {
            return '';
        } else {
            page -= 1;
            getMonsters(`${monstrPARAMS}${page}`);
        }
    });
    forward.addEventListener('click', () => {
        const container = document.getElementById('monster-container');
        if (container.textContent.length > 0) {
            page += 1;
            getMonsters(`${monstrPARAMS}${page}`);
        } else {
            return '';
        }
    });
};