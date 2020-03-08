const express = require('express')
const app = express()
const cors = require('cors')

// let url = req.headers.host 
// console.log(url)

app.use(cors({
    origin: (origin, cb) => {
        origin = 'http://localhost:3000'
        if(origin === 'http://localhost:3000'){
            cb(null, true)
        }else{
            cb(new Error('Not allowed by CORS'))
        }
    }
}))

app.get('/', (req, res)=> {
    res.send({ message: 'Aloha'})
})

app.listen(3000, ()=> console.log('running.....'))

//  https://expressjs.com/en/resources/middleware/cors.html