function rotate(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
console.log(rotate(['a', 'b', 'c'])); // Output: ['b', 'c', 'a']
