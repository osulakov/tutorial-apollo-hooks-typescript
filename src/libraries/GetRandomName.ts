
enum Categories {
    colors,
    adjectives,
    animals
}

const colors: string[] = [
    "Red", "Green", "Blue", "Yellow", "Pink", "Dark Blue", "Orange",
    "Purple", "Grey", "Black", "White", "Brown"
]

const adjectives: string[] = [
    "Windy", "Woody", "Wild", "Hungry", "Angry", "Kind", "Crazy", "Wise"
]

const animals: string[] = [
    "Horse", "Moron", "Shark", "Lion", "Tiger", "Cow", "Sheep", "Snake"
]

const stringsArray: Array<Array<string>> = [
    colors, adjectives, animals
]



export const getRandomName = (count: number): string => {
    let str = ""

    if (count === stringsArray.length) {
        for (let i = 0; i < count; i++) {
            let arrayLength = stringsArray[i].length;
            let randomIndex = Math.floor(Math.random() * arrayLength);

            str = str.concat(stringsArray[i][randomIndex]);
            str = str.concat(" ");
        }
    }

    return str.trim();
}

