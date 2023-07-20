const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('ultimate-website-data');
const likeCounts = db.collection('like-counts');

(async function testConnection() {
  await client.connect();
  console.log('connected');
  //await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  //process.exit(1);
});
console.log(likeCounts.);






/*
const express = require('express');
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const app = express();
const port = 3000;

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

connectToDatabase();

app.get('/', async (req, res) => {
  try {
    const database = client.db('ultimate-website-data');
    const collection = database.collection('like-counts');

    const buttonId = 'button1'; // Replace with the actual button identifier
    const button = await collection.findOne({ _id: buttonId });

    if (!button) {
      // Create the button document if it doesn't exist
      await collection.insertOne({ _id: buttonId, count: 0 });
      button = { _id: buttonId, count: 0 };
    }

    res.send(`Count for Button ${button._id}: ${button.count}`);
  } catch (error) {
    console.error('Error retrieving button count', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/increment', async (req, res) => {
  try {
    const database = client.db('your_database_name');
    const collection = database.collection('your_collection_name');

    const buttonId = 'button1'; // Replace with the actual button identifier

    await collection.updateOne({ _id: buttonId }, { $inc: { count: 1 } });

    res.redirect('/');
  } catch (error) {
    console.error('Error incrementing button count', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
*/