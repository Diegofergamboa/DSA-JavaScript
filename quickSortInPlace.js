function quickSort(arr, izquierda = 0, derecha = arr.length - 1) {
    if (izquierda < derecha) {
        let indicePivote = partition(arr, izquierda, derecha);
        console.log(`Pivote: ${arr[indicePivote]}, Array:`, arr);
        quickSort(arr, izquierda, indicePivote - 1);
        quickSort(arr, indicePivote + 1, derecha);
    }
    return arr;
}

function partition (array, left, right) {
    let i = left
    const pivot = array[right]

    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
        }
    }
    
    [array[i], array[right]] = [array[right], array[i]];
    return i;
}

console.log(quickSort([8, 3, 1, 7, 0, 10, 2])); 