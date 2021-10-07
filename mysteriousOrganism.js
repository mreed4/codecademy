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
        compareDNA(pAequor, set = false) {

            let specA_DNA = this.dna; // This is the 'current' strand
            let specB_DNA = pAequor.dna; // This is the passed in strand

            // Specimen numbers
            let specA_Num = this.specimenNum; // => 1, 2, 3, ...
            let specB_Num = pAequor.specimenNum; // => 1, 2, 3, ...

            let commonBase = 0; // Initialize counter

            let divisor = this.dna.length; // => 15

            /*
            This will loop through the strands and count each time the bases
            are at the same location in both strands, and have the same value.
            i.e., if 'A' is at strand1[7], and at strand2[7], `commonBase` will
            increase by one. If 'A' is at strand1[7], but if 'G' is at 
            strand2[7], 'commonBase' will NOT increase by one.
            */
            for (let base in this.dna) {
                if (specA_DNA[base] === specB_DNA[base]) {
                    commonBase += 1;
                }
            }

            // Calculates the percentage they are similar
            // Typecasts to number from string
            let percentSimilar = ((commonBase / divisor) * 100).toFixed(2);

            /* 
            This conditional will either return an array of strings that (a) 
            look like numbers, (b) an array of numbers, or (c) a string
            */
            let uniformNum = true;
            if (set && uniformNum) {

                if (percentSimilar.length === 4) {
                    percentSimilar = '0' + percentSimilar;
                }

                return percentSimilar;

            } else if (set) {

                percentSimilar = +percentSimilar;

                return percentSimilar;

            } else {

                percentSimilar = +percentSimilar;

                let s1 = `=> Spec. ${specA_Num} and Spec. ${specB_Num} have `;
                let s2 = `${percentSimilar}% DNA in common.`
                let message = s1 + s2;

                return message;
            }

        },
        willLikelySurvive() {

            let strand = this.dna;
            let strandCG = strand.replace(/A|T/g, '');
            let countCG = strandCG.length;
            let percentCG = Math.round((countCG / strand.length) * 100);
            let survival = percentCG > 60;

            return survival;

        },
        complementStrand() {

            let strand = this.dna;

            let complementBases = {
                'A': 'T',
                'T': 'A',
                'C': 'G',
                'G': 'C'
            };

            let swapArr = [];

            for (let i = 0; i < strand.length; i++) {
                swapArr.push(complementBases[strand[i]]);
            }

            return swapArr.join('');

        }
    }
}

let pAequor1 = pAequorFactory(1, strand1);
let pAequor2 = pAequorFactory(2, strand2);
// console.log(pAequor1.compareDNA(pAequor2, false));

let arr = []
for (let i = 0; i <= 30; i++) {
    let pAequor = pAequorFactory(i, mockUpStrand());
    arr.push(
        [
            pAequor.specimenNum,
            pAequor.dna,
            // pAequor.mutate(),
            pAequor.willLikelySurvive(),
            pAequor.complementStrand()
        ]);
}
console.log(arr);