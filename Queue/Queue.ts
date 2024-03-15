type QNode<T> = {
    value: T,
    next?: QNode<T>
}

class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;        
    }

    enqueue(item: T): T | undefined {
        const node = {value: item} as QNode<T>
        this.length++;
        if(!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    dequeue(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;
        
        const head = this.head;
        this.head = this.head.next;

        // free
        head.next = undefined;

        if(this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

const q1 = new Queue<number>();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);

// q1.dequeue();
// q1.dequeue();
// q1.dequeue();

console.log(q1.peek())