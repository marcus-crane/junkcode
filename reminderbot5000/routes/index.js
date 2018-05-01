const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Nothing is here but check out /webhook')
})

router.get('/webhook', (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token' === process.env.VERIFY_TOKEN]) {
        console.log('Validating Webhook...');
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('Validation failed. Make sure the tokens match!');
        res.sendStatus(403);
    }
})

module.exports = router