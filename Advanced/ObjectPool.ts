class ObjectPool<T> {
    private objects: T[];
    private availableObjects: T[];

    constructor(private createObject: () => T, private resetObject?: (obj: T) => void, initialSize: number = 10) {
        this.objects = [];
        this.availableObjects = [];

        for(let i = 0; i < initialSize; i++) {
            const newObj = this.createObject();
            this.objects.push(newObj);
            this.availableObjects.push(newObj);
        }
    }

    acquire(): T {
        if(this.availableObjects.length === 0) {
            const newObj = this.createObject();
            this.objects.push(newObj);
            this.availableObjects.push(newObj);
        }
        
        const obj = this.availableObjects.pop()!;
        if(this.resetObject) {
            this.resetObject(obj);
        }
        
        return obj;
    }

    release(obj: T) {

        this.availableObjects.push(obj);
        console.log("availableObjects length ",this.availableObjects.length);
    }
    
}

class PooledObject {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    reset(): void {
        // we will reset the object values in here
    }

    getValue(): number {
        return this.value;
    }
}

const pool = new ObjectPool<PooledObject>(
    () => new PooledObject(2),
    (obj) => obj.reset(),
    5                          
);
// acquiring objects from the pool
const obj1 = pool.acquire();
const obj2 = pool.acquire();
const obj3 = pool.acquire();
const obj4 = pool.acquire();
const obj5 = pool.acquire();

// release objects from the pool
pool.release(obj1);
pool.release(obj2);
pool.release(obj3);
// pool.release(obj4);
// pool.release(obj5);

console.log(obj5.getValue());