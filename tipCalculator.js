// Write your function here:
const tipCalculator = (quality, total) => {
    let tip = {
        bad: 0.05,
        ok: 0.15,
        good: 0.2,
        excellent: 0.3,
    };

    let n = tip[quality] * total;
    let m = 0.18 * total;

    return tip.hasOwnProperty(quality) ? n : m;
};

console.log(tipCalculator("wow", 25));
