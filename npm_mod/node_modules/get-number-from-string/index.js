exports.GetNumber = function (str) {
    var num = "0";
    for (var i in str) {
        if (str[i] == "0" || parseInt(str[i]))
            num += str[i]
    }

    return parseInt(num);
}