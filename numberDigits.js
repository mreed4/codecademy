const numberDigits = (x) => {
    if (x >= 0 && x <= 9) return `One digit: ${x}`;
    if (x >= 10 && x <= 99) return `Two digits: ${x}`;
    return `The number is: ${x}`;
};
