/*let teste = 'carros'
teste = teste.split('')
console.log(teste)
let teste1 = teste.map(ele => ele.charCodeAt() + 1)
let teste2 = teste1.map(ele => String.fromCharCode(ele).toUpperCase())
console.log(teste2)

let teste3 = teste2.map(ele => ele.toLowerCase())
let teste4 = teste3.map(ele => ele.charCodeAt() - 1)
let teste5 = teste4.map(ele => String.fromCharCode(ele))
console.log(teste5)*/

class ShiftCipher {
    constructor(num) {
        this.toShift = num
    }
    encrypt(string) {
        let str = Array.from(string)
        str = str.map(ele => {
            let ele1 = ele.charCodeAt()
            if (ele1 != 32 && ele1 >= 97 && ele1 <= 122) {
                if (ele1 + this.toShift > 122) {
                    return 97 + (ele1 + this.toShift) - 123
                } else return ele1 + this.toShift;
            } else return ele1
        })
        str = str.map(ele => String.fromCharCode(ele).toUpperCase())
        console.log(str)
    }
    decrypt(string) {
        let str = Array.from(string)
        console.log(str)
        str = str.map(ele => {
            let ele1 = ele.charCodeAt()
            if (ele1 != 32 && ele1 >= 97 && ele1 <= 122) {
                if (ele1 - this.toShift < 97) {
                    return 122 - (ele1 - this.toShift)
                } else return ele1 - this.toShift
            } else return ele1
        })
        console.log(str)

    }

}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!')
cipher.decrypt('K <3 OA RWRRA');