import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors';




const app = express()
app.use(cors());
app.use(express.json());


// set up routes

app.get('/test', (req, res) => {req.send('Hi🔥🔥 This is working')})
app.post('/goodMessages',            )
app.get('/goodMessages',            )
