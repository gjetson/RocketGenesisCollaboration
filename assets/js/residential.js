//const axios = require('axios')
const URL = 'http://99.79.77.144:3000/api/agents'

const currFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const pcntFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const formatTableRow = (first, last, rtng, fee) => {
    const row = document.createElement('tr')
    let col = document.createElement('td')
    col.innerHTML = first
    row.appendChild(col)
    col = document.createElement('td')
    col.innerHTML = last
    row.appendChild(col)
    col = document.createElement('td')
    col.innerHTML = rtng
    row.appendChild(col)
    col = document.createElement('td')
    col.innerHTML = fee
    row.appendChild(col)
    return row
}

const formatData = async () => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        const frag = document.createDocumentFragment()
        let row = 1
        data.forEach((e) => {
            // console.log(e)
            if (e.rating >= 95) {
                const rtng = pcntFormatter.format(e.rating / 100)
                const fee = currFormatter.format(e.fee)
                frag.appendChild(formatTableRow(e.first_name, e.last_name, rtng, fee))
            }
        })
        const div = document.getElementById('agent-table-body')
        div.appendChild(frag)
    } catch (err) {
        console.log(err)
    }
}

formatData()