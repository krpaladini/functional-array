const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

const animalMap = function(array) {
    let animalMapArray = []
    for (let i = 0; i < array.length; i++) {
        animalMapArray.push(array[i].name);

    }
    return animalMapArray

}

let animalNames = animalMap(Animals)
console.log(animalNames)



const arrayMap = function(array) {
    return array.map(arrayCell => (arrayCell.name))
}

console.log(arrayMap(Animals))


const nameArray = function(array) {
    return array.filter(arrayCell => arrayCell.species !== "cat")
        .map(arrayCell => arrayCell.name + " is a " + arrayCell.species)


}

console.log(nameArray(Animals))
