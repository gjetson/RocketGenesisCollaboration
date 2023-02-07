const axios = require('axios')
const url = 'http://99.79.77.144:3000/api/agents'
// fetch(url)
//     .then((response) => { response.json() })
//     .then((data) => { console.log(data) })

// function findTopAgents() {
//     let data = []
//     axios.get(url)
//         .then((response) => {
//             //console.log(response.data)
//             const result = response.data.filter((obj) => {
//                 return obj.rating >= 95
//             })
//             // console.log(result)
//             Array.prototype.push.apply(first, second);
//             console.log(data)
//         })
//         .catch((error) => {
//             console.log(error)
//             data = undefined
//         })
//     return data
// }

// findTopAgents()

const getData = async () => {
    try {
        const res = await axios.get(url)
        const topAgents = res.data.filter((obj) => {
            return obj.rating >= 95
        })
        console.log(topAgents)
        display(topAgents)
    } catch (error) {
        console.log(error)
    }
}

getData()

function display(data) {
    data.forEach((e) => {
        console.log(`${e.first_name} ${e.last_name}, ${e.rating}, ${e.fee}`)
    });
}

// async function getData() {
//     return await axios.get('https://jsonplaceholder.typicode.com/posts');
// }

// (async () => {
//     const data = await getData()
//     console.log(data)
// })()