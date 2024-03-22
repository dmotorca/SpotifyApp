// Express server setup
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Spotify Client Credentials
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = 'http://localhost:3000/host';

// Backend route to handle receiving the message
// Endpoint to receive the message from frontend
app.post('/api/send-message', (req, res) => {
  const { message } = req.body;
  console.log('Received message from frontend:', message);
  res.json({ received: true });
});

app.post('/api/get-spotify-token', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString('base64')}`,
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    // Store access_token and refresh_token securely

    res.json({ access_token, refresh_token });
  } catch (error) {
    console.error('Error getting Spotify tokens:', error.response.data);
    res.status(500).json({ error: 'Failed to get Spotify tokens' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
