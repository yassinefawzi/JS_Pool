function letterSpaceNumber(str) {
    var reg = /([a-zA-Z]) (\d)(?!\w)/g
    
    var result = []
    var match;
    while ((match = reg.exec(str)) !== null) {
        result.push(match[1]+ ' ' + match[2]);
    }
    return result;
}