const planetBtn = Array.from(document.querySelectorAll('.planet-btn'));
const overviewBtn = Array.from(document.querySelectorAll('.overview-btn'));
const description = document.querySelector('.description');
const source = document.querySelector('.source');
const nav = document.querySelector('.nav');
const planetImage = document.querySelector('.planet-img')
let planetIndex = 0

fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    description.innerText = data[0].overview.content;
    source.innerText = data[0].overview.source;
    planetImage.src = data[0].images.planet

    planetBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            planetIndex = planetBtn.indexOf(e.target);
            button[planetIndex] = description.innerText = data[planetIndex].overview.content;
            source.innerText = data[planetIndex].overview.source;
            planetImage.src = data[planetIndex].images.planet
        })
    })

    overviewBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            let overviewIndex = overviewBtn.indexOf(event.target);
            if (overviewIndex === 0) {
                description.innerText = data[planetIndex].overview.content;
                planetImage.src = data[planetIndex].images.planet
            }
            if (overviewIndex === 1) {
                description.innerText = data[planetIndex].structure.content;
                planetImage.src = data[planetIndex].images.internal
            }
            if (overviewIndex === 2) {
                description.innerText = data[planetIndex].geology.content;
                planetImage.src = data[planetIndex].images.geology
            }
        })
    })
})







