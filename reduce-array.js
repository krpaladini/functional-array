const Orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]


function addOrders(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = total + array[i].amount
    }
    return total


}

console.log(addOrders(Orders))

function addOrders2(array) {

    const reducer = (accumulator, arrayCell) => accumulator + arrayCell.amount
    return array.reduce(reducer, 0)
}
console.log(addOrders2(Orders))
