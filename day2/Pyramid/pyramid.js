function pyramid(str, num) {
    var result = ""
    var spaces = ""
    var line = ""

    for (var i = 1; i <= num; i++) {
        spaces = ' '.repeat(num-i)
        line = str.repeat(i * 2 -1)
        result += spaces + line + (i < num ? '\n' : '')
    }
    return result;
}