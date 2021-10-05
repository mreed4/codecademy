// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
}

// Begin code
const pAequorFactory = (n = 1, strand) => {
    return {
        specimenNum: n,
        dna: strand,
        mutate() {

            let randNum = Math.floor(Math.random() * strand.length);
            let oldBase = this.dna[randNum];

            let i = Math.floor(Math.random() * 3) + 1;
            let swapBase = {

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

            let newBase = swapBase[oldBase][i];
            this.dna[randNum] = newBase;

            return strand; // This is the mutated strand

        }
    }
}

let test = pAequorFactory(1, mockUpStrand()).mutate();

console.log(test);