// Playlists.js
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Playlists() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (session?.user?.accessToken) {
        try {
          const response = await axios.get('/api/spotify/user/playlists', {
            params: { access_token: session.user.accessToken },
          });
          setPlaylists(response.data.playlists);
        } catch (error) {
          console.error('Error fetching playlists:', error.message);
        }
      }
    };

    fetchPlaylists();
  }, [session]);

  return (
    <div>
      <h1>My Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}
