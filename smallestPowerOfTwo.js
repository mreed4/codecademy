const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        let z = 1;

        while (z < arr[i]) {
            z *= 2;
        }

        results.push(z);
    }

    return results;
};

console.log(smallestPowerOfTwo(numbers));
