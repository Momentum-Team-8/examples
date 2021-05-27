// const url = 'https://api.github.com/orgs/momentum-team-7'

// const root = document.querySelector('.container')

// fetch(url)
// .then((res) => res.json())
// .then((data) => {
//     console.log('Github api: data', data)
//     let h2 = document.createElement('h2')
//     h2.innerText = data.name
//     root.appendChild(h2)
//     return data.repos_url
// })
// .then((reposURL) => {
//     console.log(reposURL)
//     fetch(reposURL)
//     .then((res) => res.json())
//     .then((data) => {
//         let repoList = document.createElement('ul')
//         repoList.classList.add(
//             'list',
//             'pl0',
//             'ml0',
//             'center',
//             'mw6',
//             'ba',
//             'b--green',
//             'br3'
//         )
//         root.appendChild(repoList)

//         for (let repo of data) {
//             const listItem = document.createElement('li')
//             listItem.textContent = repo.full_name
//             listItem.classList.add('ph3', 'pv2', 'bb', 'b--green')
//             repoList.appendChild(listItem)
//         }
//     })
// })

const url = "http://api.exchangeratesapi.io/v1/latest?access_key=6cea2cc94c1a82e067919f7bd0068577"

fetch(url)
.then(res => res.json())
.then(data => console.log(data))