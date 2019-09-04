let values = [
    { id: 1, name: "south-indian" },
    { id: 2, name: "north-indian" },
    { id: 3, name: "chinese" },
]

// let cuisines = values[0].name

// for (let i = 1; i < values.length; i++) {
//     cuisines = cuisines + ',' + values[i].name
// }


// console.log(cuisines)


let cuisines = { ...values }
console.log(cuisines) 