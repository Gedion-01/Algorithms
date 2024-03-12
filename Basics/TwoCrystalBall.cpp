#include <iostream>

using namespace std;
void bruteforce_two_crystal_ball(int bldg[], int length, int max_floor)
{
    for(int i = 0; i < length; i++)
    {
        if(max_floor == i) {
            cout << "Max floor: " << i - 1 << endl;
            return;
        }
    }
}
int main()
{
    int buildingFloor[6] = {1, 2, 3, 4, 5, 6};
    
    bruteforce_two_crystal_ball(buildingFloor, 6, 3);
    return 0;
}
// function two_crystal_balls(breaks) {
//   const jmpAmount = Math.floor(Math.sqrt(breaks.length));
//     console.log(breaks.length)
//     console.log(jmpAmount)
//   let i = jmpAmount;
//   for (; i < breaks.length; i += jmpAmount) {
//     if (breaks[i]) {
//       break;
//     }
//   }
//   console.log(i, "i");

//   i -= jmpAmount;
//   console.log(i, "i");

//   for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
//     if (breaks[i]) {
//       console.log(i, "i");
//       break;
//     }
//   }
//   return -1;
// }

// console.log(two_crystal_balls([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true]))
// for(let i = 0; i < 42; i += 6) {
//     console.log(i)
// }