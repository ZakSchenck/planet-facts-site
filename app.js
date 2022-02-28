const planetBtn = Array.from(document.querySelectorAll('.planet-btn'));
const overviewBtn = Array.from(document.querySelectorAll('.overview-btn'));
let description = document.querySelector('.description');
let planetIndex = 0

fetch('data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    description.innerText = data[0].overview.content;

    planetBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            planetIndex = planetBtn.indexOf(e.target);
            button[planetIndex] = description.innerText = data[planetIndex].overview.content;
        })
    })

    overviewBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let overviewIndex = overviewBtn.indexOf(event.target);
            if (overviewIndex === 0) {
                description.innerText = data[planetIndex].overview.content;
            }
            if (overviewIndex === 1) {
                description.innerText = data[planetIndex].structure.content;
            }
            if (overviewIndex === 2) {
                description.innerText = data[planetIndex].geology.content;
            }
        })
    })
})







