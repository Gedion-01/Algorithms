type SNode<T> = {
    value: T,
    prev?: SNode<T>
}

class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as SNode<T>;
        this.length++;

        if(!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        
        if(this.length === 0) {
            const head = this.head;
            this.head = undefined;

            return head?.value;
        }
        const head = this.head as SNode<T>;
        this.head = head.prev;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

const s1 = new Stack<number>();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);

console.log("Stack size:", s1.length)

s1.pop();
s1.pop();
s1.pop();
console.log("the last poped item:", s1.pop());

console.log("Stack size:", s1.length)

console.log("head ->", s1.peek());