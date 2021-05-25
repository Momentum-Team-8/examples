console.log('In the name of the moon, I will punish you!')
console.log('array of scouts', sailorScouts.map((scout) => scout.name.first))

let scoutFirstNames = sailorScouts.map((scout) => scout.name.first)
let scoutImages = sailorScouts.map((scout) => scout.picture)
function renderNames(arr) {
    // scoutFirstNames.forEach()
    arr.forEach(name => {
        let h2 = document.createElement("h2")
        h2.innerText = name;
        document.getElementById("output").appendChild(h2)
    });
}

function renderImages(arr) {
    arr.forEach(image => {
        let pic = document.createElement("img")
        pic.src = image
        document.getElementById("output").appendChild(pic)
    })
}

renderNames(scoutFirstNames)
renderImages(scoutImages)