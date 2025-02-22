var vowels = /([aeiouAEIOU])/

function vowelDots(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(vowels)) {
            result += str[i] + ".";
        } else {
            result += str[i];
        }
    }
    return result;
}