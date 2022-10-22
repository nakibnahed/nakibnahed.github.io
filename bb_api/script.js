const api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json();
        printData(data)
    } catch (e) {
        console.log("Error:", e.message)
    }

}

function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("content")

    header.innerHTML += `


    <select class="form-control" onchange="getCh(this.value)">
    <option>Select an actor</option>
    ${data.map(character => `<option>${character.name}</option>`)}
    </select>
    `

    console.log(data);
}

async function getCh(name){

    if(name !== 'Select an actor'){
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json();
        content.innerHTML = `
        <h2 class="name">${data[0].name} (${data[0].nickname})</h2>
        <h4 class="portrayed">${data[0].portrayed}</h4>
        <img class="actor-img" src="${data[0].img}">
        `
    }
   
}



getData()

//

