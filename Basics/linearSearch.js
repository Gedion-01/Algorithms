const prompt = require("prompt-sync")({ sigint: true });

// Linear search
// Time complexity of linear search is O(n) as every element in the array is compared only once,
// best case complexity is O(1) where the element is found at the first index.

numbers = [20, 500, 10, 5, 100, 1, 50]
// strings = ["abebe", "chala", "abel", "chaltu", "john", "tom"]
const persons = [
    {name: "Chala", number: "0982332123"},
    {name: "Abebe", number: "0913202128"},
    {name: "Chaltu", number: "0963272122"},
    {name: "John", number: "094282121"},
]

// for searching numbers
function linearSearch(arr) {
    const input = parseInt(prompt("Number: "))
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == input) {
            console.log("Found");
            return 0
        }
    }
    console.log("Not Found")
}

// for searching string
function linearSearchString(arr) {
    const input = prompt("Name: ")
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == input) {
            console.log(`Found ${arr[i].number}`)
            return 0
        }
    }
    console.log("Not Found")
}

// linearSearch(numbers)
linearSearchString(persons)