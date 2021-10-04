const _ = {

    clamp(number, lower, upper) {

        if (number < lower) return lower;
        if (number > upper) return upper;
        return number;

    },
    inRange(number, start, end) {

        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        return (number >= start && number < end);

    },
    words(string) {

        return string.split(' ');

    },
    pad(string, length) {
        // 'char' omitted from the exercise instructions/requirements,
        // but essentially implemented below

        if (length < string.length) {
            return string;
        }
        let diff = length - string.length;
        let char = " ";
        let calcPadStart = Math.floor(diff / 2);
        let padStart = char.repeat(calcPadStart);
        let calcPadEnd = length - (calcPadStart + string.length);
        let padEnd = char.repeat(calcPadEnd);

        string = padStart + string + padEnd
        return string;

    },
    has(obj, key) {

        return (obj[key] !== undefined);

    },
    invert(obj) {

        // console.log(obj);
        const objInvert = {};

        for (const key in obj) {
            /*
            let newKey = obj[Object.keys(obj)[key - 1]];
            let newValue = Object.keys(obj)[key - 1];
            objInvert[newKey] = newValue;
            */

            let originalValue = obj[key];
            objInvert[originalValue] = key;
        }

        return objInvert;

    },
    findKey(obj, predicate) {

        for (let key in obj) {

            let value = obj[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
            return undefined;

        }

    },
    drop(arr, n = 1) {

        let arr2 = arr;
        for (let i = 0; i < n; i++) {
            arr2.shift();
        }
        return arr2;

    },
    dropWhile(arr, predicate) {

        let dropNumber = arr.findIndex((element, index) => {
            return !predicate(element, index, arr);
        });

        let droppedArray = this.drop(arr, dropNumber);

        return droppedArray;
    },
    chunk(arr, size = 1) {

        let arr2 = [];
        for (let i = 0; i < arr.length; i += size) {
            arr2.push(arr.slice(i, i + size));
        }

        return arr2;
    }

}

// Do not write or modify code below this line.
module.exports = _;