//import { response } from 'express'
import { connectDb } from '../gateway/connectDb.js'

export const addGoodMessage = async (req, res) => {
    if(!req.body.name || !req.body.message ) {
        response.status(401).send('Invalid request');
        return;
    }
    // connect to firebase
    const db = connectDb();
    const newGoodMessage = {
        name: req.body.name,
        message: req.body.name
    };
    try {
        const doc = await db.collection('goodMessages').add(newGoodMessage);
        res.status(201).send('GoodMessage Created' + doc.id);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getAllGoodMessages = async (req, res) => {
    const db = connectDb();
    try {
        const snapshot = await db.collection('goodMessages').get();
        const goodMessagesArray = snapshot.docs.map(doc => {
            let goodMessage = doc.data();
            goodMessage.id = doc.id;
            return goodMessage;
        })
        res.send(goodMessagesArray);  
    } catch (err) {
        res.status(501).send(err)
    }
}

export const getGoodMessageById = async (req, res) => {
    const { goodMessageId } = req.params;
    if(!goodMessageId) {
        res.status(401).send('Invalid request')
        return;
    }
    const db = connectDb();
    try { const doc = await db.collection('goodMessages').get();
        let goodMessage = doc.data();
        goodMessage.id = doc.id;
        res.status(201).send(goodMessage)   
    } catch (error) {
        res.status(501).send(err)
        
    }
}

export const updateGoodMessage = async (req, res) => {
    if(!req.params || !req.params.restaurantId || !req.body){
        res.status(401).send('Invalid request');
        return;
    }
    const db = connectDb();
    try {
        const { goodMessageId } = req.params
        db.collection('goodMessages').doc(goodMessageId).update(req.body)
        res.status(201).send('GoodMessage updated')
    } catch (err) {
        res.status(501).sen(err)
    }
}


