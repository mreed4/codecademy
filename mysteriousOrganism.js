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

const pAequorFactory = (n = 1, strand) => {
    return {
        specimenNum: n,
        dna: strand,
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

            return strand; // This is the mutated strand

        },
        compareDNA() {

        }
    }
}


let pAequor1 = pAequorFactory(1, strand1);
console.log(pAequor1);