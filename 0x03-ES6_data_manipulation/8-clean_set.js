function cleanSet(set, startString) {
    if (!(set instanceof Set) || typeof startString !== 'string') {
        throw new Error('Invalid arguments: Expected a Set and a string');
    }

    const valuesArray = [...set];
    const filteredValues = valuesArray.filter(value => value.startsWith(startString));

    let result = '';
    for (let i = 0; i < filteredValues.length; i++) {
        const value = filteredValues[i];
        if (startString !== '') {
            const restOfString = value.substring(startString.length);
            result += restOfString;
        }

        if (i !== filteredValues.length - 1 && startString !== '') {
            result += '-';
        }
    }

    return result;
}

export default cleanSet;
