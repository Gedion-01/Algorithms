class ObjectPool<T> {
    private objects: T[];
    private availableObjects: T[];

    constructor(private createObject: () => T, private resetObjects?: (obj: T) => void, initialSize: number = 10) {
        this.objects = [];
        this.availableObjects = [];

        for(let i = 0; i < initialSize; i++) {
            const newObj = this.createObject();
            this.objects.push(newObj);
            this.availableObjects.push(newObj);
        }
        console.log(this.objects, this.availableObjects)
    }
    
}

class PooledObject {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    reset() {
        // Reset object state if needed
    }

    getValue(): number {
        return this.value;
    }
}

const pool = new ObjectPool<PooledObject>(
    () => new PooledObject(0), // Function to create new objects
    (obj) => obj.reset(),      // Function to reset objects when released back to pool
    5                          // Initial size of the pool
);