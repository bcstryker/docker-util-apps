const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/loggingDB';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(`MongoDB connection error: ${err}`));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a simple schema for logs
const logSchema = new mongoose.Schema({
  level: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create a model based on the schema
const Log = mongoose.model('Log', logSchema);

// Define API routes
app.post('/api/logs', async (req, res) => {
  try {
    // Create a new log entry
    const logEntry = new Log(req.body);
    const savedLog = await logEntry.save();
    res.status(201).send(savedLog);
  } catch (err) {
    res.status(400).send({ error: 'Failed to save log' });
  }
});

app.get('/api/logs', async (req, res) => {
  try {
    // Retrieve all log entries
    const logs = await Log.find();
    res.status(200).send(logs);
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve logs' });
  }
});

// Default route to check API status
app.get('/', (req, res) => {
  res.send('Logging Service API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Express API listening on port ${port}`);
});
