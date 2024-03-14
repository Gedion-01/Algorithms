#include <iostream>
#include <cmath>

using namespace std;

// bruteforce method
// int two_crystal_balls(int bldg[], int length)
// {
//     for(int i = 0; i < length; i++)
//     {
//         if(bldg[i]) {
//             return i;
//         }
//     }
// }

// optimized way
int two_crystal_balls(bool breaks[], int length)
{
    int jmpAmount = sqrt(length);
    int i = jmpAmount;
    for(; i < length; i += jmpAmount)
    {
        if(breaks[i])
        {
            break;
        }
    }

    i -= jmpAmount;
    
    for(int j = 0; j < jmpAmount + 1 && i < length; ++j, ++i)
    {
        if(breaks[i])
        {
            return i;
        }
    }
    return -1;
}
int main()
{
    bool buildingFloor[41] = {false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, true, true, true, true, 
    true, true, true, true, true, true, true};

    bool buidingFloor2[6] = {false, false, false, false, true, true};
    
    int floor = two_crystal_balls(buidingFloor2, 6);
    cout << floor << endl;

    return 0;
}