import React, { ReactNode } from 'react';

interface LoginProps {
  children: ReactNode;
}
const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=58a23b901352485697345c998a02d1f8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
};

export default Login;
