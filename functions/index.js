import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors';
import { addGoodMessage, deleteGoodMessage, getAllGoodMessages, getGoodMessageById, updateGoodMessage } from './src/services/goodMessagesServices';




const app = express()
app.use(cors());
app.use(express.json());



// set up routes

app.get('/test', (req, res) => {req.send('Hi🔥🔥 This is working')})
app.post('/goodMessages', addGoodMessage)
app.get('/gooMessages/:gooMessageId', getGoodMessageById)
app.get('/goodMessages', getAllGoodMessages)
app.delete('/goodMessages/goodMessageId', deleteGoodMessage)
app.patch('/gooMessages/:goodMessageId', updateGoodMessage)




export const api = functions.https.onRequest(app)