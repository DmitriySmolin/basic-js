module.exports = function repeater(str, options) {
    let result = '';
    str = str + '';

    let defaultOptions = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|',
    }

    if (!options.repeatTimes) {
        options.repeatTimes = defaultOptions.repeatTimes;
    }

    if (!options.separator) {
        options.separator = defaultOptions.separator;
    }

    if (options.addition) {
        options.addition = options.addition + '';
    }
    if (options.addition === undefined) {
        options.addition = defaultOptions.addition;
    }

    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = defaultOptions.additionRepeatTimes;
    }

    if (!options.additionSeparator) {
        options.additionSeparator = defaultOptions.additionSeparator;
    }

    for (let i = 1; i <= options.repeatTimes; i++) {

        result += str;

        for (let j = 1; j <= options.additionRepeatTimes; j++) {

            result += options.addition;

            if (j !== options.additionRepeatTimes) result += options.additionSeparator;

        }

        if (i !== options.repeatTimes) result += options.separator;


    }
    return result;
};