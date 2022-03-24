const planetBtn = Array.from(document.querySelectorAll('.planet-btn'));
const overviewBtn = Array.from(document.querySelectorAll('.overview-btn'));
const description = document.querySelector('.description');
const source = document.querySelector('.source');
const planetImage = document.querySelector('.planet-img');
const planetImageOverlay = document.querySelector('.planet-img__overlay');
const planetTitle = document.querySelector('.planet-title');
const rotationValue = document.querySelector('.rotation-value');
const revolutionValue = document.querySelector('.revolution-value');
const radiusValue = document.querySelector('.radius-value');
const tempValue = document.querySelector('.temp-value');
let planetIndex = 2;
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const planetButton = document.querySelectorAll('.planet-btn')

fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    // Added active classlists when page loads
    overviewBtn[0].classList.add('purpleBg');
    planetBtn[2].classList.add('active');
    // Earth information is displayed on load
    description.innerText = data[2].overview.content;
    source.innerText = data[2].overview.source;
    planetImage.src = data[2].images.planet;
    planetTitle.innerText = data[2].name;
    rotationValue.innerText = data[2].rotation;
    revolutionValue.innerText = data[2].revolution;
    radiusValue.innerText = data[2].radius;
    tempValue.innerText = data[2].temperature;
    // Removes purple background class
    function removeActive() {
        overviewBtn.forEach(function (btn) {
            btn.classList.remove('purpleBg');
        });
    }
    // Removes active nav class
    function removeActiveNav() {
        planetBtn.forEach(button => {
            button.classList.remove('active');
        })
    }
    // Logic for switching information on click via Nav Items
    planetBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            removeActive();
            removeActiveNav();
            overviewBtn[0].classList.add('purpleBg');
            button.classList.add('active');

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

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navToggle');
    header.classList.toggle('headerToggle');
    planetBtn.forEach(btn => {
        btn.classList.toggle('btnToggle')
    })
})



    









