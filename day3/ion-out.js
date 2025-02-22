function ionOut(str) {
    var rag = /(\w*t)ion/g;
    var result = []
    var match
    while (match = rag.exec(str)) {
        result.push(match[1])
    }
    return result
}