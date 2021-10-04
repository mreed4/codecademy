const whaleTalk = input => {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        // console.log(i);
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(vowels[j])
            }
        }
        if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i]);
        }
    }

    return resultArray.join('').toUpperCase();

}

console.log(whaleTalk(`turpentine and turtles`));