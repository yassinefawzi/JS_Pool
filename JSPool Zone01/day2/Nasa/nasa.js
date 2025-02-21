function nasa(nbr) {
    var result = ""
    var i = 1

    while (i <= nbr) {
        if ((i % 3 == 0) && (i % 5 == 0) ){
            result += "NASA"
        } else if (i % 3 == 0) {
            result += "NA"
        } else if (i % 5 == 0) {
            result += "SA"
        } else {
            result += i
        }
        result += " "
        i++
    }
    return result;
}