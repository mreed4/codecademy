/*

    Code provided by the exercise/project

*/

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
    return newStrand.join('');
}



/*

    My object and code

*/

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutateDNA() {

            let mutateBase = {

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

            let i = Math.floor(Math.random() * 3) + 1;
            let j = Math.floor(Math.random() * this.dna.length);

            // https://tinyurl.com/4zkfdfw6
            String.prototype.replaceAt = function(index, replacement) {
                return this.substring(0, index) +
                    replacement +
                    this.substring(index + 1);
            }

            let originStrand = this.dna;
            let randOriginBase = originStrand[j];
            let randMutateBase = mutateBase[randOriginBase][i];
            let mutatedStrand = originStrand.replaceAt(j, randMutateBase);

            return mutatedStrand;

        },
        compareDNA(pAequor, message = false) {

            let specA_DNA = this.dna;
            let specB_DNA = pAequor.dna;
            let specA_Num = this.specimenNum;
            let specB_Num = pAequor.specimenNum;
            let commonBase = 0;
            let divisor = this.dna.length; // => 15

            /*
            This will loop through the strands and count each time the bases
            are at the same location in both strands, and have the same value.
            */
            for (let base in this.dna) {
                if (specA_DNA[base] === specB_DNA[base]) {
                    commonBase += 1;
                }
            }

            let percentSimilar = ((commonBase / divisor) * 100) //.toFixed(2);

            if (message) {

                percentSimilar = +percentSimilar;

                let s1 = `Spec. ${specA_Num} and Spec. ${specB_Num} have `;
                let s2 = `${percentSimilar}% commonality in their DNA`;
                let message = s1 + s2;

                return message;

            } else {

                return +percentSimilar; // => n

            }

        },
        willLikelySurvive(message = false) {

            let strandCG = this.dna.replace(/A|T/g, '');
            let countCG = strandCG.length;
            let percentCG = Math.round((countCG / this.dna.length) * 100);
            let survives = percentCG >= 60;

            if (message) {

                let str1 = `${this.specimenNum} has a ${percentCG}% chance of `
                let str2 = `survival`;
                return str1 + str2;

            } else {

                return survives; // => true || false

            }

        },
        complementDNA() {

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

// Create the pAequor to test against in compareDNA()
let strand2 = mockUpStrand();
let pAequor2 = pAequorFactory(0, strand2);

let pAequorBatch = [];

while (pAequorBatch.length < 30) {

    let n = 1;

    let pAequor = pAequorFactory(n, mockUpStrand());

    if (pAequor.willLikelySurvive()) {
        pAequorBatch.push(
            [
                pAequor.specimenNum,
                pAequor.dna,
                pAequor.willLikelySurvive()
            ]);
        n++;
    };
}

console.log(pAequorBatch);



/*

    Data manipulation - NOT PART OF THE EXERCISE/PROJECT

*/

const pAequorSorter = (sortBy) => {

    let surv = pAequorBatch[0].indexOf();

    let byNone = pAequorBatch;
    let byCommonality = pAequorBatch.sort((a, b) => {
        return +b[3].replace(/[^0-99]/g, '') - +a[3].replace(/[^0-99]/g, '');
    });
    /*
    let bySurvivability = pAequorBatch.sort((a, b) => {
        return +b[4].replace(/[^0-99]/g, '') - +a[4].replace(/[^0-99]/g, '');
    });
    */

    let sortMethod = {
        // 'survival': bySurvivability,
        'none': byNone,
        'commonality': byCommonality
    }

    return sortMethod[sortBy];

}