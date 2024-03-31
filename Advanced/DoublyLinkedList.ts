type Node1<T> = {
    value: T;
    prev?: Node1<T>;
    next?: Node1<T>;
}

class DoublyLinkedList<T> {
    public length: number;
    private head?: Node1<T>;
    private tail?: Node1<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item : T): void {
        const node = {value: item} as Node1<T>;
        this.length++;

        if(!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, index: number) {
        if(index > this.length) {
            throw new Error("You can't do that");
        } else if(index === this.length) {
            this.append(item);
            return;
        } else if(index === 0) {
            this.prepend(item);
            return;
        }
        this.length++;

        const curr = this.getAt(index) as Node1<T>;
        const node = {value: item} as Node1<T>;

        node.next = curr;
        node.prev = curr.prev;

        if(node.prev) {
            node.prev.next = node;
        }
        curr.prev = node;

    }
    append(item: T): void {
        this.length++;
        const node = {value: item} as Node1<T>;
        
        if(!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for(let i = 0; curr && i < this.length; i++) {
            if(curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if(!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }
    get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }
    removeAt(index: number): T | undefined {
        const node = this.getAt(index);
        if(!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private getAt(index: number): Node1<T> | undefined {
        let curr = this.head;
        for(let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }
    private removeNode(node: Node1<T>): T | undefined {
        this.length--;

        if(this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if(node.prev) {
            node.prev.next = node.next;
        }
        if(node.next) {
            node.next.prev = node.prev;
        }

        if(node === this.head) {
            this.head = node.next;
        }
        if(node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
}

const dList = new DoublyLinkedList<number>()

dList.append(1);
dList.append(2);
dList.append(4);
dList.prepend(0);

dList.insertAt(5, 4);
dList.insertAt(-1, 0);
dList.insertAt(3, 4);

// before
for(let i = 0; i < dList.length; i++) {
    console.log(dList.get(i));
}

console.log("Removed items:");
console.log(dList.remove(-1));
console.log(dList.remove(10));
dList.remove(0);
dList.remove(5);

dList.removeAt(3);
// after
console.log("\nAfter removal");
for(let i = 0; i < dList.length; i++) {
    console.log(dList.get(i));
}