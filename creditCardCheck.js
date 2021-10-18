// All valid credit card numbers
const valid0 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
];

// This takes in an array of numbers, and returns a boolean value
const validateCard = (card) => {
    // https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg

    // Calculated using the Luhn algorithm as demonstrated above,
    // this reduces the given array, 'card', to a single number
    let luhnNumber = card
        .reverse()
        .map((n, i) => {
            if (i % 2 === 0) {
                return n;
            } else {
                n = n * 2;
                if (n > 9) {
                    return n - 9;
                } else {
                    return n;
                }
            }
        })
        .reverse()
        .reduce((a, b) => a + b);

    // Once we have the single number from above, test it
    // This returns a boolean value
    let isValid = luhnNumber % 10 === 0;

    return isValid;
};

// This returns an array of arrays ('cards'), but only if the cards are invalid
// The list of all cards is set in `batch`, on Line 24
const findInvalidCards = (cards) => {
    return (
        cards
            // The commented code returns a boolean value for each card
            /*
        i.e. [true, true, false] ...
        .map(n => validateCred(n))
        .filter(n => n === false);
        */

            //  The below code will return the arrays where the card number is
            //  NOT valid, i.e. where validateCard() returns false
            .filter((n) => validateCard(n) === false)
            .map((n) => n.reverse())
    );
};

// This maps each invalid card to the issuing bank or lender, depending on the
// first number of each card
// Again, all cards at this point are "invalid"
const invalidCardCompanies = (cards) => {
    // Map based on an object
    let companies = cards.map((card) => {
        let company = {
            3: `Amex (American Express)`,
            4: `Visa`,
            5: `Mastercard`,
            6: `Discover`,
        };
        return company[card[0]] || `Company not found`;
        // https://stackoverflow.com/a/9004058/15986695
    });

    // "Remove duplicates"
    return [...new Set(companies)];
};

let invalidCards = findInvalidCards(batch);

console.log(invalidCardCompanies(invalidCards));
