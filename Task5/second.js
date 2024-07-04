function firstChar(String) {

    for (let i = 0; i < String.length; i++) {

        if (String[i] !== ' ') {
            return String[i];
        }
    }
    return '';
}
console.log(firstChar(' Rosa Parks')); 
