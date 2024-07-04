function toCase(string) {

    let lowerCase = string.toLowerCase();
    let upperCase = string.toUpperCase();
    let result = lowerCase + '-' + upperCase;
    return result;
}
console.log(toCase('Mtahtha'));