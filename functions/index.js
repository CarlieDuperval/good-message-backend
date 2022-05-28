import functions, { https } from 'firebase-functions'
import express from 'express';
import cors from 'cors';




const app = express()
app.use(cors());
app.use(express.json());



// set up routes

app.get('/test', (req, res) => {req.send('Hi🔥🔥 This is working')})
app.get('gooMessages/:gooMessageId',         )
app.get('/goodMessages',            )
app.delete('/goodMessages/goodMessageId',       )
app.patch('/gooMessages/:goodMessageId',         )
app.post('/goodMessages',            )


// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })

// create and deploy our cloud functions
//https://firebase.google.com/docs/functions/write-firebase-functions

export const api = functions.https.onRequest(app)