const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

function dogFilter(array) {
    let dogArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].species === "dog") {
            dogArray.push(array[i].name);

        }
    }

    return dogArray;

}

console.log(dogFilter(Animals));


const pupFilter = Animals.filter(cell => cell.species === "dog")

console.log(pupFilter)
