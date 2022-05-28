import functions from 'firebase-functions'
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


export const api = functions.https.onRequest(app)