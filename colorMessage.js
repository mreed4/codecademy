const colorMessage = (favoriteColor, shirtColor) => {
    let t = "The shirt is your favorite color!";
    let f = "That is a nice color.";
    let test = favoriteColor === shirtColor;

    return test ? t : f;
};
