function computeTwoArrays(arr1, arr2) {
    const result = [];
    const minLength = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < minLength; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    if (arr1.length > arr2.length) {
        result.push(...arr1.slice(minLength));
    } else if (arr2.length > arr1.length) {
        result.push(...arr2.slice(minLength));
    }

    return result;
}

const arr1 = [1, 0, 2, 3, 4]
const arr2 = [3, 5, 6, 7, 8, 13]

const result = computeTwoArrays(arr1, arr2)
console.log(result)