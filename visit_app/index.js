const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const redis_client = redis.createClient({
    host: 'redis-server',
    port: 6379
})
redis_client.set('visits', 0)

app.get('/', (req, res) => {
    process.exit(1)
    redis_client.get('visits', (err, visits) => {
        res.send('No of visits: ' +  visits)
        redis_client.set('visits', parseInt(visits) + 1)
    })
})

app.listen('8080', () => {
    console.log('App running on 8080')
})