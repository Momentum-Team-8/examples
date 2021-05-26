let outputContainer = document.getElementById("output")

for (let i = 0; i < sailorScouts.length; i++) {
    generateDOM(sailorScouts, i)
}

function generateDOM(array,index) {
    let sailorCard = document.createElement("div")
    sailorCard.className = "card"
    let scout = array[index]

    let lastName = scout.name.last === undefined ? "" : scout.name.last
    let firstName = scout.name.first === undefined ? "" : scout.name.first


    let fullName = document.createElement("h2")
    fullName.innerText = firstName + " " + lastName

    let image = document.createElement("img")
    image.src = scout.picture === null ? 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg' : scout.picture

    
    let dob = document.createElement("p")
    dob.innerText = moment(scout.dob).format("MMM DD, YYYY")
    let location = document.createElement("p")
    location.innerHTML = 'Location: ' + scout.location.street + `\n` + scout.location.ward

     sailorCard.appendChild(fullName)
     sailorCard.appendChild(image)
     sailorCard.appendChild(location)
     sailorCard.appendChild(dob)
    outputContainer.appendChild(sailorCard)
}




generateDOM(sailorScouts);