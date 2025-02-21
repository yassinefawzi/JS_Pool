function reverse(str) {
    var result
    var i = str.length
    if (Array.isArray(str)) {
        result = []
        for (i > 0; i--;) {
            result.push(str[i])
        }
        return result;
    }
    result = ""
    for (i > 0; i--;) {
        result += str[i]
    }
    return result;
}