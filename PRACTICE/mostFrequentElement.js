function mostFrequentElement(numbers) {
    const frequencyMap = new Map();
    let maxCount = 0;
    let frequentElement = numbers[0]; // Set default to the first element
    for (const num of numbers) {
        const count = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, count);
        if (count > maxCount) {
            maxCount = count;
            frequentElement = num;
        }
    }
    return frequentElement;
}

const numbers = [1, 'a', 1, 4, 3, 'a', 5, 'a', 4, 2, 'a'];
const result = mostFrequentElement(numbers);
console.log(result);
