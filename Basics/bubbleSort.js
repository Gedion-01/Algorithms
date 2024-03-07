let nums = [3, 9, 7, 0, 12, 1, 8, 2];
let sortedNums = [1, 2, 3, 4, 5, 6]


function bubbleSort(arr) {
    let isSwapped = false

    for(let i = 0; i < arr.length; i++) {
        isSwapped = false
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                isSwapped = true

                let temp = arr[j]
                // swap
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        if(!isSwapped) {
            break
        }
    }
}

bubbleSort(nums);

console.log("Sorted values: ", nums);