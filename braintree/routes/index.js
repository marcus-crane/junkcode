const express = require('express');
const router = express.Router();
const env = require('dotenv').config()
const braintree = require('braintree');

router.get('/', (req, res, next) => {
    res.render('index', {clientToken: process.env.clientToken});
})

router.post('/braintree/checkout', (req, res, next) => {
    let gateway = braintree.connect({
        environment: braintree.Environment.Sandbox,
        merchantId: process.env.merchantId,
        publicKey: process.env.publicKey,
        privateKey: process.env.privateKey
    });

    gateway.transaction.sale({
        amount: '5.00',
        paymentMethodNonce: "nonce-from-the-client",
        options: {
            submitForSettlement: true
        }
    }, ((err, result) => {
        if (result) {
            if (result.success) {
                res.render('success', {
                    transaction_id: result.transaction.id,
                    amount: result.transaction.amount,
                    currency: result.transaction.currencyIsoCode,
                    lastFour: result.transaction.creditCard.last4,
                    card_logo: result.transaction.creditCard.imageUrl,
                    expiration: result.transaction.creditCard.expirationDate
                })
            } else {
                console.log(result.message);
            }
        } else {
        console.log(err);
        }
    }));
})

router.get('/braintree/client_token', (req, res, next) => {
  gateway.clientToken.generate({}, (err, res) => {
      let clientToken = response.clientToken;
  })  
})

module.exports = router