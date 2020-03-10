const READABLE_NUMBER = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
};
module.exports = function toReadable(number) {
    let result = '';
    if (number == 0) {
        return READABLE_NUMBER[0]
    }
    if (number > 99) {
        result += READABLE_NUMBER[Math.trunc(number / 100)] + ' hundred';
        result += (number % 100 > 0) ? ' ' : '';
    }
    if (number % 100 > 20) {
        result += READABLE_NUMBER[number % 100 - number % 10];
        if (number % 10 > 0) {
            result += ' ' + READABLE_NUMBER[number % 10];
        }
    } else if (number % 100 > 0) {
        result += READABLE_NUMBER[number % 100];
    }
    return result
}