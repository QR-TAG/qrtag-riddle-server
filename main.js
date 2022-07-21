const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
 
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT ?? 3000;
const MONGODB_URL = process.env.MONGODB_URL; 

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
 
app.use(express.json());

const { MongoClient } = require('mongodb');
const client = new MongoClient(MONGODB_URL, { useNewUrlParser: true });
const db = client.db('qrtag');
const collection = db.collection('riddles');

app.get('/riddle', async (_req, res) => {
  const riddle = await collection.findOne({ id: 0 });
  res.send(riddle);
});

app.post('/riddle', async (req, res) => {
  const riddle = {...req.body, id: 0};
  await collection.updateOne({ id: 0 }, { $set: riddle });
  res.send();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});