const planetBtn = Array.from(document.querySelectorAll('.planet-btn'));
const overviewBtn = Array.from(document.querySelectorAll('.overview-btn'));
const description = document.querySelector('.description');
const source = document.querySelector('.source');
const nav = document.querySelector('.nav');
const planetImage = document.querySelector('.planet-img');
const planetImageOverlay = document.querySelector('.planet-img__overlay');
let planetTitle = document.querySelector('.planet-title');
let rotationValue = document.querySelector('.rotation-value');
let revolutionValue = document.querySelector('.revolution-value');
let radiusValue = document.querySelector('.radius-value');
let tempValue = document.querySelector('.temp-value');
let planetIndex = 0

fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    description.innerText = data[0].overview.content;
    source.innerText = data[0].overview.source;
    planetImage.src = data[0].images.planet;
    planetTitle.innerText = data[0].name;

    rotationValue.innerText = data[0].rotation;
    revolutionValue.innerText = data[0].revolution;
    radiusValue.innerText = data[0].radius;
    tempValue.innerText = data[0].temperature;

    function removeActive() {
        overviewBtn.forEach(function (btn) {
            btn.classList.remove('purpleBg');
        });
    }
    
    planetBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            removeActive();
            planetIndex = planetBtn.indexOf(e.target);
            button[planetIndex] = description.innerText = data[planetIndex].overview.content;
            source.innerText = data[planetIndex].overview.source;
            planetImage.src = data[planetIndex].images.planet;
            planetTitle.innerText = data[planetIndex].name;
            planetImageOverlay.style.display = 'none';

            rotationValue.innerText = data[planetIndex].rotation;
            revolutionValue.innerText = data[planetIndex].revolution;
            radiusValue.innerText = data[planetIndex].radius;
            tempValue.innerText = data[planetIndex].temperature;
        })
    })

    overviewBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            let overviewIndex = overviewBtn.indexOf(event.target);
            console.log(overviewIndex)
            removeActive();
             button.classList.add('purpleBg');
            if (overviewIndex === 0) {
                description.innerText = data[planetIndex].overview.content;
                planetImage.src = data[planetIndex].images.planet
                planetImageOverlay.style.display = 'none';
            }
            if (overviewIndex === 1) {
                description.innerText = data[planetIndex].structure.content;
                planetImage.src = data[planetIndex].images.internal
                planetImageOverlay.style.display = 'none';
            }
            if (overviewIndex === 2) {
                description.innerText = data[planetIndex].geology.content;
                planetImage.src = data[planetIndex].images.planet
                planetImageOverlay.src = data[planetIndex].images.geology;
                planetImageOverlay.classList.add('overlay')
                planetImageOverlay.style.display = 'block';
            }
        })
    })
})







