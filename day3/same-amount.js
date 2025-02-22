function sameAmount(str, reg, reg1) {
    reg = new RegExp(reg, 'g');
    reg1 = new RegExp(reg1, 'g');
    var arr_reg = str.match(reg);
    var arr_reg1 = str.match(reg1);

    arr_reg = arr_reg ? arr_reg.length : 0;
    arr_reg1 = arr_reg1 ? arr_reg1.length : 0;
    return arr_reg === arr_reg1;
}
