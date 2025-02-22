function split(str, sep) {
    var result = []
    var holder = ""

    for (var i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            result.push(holder)
            holder = ""
        } else {
            holder += str[i]
        }
    }
    result.push(holder)
    return result;
}

function join(arr, sep) {
    var result = ""

    for (var i = 0; i < arr.length; i++) {
        result += (arr[i] + sep)
    }
    return result
}