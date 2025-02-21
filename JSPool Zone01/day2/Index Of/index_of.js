function indexOf(arr, value, index = 0) {
    if (index < 0 || index > arr.length) {
        return -1;
    }
    while (index < arr.length) {
        if (arr[index] === value) {
            return index;
        }
        index++
    }
    return -1;
}

function lastIndexOf(arr, value, index = 0) {
    if (index < 0 || index > arr.length) {
        return -1;
    }
    var result = -1
    for (; index < arr.length; index++) {
        if (arr[index] === value) {
            result = index
        }
    }
    return result;
}

function includes(arr, value, index = 0) {
    return indexOf(arr, value, index) >= 0 ? true : false;
}