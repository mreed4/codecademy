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

let strand2 = mockUpStrand();

const pAequorFactory = (n = 1, strand) => {
    return {
        specimenNum: n,
        dna: strand,
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

            if (message) {

                percentSimilar = +percentSimilar;

                let s1 = `=> Spec. ${specA_Num} and Spec. ${specB_Num} have `;
                let s2 = `${percentSimilar}% DNA in common.`
                let message = s1 + s2;

                return message;

            } else {

                return `${percentSimilar}%`;

            }

        },
        willLikelySurvive() {

            let strandCG = this.dna.replace(/A|T/g, '');
            let countCG = strandCG.length;
            let percentCG = Math.round((countCG / strand.length) * 100);
            let survives = percentCG >= 60;

            return `${survives} (${percentCG}%)`;

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

let pAequor2 = pAequorFactory(0, strand2);

// Data manipulation

let pAequorBatch = [];
let n = 1;
while (n <= 90) {

    let pAequor = pAequorFactory(n, mockUpStrand());

    n++;
    pAequorBatch.push(
        [
            pAequor.specimenNum,
            pAequor.dna,
            // pAequor.mutateDNA(),
            pAequor.compareDNA(pAequor2),
            pAequor.willLikelySurvive(),
            // pAequor.complementDNA()
        ]);
}

const pAequorSorter = (sortBy = 'none') => {

    let byNone = pAequorBatch;
    let bySurvivability = pAequorBatch.sort((a, b) => {
        return +b[2].replace(/[^0-99]/g, '') - +a[2].replace(/[^0-99]/g, '');
    });

    let sortMethod = {
        'survival': bySurvivability,
        'none': byNone,
    }

    return sortMethod[sortBy];

}

// console.log(pAequorBatch);

console.log(pAequorSorter('none'));