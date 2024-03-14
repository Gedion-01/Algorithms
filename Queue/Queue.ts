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
        length = 0;
    }

    enqueue(item: T) {

    }
    dequeue(): T | undefined {
        if(!this.head) {
            return undefined;
        }
        this.length--;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}