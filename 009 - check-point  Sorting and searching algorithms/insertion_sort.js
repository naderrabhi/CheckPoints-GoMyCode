arr = [40,50,20,10,30];

for (let i = 1; i < arr.length; i++) {
    let X = arr[i];
    let j= i-1;
    while (j >= 0 && X < arr[j]) {
        arr[j+1] = arr[j];
            j = j - 1;
    }
    arr[j+1] = X;
}

console.log(arr);