var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Chunk
var chunk = function (arr, n) {
    var chArr = [];
    var spArr = __spreadArrays(arr); // Array Destructor
    var size = Math.ceil((spArr.length) / n);
    for (var i = 0; i < size; i++) {
        chArr.push(spArr.splice(0, n));
    }
    return chArr;
};
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
// Sum
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var s = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        s += i;
    }
    return s;
};
console.log(sum(1, 2, 3, 4, 5));
