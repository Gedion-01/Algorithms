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
        } else if(index === length) {
            this.append(item);
            return;
        } else if(index === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let curr = this.head;

        for(let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        curr = curr as Node1<T>;
        const node = {value: item} as Node1<T>;

        node.next = curr;
        node.prev = curr.prev;

        if(curr.prev) {
            curr.prev.next = node;
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
            return;
        }

        this.length--;

        if(this.length === 0) {
            this.head = this.tail = undefined;
            return;
        }

        if(curr.prev) {
            curr.prev = curr.next;
        }
        if(curr.next) {
            curr.next = curr.prev;
        }
    }
}