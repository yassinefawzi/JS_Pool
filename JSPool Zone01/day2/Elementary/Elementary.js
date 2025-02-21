function sameSign(num1, num2) {
    if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) || (num1 == 0 && num2 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

function multiply(a, b) {
	var result = 0
	var sign = 1

	if (a == 0 || b == 0) {
		return 0;
	}
	if (!sameSign(a, b)) {
		sign = -1
	}
	a = Math.abs(a)
	b = Math.abs(b)
	for (;b > 0; b--) {
		result += a	
	}
	return sign < 0 ? -result : result;
}

function divide(a, b) {
	if (b === 0) {
		return ;
	}
	var result = 0
	var sign = 1

	if (!sameSign(a, b)) {
		sign = -1
	}
	a = Math.abs(a)
	b = Math.abs(b)
	while(a >= b) {
		a -= b
		result++
	}
	return result * sign;
}

function modulo(a, b) {
	if (b === 0) {
		return ;
	}
	sign = 1

	if (!sameSign(a, b)) {
		sign = -1
	}
	a = Math.abs(a)
	b = Math.abs(b)
	while(a >= b) {
		a -= b
	}
	return a * sign;
}