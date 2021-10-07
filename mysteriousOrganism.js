// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

/*
Returns a single stand of DNA containing 15 bases (again, each chosen)
at random
*/
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
}

let strand1 = mockUpStrand();
let strand2 = mockUpStrand();

const pAequorFactory = (n = 1, strand) => {
    return {
        specimenNum: n,
        dna: strand.join(''),
        mutate() {

            let swapBase = { // See Line 57 comments

                A: {
                    1: 'T',
                    2: 'C',
                    3: 'G'
                },
                T: {
                    1: 'A',
                    2: 'C',
                    3: 'G'
                },
                C: {
                    1: 'A',
                    2: 'T',
                    3: 'G'
                },
                G: {
                    1: 'A',
                    2: 'T',
                    3: 'C'
                }

            }

            // Random base from given strand
            // i.e. 'A', 'T', 'C', or 'G'
            let i = Math.floor(Math.random() * strand.length);
            let oldBase = this.dna[i];

            /*
            The randomly chosen base from Line 55 is used here in conjunction
            with the 'swapBase' object farther above--i.e. if Line 54 is 'A',
            'A' turns into either 'T', 'C', or 'G' (but not 'A' again). Or, 
            for example, if Line 55 is 'C', 'C' turns into either 'A', 'T', 
            or 'G' (but not 'C' again). What the randomly given base turns 
            into is also random.
            */
            let j = Math.floor(Math.random() * 3) + 1;
            let newBase = swapBase[oldBase][j];

            /*
            Replace random oldBase (e.g. 'A') in given strand with random newBase (e.g. 'T', 'C', or 'G')
            */
            this.dna[i] = newBase;

            return strand.join(''); // This is the mutated strand

        },
        compareDNA(pAequor) {

            let specA_DNA = this.dna;
            let specB_DNA = pAequor.dna;
            let specA_Num = this.specimenNum; // => 1, 2, 3, ...
            let specB_Num = pAequor.specimenNum; // => 1, 2, 3, ...
            let commonBase = 0; // Initialize counter
            let divisor = this.dna.length; // => 15

            /*
            This will loop through the stands and count each time the bases
            are at the same location with the same value
            */
            for (let base in this.dna) {
                if (specA_DNA[base] === specB_DNA[base]) {
                    commonBase += 1;
                }
            }

            let percentSimilar = +((commonBase / divisor) * 100).toFixed(2);

            /*
            let tenths = percentSimilar[percentSimilar.length - 2];
            let hundredths = percentSimilar[percentSimilar.length - 1];
            let prettyNum = true;

            /*
            IF ENABLED, this will convert what _should be_ an integer to an
            integer. For example, this will turn '40.00' to '40'. It will also
            add a leading zero to a number that is less than 10. The values are
            typecasted into numbers.
            /*
            /*
            if (prettyNum) {
                if (tenths === '0' && hundredths === '0') {
                    percentSimilar = +percentSimilar.slice(0, 2);
                }
            } else if (percentSimilar.length === 4) {
                percentSimilar = '0' + percentSimilar;
            }
            */

            let string1 = `Spec. ${specA_Num} and Spec. ${specB_Num} have `;
            let string2 = `${percentSimilar}% DNA in common.`

            console.log(string1 + string2);
            // return percentSimilar;
        },
        willLikelySurvive() {

        }
    }
}

let pAequor1 = pAequorFactory(1, strand1);
let pAequor2 = pAequorFactory(2, strand2);
// console.log(`Mutator: ${pAequor1.dna} mutated to ${pAequor1.mutate()}`);
// console.log(`Mutator: ${pAequor2.dna} mutated to ${pAequor2.mutate()}`);

pAequor1.compareDNA(pAequor2);

/*
let arr = [];

for (let i = 0; i <= 16; i++) {
    let pAequor1 = pAequorFactory(1, mockUpStrand());
    let pAequor2 = pAequorFactory(2, mockUpStrand());
    arr.push(pAequor1.compareDNA(pAequor2));
}

console.log(arr);
*/