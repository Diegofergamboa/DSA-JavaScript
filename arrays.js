/* 
    There are two type of arrays, the static and dynamic. 
    The static one, is the kind of away in wich we set the length that the array will have
    and, in other hand the dynamic array like the clasical array in JS, is the type of array
    will add the double of possible slots of memory based in the actual length of the array.
*/

const ZERO = 0;
const ONE = 1;

class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item
        this.length += ONE
    }

    pop() {
        delete this.data[this.length - ONE]
        this.length -= ONE
    }

    unShift(item) {
        this.length += ONE;
        for (let i = this.length - ONE; i >= ZERO; i--) {
            if (i === ZERO) {
                this.data[i] = item;
            } else {
                this.data[i] = this.data[i - ONE];
            }
        }
    }

    shift() {
        delete this.data[ZERO];
        this.length -= ONE;
    }
}