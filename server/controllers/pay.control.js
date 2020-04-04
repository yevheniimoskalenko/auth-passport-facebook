const LiqPay = require('liqpayjs-sdk');
const Base64 = require('js-base64').Base64;
const keys = require("../keys")
module.exports.create = (req, res) => {
    const { idUser, amount, money } = req.body
    const user = Base64.encode(JSON.stringify({ "userID": idUser, amount, money }));
    const liqpay = new LiqPay(keys.public_key, keys.private_key);
    const html = liqpay.cnb_form({
        'action': 'pay',
        'amount': money,
        'currency': 'UAH',
        'description': `Придбання квитків на суму ${money}`,
        'order_id': 'order_id_2',
        'version': '3',
        'dae': user

    });
    return res.send(html)
}

module.exports.result = (req, res) => {
    console.log(req.body)
}