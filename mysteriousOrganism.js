/*

    Code provided by the exercise/project

*/

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

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
        compareDNA(comparison, message = false) {

            let specA_DNA = this.dna;
            let specB_DNA = comparison.dna;
            let specA_Num = this.specimenNum;
            let specB_Num = comparison.specimenNum;
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

            let percentSimilar = ((commonBase / divisor) * 100).toFixed(2);

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
        willLikelySurvive() {

            let strandCG = this.dna.replace(/A|T/g, '');
            let countCG = strandCG.length;
            let percentCG = Math.round((countCG / this.dna.length) * 100);
            let survives = percentCG >= 60;

            return survives;

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



let pAequor0 = pAequorFactory(0, mockUpStrand());

// Generate a list to filter 30 survivors from
const getBatch = num => {

    let pAequorBatch = [];
    let i = 1;
    while (i <= num) {

        let pAequor = pAequorFactory(i, mockUpStrand());

        pAequorBatch.push(
            [
                pAequor.specimenNum,
                pAequor.willLikelySurvive(),
                pAequor.dna,
                pAequor0.dna,
                pAequor.compareDNA(pAequor0),
                // pAequor.mutateDNA(),
                // pAequor.complementDNA()
            ]);

        i++;
    }

    return pAequorBatch;

}

const getSurvivors = (arr, count) => {

    let survivors = arr
        .filter(n => n[1] === true)
        .slice(0, count);

    return survivors;

}

const sortSurvivors = arr => {

    let sorted = arr.sort((a, b) => {
        return b[4] - a[4];
    })

    return sorted;

}

const mostRelated = arr => {

    let most = arr.slice(0, 1)[0];

    let num = most[0];
    let strandA = most[2];
    let strandB = most[3];
    let percent = most[4];

    let s1 = `At ${percent}% common DNA, Specimen ${num} is most similar to the`
    let s2 = ` comparison Specimen.\n[Specimen ${num}: ${strandA} => `
    let s3 = `Comparison: ${strandB}]`

    let message = s1 + s2 + s3;

    return message;

}

const finalResults = () => {

    let batch = getBatch(150);
    let thirtySurvivors = getSurvivors(batch, 30);
    let sortedSurvivors = sortSurvivors(thirtySurvivors);
    let common = mostRelated(sortedSurvivors);

    console.log(`

                    S U R V I V O R S   
    `);
    console.log(thirtySurvivors);

    console.log(`

                S U R V I V O R S (Sorted)
    `);
    console.log(sortedSurvivors);

    console.log(`

                M O S T _ C O M M O N    
    `);
    console.log(`${common}\n`);

    console.log(`

                > E N D _ P R O G R A M    
    `);
}

finalResults();