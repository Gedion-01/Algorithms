function partition(array: number[], start: number, end: number): number {
    const pivot = array[end];
    
    let i = start - 1;
    for(let j = start; j < end; j++) {
        if(array[j] <= pivot) {
            i++;
            
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;
    arr[end] = arr[i];
    arr[i] = pivot;
    return i;
}

function quickSort(array: number[], start: number, end: number): void {
    
    if(start >= end) {
        return;
    }
    const pivot = partition(array, start, end);
    console.log(pivot);
    console.log(arr);
    quickSort(array, start, pivot -1);
    quickSort(array, pivot + 1, end);
    
    
}

const arr = [8, 2, 5, 3, 9, 4, 7, 6, 1];
// const arr2 = [7, 6, 5, 4, 3, 2, 1];

quickSort(arr, 0, arr.length - 1);
console.log(arr)

// quickSort(arr2, 0, arr2.length - 1);
// console.log(arr2);

