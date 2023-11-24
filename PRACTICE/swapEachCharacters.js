function swapEachCharacters(sentence) {
    const characters = sentence.split('')
    return characters.map((character) => {
        if (character === character.toUpperCase()) {
            return character.toLowerCase()
        } else if (character === character.toLowerCase()) {
            return character.toUpperCase()
        } else {
            return character
        }
    }).join('')
}

const sentence = "The Quick Brown Fox"
const result = swapEachCharacters(sentence)
console.log(result)