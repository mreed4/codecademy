const getSleepHours = (day) => {
    day = day.toLowerCase();

    let hoursSlept = {
        monday: 8,
        tuesday: 7,
        wednesday: 7,
        thursday: 8,
        friday: 7,
        saturday: 7,
        sunday: 8,
    };

    return hoursSlept[day];
};

const getActualSleepHours = () => {
    let mo = getSleepHours("Monday");
    let tu = getSleepHours("Tuesday");
    let we = getSleepHours("Wednesday");
    let th = getSleepHours("Thursday");
    let fr = getSleepHours("Friday");
    let sa = getSleepHours("Saturday");
    let su = getSleepHours("Sunday");

    return mo + tu + we + th + fr + sa + su;
};

const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let calcHours = Math.abs(idealSleepHours - actualSleepHours);

    if (actualSleepHours === idealSleepHours) {
        console.log(
            `You got the perfect amount of sleep! [over by ${calcHours} hours]`
        );
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            `You got more sleep than you needed. [over by ${calcHours} hours]`
        );
    } else {
        console.log(`Get some rest! [under by ${calcHours} hours]`);
    }
};

calculateSleepDebt();
