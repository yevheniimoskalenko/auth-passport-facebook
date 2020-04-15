module.exports = (elements) => {
    let storage = {};
    for (let element in elements) {
        for (let prop in elements[element]) {
            if (elements[element][prop].length != 0) {
                storage[element] = elements[element];
            }
        }
    }
    return storage
}