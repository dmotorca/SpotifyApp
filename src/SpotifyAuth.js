import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [favoriteSong, setFavoriteSong] = useState(null);

  useEffect(() => {
    const client_id = 'REACT_APP_CLIENT_ID';
    const client_secret = 'REACT_APP_CLIENT_SECRET';
    const redirect_uri = 'REACT_APP_REDIRECT_URI';

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `grant_type=client_credentials&redirect_uri=${encodeURIComponent(
        redirect_uri
      )}`,
    };

    const getToken = async () => {
      try {
        const response = await axios(authOptions);
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    const getFavoriteSong = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/me/top/tracks',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              limit: 1, // Get only one top track (assuming it's the favorite)
            },
          }
        );
        setFavoriteSong(response.data.items[0]); // Assuming first item is the favorite song
      } catch (error) {
        console.error('Error fetching favorite song:', error);
      }
    };

    if (accessToken) {
      getFavoriteSong();
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Spotify Authentication</h1>
      {accessToken ? (
        <div>
          <p>Access Token: {accessToken}</p>
          {favoriteSong && (
            <div>
              <h2>User's Favorite Song:</h2>
              <p>Name: {favoriteSong.name}</p>
              <p>Artist: {favoriteSong.artists[0].name}</p>
              <p>Album: {favoriteSong.album.name}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Authenticating...</p>
      )}
    </div>
  );
};

export default SpotifyAuth;
