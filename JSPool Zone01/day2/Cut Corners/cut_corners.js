function modulo(a, b) {
	if (b === 0) {
		return ;
	}
	sign = 1

	if (!(a > 0 && b > 0) && !(a < 0 && b < 0)) {
		sign = -1
	}
	a = Math.abs(a)
	b = Math.abs(b)
	while(a >= b) {
		a -= b
	}
	return a * sign;
}

function round(num) {
    comp = modulo(num, 1)
    if (comp >= 0.5) {
        return (num + 1) - comp;
    }
    return (num + -1) - comp;
}

function ceil(num) {
    comp = modulo(num, 1)
    if (comp === 0) {
        return num;
    }
    if (num < 0) {
        return num - comp;
    }
    return (num + 1) - comp;
}

function floor(num) {
    comp = modulo(num, 1)
    if (comp === 0) {
        return num;
    }
    if (num < 0) {
        num -= comp
        return (num - 1);
    }
    return (num) - comp;
}

function trunc(num) {
    comp = modulo(num, 1)
    return (num) - comp;
}