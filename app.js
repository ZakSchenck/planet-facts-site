let description = document.querySelector('.description');
let overviewBtn = document.querySelector('.overview');
let structureBtn = document.querySelector('.structure');
let geologyBtn = document.querySelector('.geology');
let venus = document.querySelector('.venus');
let mercury = document.querySelector('.mercury');
let index = 0;

fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    description.innerText = data[0].overview.content;

    // Buttons to change planet
    venus.addEventListener('click', () => {
        index = 1;
        description.innerText = data[1].overview.content
    })
    mercury.addEventListener('click', () => {
        index = 0;
        description.innerText = data[0].overview.content
    })

    // Buttons to switch between paragraphs
    overviewBtn.addEventListener('click', () => {
        description.innerText = data[index].overview.content;
    })
    structureBtn.addEventListener('click', () => {
        description.innerText = data[index].structure.content;
    })
    geologyBtn.addEventListener('click', () => {
       description.innerText = data[index].geology.content;
    })
})







