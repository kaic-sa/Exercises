// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (num, arr) => {
        return {
            specimeNum: num,
            dna: arr,
            mutate() {
                let y = returnRandBase();
                let x = Math.floor(Math.random() * 14)
                while (arr[x] === y) {
                    y = returnRandBase();
                }
                arr[x] = y;
            },
            compareDNA(pAequor) {
                console.log(pAequor)
                let count = 0;
                let cmpAeq = pAequor.dna;
                for (let i in this.dna) {
                    if (this.dna[i] === cmpAeq[i]) {
                        count++
                    }
                }
                console.log(count / 15 * 100 + '%')
            },
            willLikelySurvive() {
                let count = 0;
                for (let f in this.dna) {
                    if (this.dna[f] === 'C' || this.dna[f] === 'G') {
                        count++;
                    }
                }
                console.log(count / 15 * 100)
                if ((count / 15 * 100) >= 60) {
                    return true
                } else return false
            }


        }



    }
    //const new1 = pAequorFactory(1,mockUpStrand());
    //const new2 = pAequorFactory(2,mockUpStrand())
    //console.log(new1, new2)
    //new1.compareDNA(new2)
    //console.log(new1.willLikelySurvive())
const colony = [];
for (let i = 0; i < 3; i++) {
    colony.push(pAequorFactory(i, mockUpStrand()))
}
console.log(colony)
console.log('finished littasdadle')