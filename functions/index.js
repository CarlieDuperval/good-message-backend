import functions, { https } from 'firebase-functions'
import express from 'express';
import cors from 'cors';
import { addGoodMessage, deleteGoodMessage, getAllGoodMessages, getGoodMessageById, updateGoodMessage } from './src/routes/goodMessagesRoutes';




const app = express()
app.use(cors());
app.use(express.json());



// set up routes

app.get('/test', (req, res) => {req.send('Hi🔥🔥 This is working')})
app.post('/goodMessages', addGoodMessage)
app.get('gooMessages/:gooMessageId', getGoodMessageById)
app.get('/goodMessages', getAllGoodMessages)
app.delete('/goodMessages/goodMessageId', deleteGoodMessage)
app.patch('/gooMessages/:goodMessageId', updateGoodMessage)



// app.listen(3000, () => {
//     console.log('Listening on port 3000')
// })

// create and deploy our cloud functions
//https://firebase.google.com/docs/functions/write-firebase-functions

export const api = functions.https.onRequest(app)