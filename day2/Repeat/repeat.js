function Repeat(str, num) {
    if (num > 1) {
        return str + Repeat((str), num-1)
    }
    return str
}

/* function Repeat(str, num) {
    var ret = ""
    for (num > 1; num--;) {
        ret += str
    }
    return ret
} */