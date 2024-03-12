#include <iostream>

using namespace std;

int binary_search(int arr[], int l, int h, int search_value);

int main()
{
    int nums[] = {1, 2, 3, 4, 10, 20, 22};
    
    int index_of_value = binary_search(nums, 0, 7, 10);
    cout << "index for the searched value: " << index_of_value << endl;

    return 0;
}

int binary_search(int arr[], int low, int high, int search_value)
{
    do
    {
        // remember high is Exclusive & low is Inclusive
        int mid = low + (high - low) / 2;
        if(arr[mid] == search_value)
        {
            cout << "Found" << endl;
            return mid;
        }
        else if(search_value > arr[mid])
        {
            low = mid + 1;
        }
        else 
        {
            high = mid;
        }
    } while (low < high);

    cout << "Not found" << endl;
    return -1;
}