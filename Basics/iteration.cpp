#include <iostream>

using namespace std;

void draw(int n);

int main() {
    int height;
    cout << "Height: ";
    cin >> height;

    draw(height);
    return 0;
}

void draw(int n) {
    if(n <= 0) {
        return;
    }
    draw(n - 1);
    for(int i = 0; i < n; i++) {
         cout << "#";
    }
    cout << endl;
}