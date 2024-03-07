let nums = [5, 4, 9, 3, 6, 2, 0, 1]
console.log(nums);
let large;
let small;

// the sort algorithm
for(let i = 0; i < nums.length; i++) {
    for(let j =  i + 1; j < nums.length; j++) {
        if(nums[j] < nums[i]) {
            let small = nums[j]
            let large = nums[i]
            // swap
            nums[i] = small
            nums[j] = large
        }
    }
}

console.log(nums);