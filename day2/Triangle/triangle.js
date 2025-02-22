function triangle(str, num) {
    var result = ""

    for (var i = 1; i <= num; i++) {
        result += str.repeat(i) + (i < num ? '/n' : '')
    }
    return result;
}