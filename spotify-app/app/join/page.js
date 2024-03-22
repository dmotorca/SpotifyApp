'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const generateRandomString = (length) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], '');
};

export default function Join() {
  const CLIENT_ID = '58a23b901352485697345c998a02d1f8';
  const REDIRECT_URI = 'http://localhost:3000/host';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className="text-white font-large">Spotify Queue will go here</div>
  );
}
