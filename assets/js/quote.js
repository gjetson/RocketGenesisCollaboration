const RES = 'residential'
const COM = 'commercial'
const IND = 'industrial'
const HD = 'card-heading'


document.getElementById('building-type').addEventListener('change', (e) => {
    console.log(e.target.value)
    let color = 'red'
    if (e.target.value === RES) {
        color = 'lightblue'
    } else if (e.target.value === COM) {
        color = '#FFCCCB'
    } else if (e.target.value === IND) {
        color = '#C8C8C8'
    }
    const collection = document.getElementsByClassName(HD);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = color;
    }
})


console.log('BOOM')