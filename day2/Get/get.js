function get(src, path) {
    var keys = path.split(".")
    var result = src

    for (var key of keys) {
        if (result.hasOwnProperty(key)) {
            result = result[key]
        } else {
            return;
        }
    }
    return result;
}