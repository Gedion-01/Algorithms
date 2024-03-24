function partition(array: number[], start: number, end: number): number {
    const pivot = array[end];
    
    let i = start - 1;
    for(let j = start; j <= end; j++) {
        if(array[j] < pivot) {
            i++;
            
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;
    const temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    return i;
}

function quickSort(array: number[], start: number, end: number): void {
    const pivot = partition(array, start, end);
    console.log(pivot);
    console.log(arr);
    if(start < end) {
        quickSort(array, start, pivot -1);
        quickSort(array, pivot + 1, end);
    }
    
    
}

const arr = [8, 7, 6, 4, 5];
console.log('length ', arr.length);

quickSort(arr, 0, arr.length - 1);

console.log(arr)