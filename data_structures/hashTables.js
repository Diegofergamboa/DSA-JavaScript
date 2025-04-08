class HasTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash
    }

    set(key, value) {
        let address = this.hashMethod(key);
        console.log(address);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data
    }

    get(key) {
        let address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        let address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    currentBucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(i, this.data[i]);
            }
        }
    }
}

const myHashTable = new HasTable(10);
myHashTable.set('Key', 'Value');
console.log(myHashTable);
myHashTable.set('Primer', 'Value');
console.log(myHashTable);
myHashTable.set('Segundo', 'Value');
console.log(myHashTable);