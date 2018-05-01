const Twitter = require('twitter')
const env = require('dotenv').config()

const client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
})

let replied_to = [];
let word = process.env.word

let params = { screen_name: process.env.username, count: 10 }

const removeWord = () => {
    console.log('Checking...')
    client.get('statuses/mentions_timeline', params, (error, tweets, response) => {
        if (!error) {
            for (i in tweets) {
                if (tweets[i].text.includes(word) && !replied_to.includes(tweets[i].id)) {
                    console.log(`ALERT. ALERT. ${tweets[i].user.screen_name} TWEETED THE WORD ${word} AT YOU AT ${tweets[i].created_at}`)
                    replied_to.push(tweets[i].id)
                    client.post('statuses/update', { status: `@${tweets[i].user.screen_name} Don't say that dirty word #bot`, in_reply_to_status_id: `${tweets[i].id}` }, (err, tweet, res) => {
                        if (!err) {
                            console.log(`Told @${tweet[i].user.screen_name} to stop.`)
                        }
                    })
                }
            }
        }
    })
    console.log('Snoozing again...')
}

setInterval(removeWord, 15000)
