// Write your function here:
const howOld = (age, year) => {

    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    let futureAge = age + (year - currentYear);
    let yearsBefore = (currentYear - age) - year;
    let pastAge = age - (currentYear - year);


    if (year > currentYear) {
        return [
            `You are ${age} year(s) old. You were born in ${birthYear}.\n`,
            `You will be age ${futureAge} in the year ${year}.`
        ].join("");
    } else if (year < birthYear) {
        return [
            `You are ${age} year(s) old. You were born in ${birthYear}.\n`,
            `The year ${year} was ${yearsBefore} years before you were born.`
        ].join("");
    } else {
        return [
            `You are ${age} year(s) old. You were born in ${birthYear}.\n`,
            `You were age ${pastAge} in the year ${year}.`
        ].join("");
    }
}

let n = Math.floor(Math.random() * 99);
let m = Math.floor(Math.random() * (2075 - 1905) + 1905);

console.log(howOld(n, m));