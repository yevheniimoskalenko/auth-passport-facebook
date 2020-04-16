module.exports = (amount, id) => {
    let list = []
    for (let i = 1; i <= amount; i++) {
        list.push({ id_catalog: id, number_tikets: i })
    }
    return list
}