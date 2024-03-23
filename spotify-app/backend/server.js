const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Spotify Client Credentials
const clientId = '58a23b901352485697345c998a02d1f8';
const clientSecret = '80d0fde4929e45b68a7d136971215bcf';
const redirectUri = 'http://localhost:3000/host';

// Backend route to handle receiving the message
app.post('/api/get-spotify-token', (req, res) => {
  const { code } = req.body;
  console.log('Received message from frontend:', code);

  // Only send one response
  res.json({ received: true });
});

// SPOTIFY TOKEN POST

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
