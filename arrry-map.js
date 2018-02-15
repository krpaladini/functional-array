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


const animalArray = []
const arrayMap = Animals.map(arrayCell => animalArray.push(arrayCell.name))

console.log(animalArray)
