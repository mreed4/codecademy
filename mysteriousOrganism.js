// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand.join('');
}

let test = mockUpStrand();
console.log(test);

// Begin code
const pAequorFactory = (n = 1, base) => {
    return {
        specimenNum: n,
        dna: base,
        mutate() {
            let randBase = Math.floor(Math.random() * base.length);
            let toChange = this.dna[randBase];
            /*
            for (let i = 0; i < base.length; i++) {
                let toChange = this.dna[i];

                let b = Math.floor(Math.random() * 3)
                let swapBase = {
                    a: {
                        1: 'T',
                        2: 'C',
                        3: 'G'
                    },
                    t: {
                        1: 'A',
                        2: 'C',
                        3: 'G'
                    },
                    c: {
                        1: 'A',
                        2: 'T',
                        3: 'G'
                    },
                    g: {
                        1: 'A',
                        2: 'T',
                        3: 'C'
                    }
                }
                toChange = swapBase[toChange][b];

            }
            */
            return `${toChange} i is ${randBase} `;
        }
    }
}

console.log(pAequorFactory(1, test).mutate());