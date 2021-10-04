// Write your function here:
const lifePhase = age => {

    let babyMax = 3;
    let childMax = 12;
    let teenMax = 19;
    let adultMax = 64;
    let seniorMax = 140;

    let child = [];

    let baby = () => {

        let babyArr = [];

        for (let i = 0; i <= babyMax; i++) {
            babyArr.push(i);
            if (age === baby[i]) return 'baby';
        }

    }

    baby();
}

console.log(lifePhase(3));