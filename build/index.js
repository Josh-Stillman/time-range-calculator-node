"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hello');
exports.parseSingleRange = function (input) {
    var _a = input.split('-'), begin = _a[0], end = _a[1];
    var beginHour = getHour(begin);
    var endHour = getHour(end);
    var normalizedEndHour = endHour < beginHour ? endHour + 12 : endHour;
    var beginMinute = getMinute(begin);
    var endMinute = getMinute(end);
    var normalizedEndMinute = endMinute < beginMinute ? endMinute + 60 : endMinute;
    var totalHours = normalizedEndHour - beginHour;
    var totalMinutes = normalizedEndMinute - beginMinute;
    var normalizedTotalMinutes = totalMinutes / 60;
    console.log(input, totalHours, normalizedTotalMinutes, totalHours + normalizedTotalMinutes);
    return totalHours + normalizedTotalMinutes;
};
var getHour = function (input) { return (parseInt(input.substring(0, input.length === 4 ? 2 : 1))); };
var getMinute = function (input) { return (parseInt(input.substring(input.length === 4 ? 2 : 1))); };
// parseSingleRange('930-945')
// parseSingleRange('830-945')
// parseSingleRange('1030-145')
// parseSingleRange('1230-245')
var parseMultipleRanges = function (input) { return (input.replace(/[:\s]/g, '').split(',').reduce(function (acc, range) { return (exports.parseSingleRange(range) + acc); }, 0)); };
var total = parseMultipleRanges('930-945, 11:30-1238, 120-250, 315-522');
console.log("total is", total);
