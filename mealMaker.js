let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(app) {
        this._courses.appetizers = app;
    },
    get mains() {
        return this._courses.main;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name} as an appetizer, paired with a ${main.name} as your main course. Your dessert is a ${dessert.name}. The total price is $${totalPrice}.`;
    },
};

menu.addDishToCourse("appetizers", "ceviche", 13);
menu.addDishToCourse("appetizers", "salad", 12);
menu.addDishToCourse("appetizers", "chacuterie", 16);

menu.addDishToCourse("mains", "steak", 21);
menu.addDishToCourse("mains", "seared ahi", 23);
menu.addDishToCourse("mains", "chicken", 22);

menu.addDishToCourse("desserts", "tres leches", 9);
menu.addDishToCourse("desserts", "creme brule", 10);
menu.addDishToCourse("desserts", "cake", 8);

let meal = menu.generateRandomMeal();

console.log(meal);
