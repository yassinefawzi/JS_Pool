function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(str) {
    return str.join('');
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join('');
}

function strToArr(str) {
    return [...str];
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
	return Object.fromEntries(map);
}
function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return Object.fromEntries(arr.map(((value, index) => [index, value])));
}

function strToObj(str) {
    return Object.fromEntries(str.split('').map((value, index) => [index, value]));
}

function superTypeOf(value) {
	if (Array.isArray(value)) return "Array";
	if (value === null) return "null";
	if (value instanceof Map) return "Map";
	if (value instanceof Set) return "Set";
	if (typeof value === "object"  ) return "Object";
	if (typeof value === "undefined") return "Undefined";

	value = typeof value
	return value.charAt(0).toUpperCase() + value.slice(1);
}