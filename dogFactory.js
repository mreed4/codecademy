// Write your code here:
const dogFactory = (_name, _breed, _weight) => {
    return {
        _name,
        _breed,
        _weight,
        get name() {
            return this._name;
        },
        set name(nameIn) {
            this._name = nameIn;
        },
        get breed() {
            return this._breed;
        },
        set breed(breedIn) {
            this._breed = breedIn;
        },
        get weight() {
            return this._weight;
        },
        set weight(weightIn) {
            this._weight = weightIn;
        },
        bark() {
            return `ruff! ruff!`;
        },
        eatTooManyTreats() {
            this.weight++;
        },
    };
};
