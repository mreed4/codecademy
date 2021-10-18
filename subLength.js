// Write function below
const subLength = (str, char) => {
    let arr = [...str];
    let first = arr.indexOf(char);
    let second = arr.indexOf(char, first + 1);

    arr = arr.filter((n) => n === char);
    let lessThanTwo = arr.length < 2;
    let moreThanTwo = arr.length > 2;

    if (lessThanTwo || moreThanTwo) return 0;

    return str.slice(first, second).length + 1;
};

console.log(subLength("momentum", "m"));
