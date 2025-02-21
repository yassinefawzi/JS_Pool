function slice(str, start, finish = str.length) {
    if (start > str.length) {
        if (Array.isArray(str)) {
            return [];
        }
        return "";
    }
    if (finish > str.length) {
        finish = str.length
    } else if (finish < 0 ){
        finish = str.length + finish
    }
    if (start < 0) {
        if (Math.abs(start) > str.length) {
            start = 0
        } else {
            start = str.length + start
        }
    }
    var result
    if (Array.isArray(str)) {
        result = []
        for (; start < finish; start++) {
            result.push(str[start])
        }
    } else {
        result = ""
        for (; start < finish; start++) {
            result += str[start]
        }
    }
    return result;
}