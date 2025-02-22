function chunk(arr, size) {
    var result = []
    var holder = []
    var j = 0

    for (var i = 0; i < arr.length; ) {
        for (; (j < size) && (j + i < arr.length); j++) {
            holder.push(arr[i + j])
        }
        result.push(holder)
        holder = []
        i += j
        j = 0
    }
    return result;
}