#include <iostream>

using namespace std;

void merge_sort(int arr[], int length);
void merge_sort_recursion(int arr[], int l, int r);
void merge_sorted_arrays(int a[], int l, int m, int r);
int main()
{
    int arr[] = {4, 3, 2, 1, 0};
    cout << 1 / 2 << endl;
    merge_sort(arr, 5);
    return 0;
}

void merge_sort(int arr[], int length)
{
    merge_sort_recursion(arr, 0, length - 1);
}

void merge_sort_recursion(int arr[], int l, int r)
{
    int mid = (l + r) / 2;
    
    cout <<"mid" << mid << ' ';
    if( l < r) 
    {
        //cout << l << " < " << r << endl;
        //merge_sort_recursion(arr, l, mid);
        merge_sort_recursion(arr, mid + 1, r);
        merge_sorted_arrays(arr, l, mid, r);
    }
}
void merge_sorted_arrays(int a[], int l, int m, int r)
{
    //cout << endl << m << " - " << l << " + 1"  << endl;
    int left_length = m - l + 1;
    //cout << "left length " << left_length << endl;
     cout << endl << "right" << endl;
    cout << r << " - " << m << endl;
    int right_length = r - m;
    cout << "right length " << right_length << endl;
    int temp_left[left_length];
    int temp_right[right_length];

    for(int i = 0; i < left_length; i++)
    {
        temp_left[i] = a[l + i];
        //cout << temp_left[i] << ' ';
    }
    cout << endl << "right" << endl;
    for(int i = 0; i < right_length; i++)
    {
        temp_right[i] = a[m + 1 + i];
        cout << temp_right[i] << ' ';
    }
}