'use client';
import React, { ReactNode, useEffect } from 'react';

interface LoginProps {
  children: ReactNode;
}

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=58a23b901352485697345c998a02d1f8&response_type=code&redirect_uri=http://localhost:3000/host&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login: React.FC<LoginProps> = ({ children }) => {
  useEffect(() => {
    // Function to extract code from URL
    const getCodeFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        // Use the code here (e.g., send it to your backend to get access token)
        console.log('Authorization Code:', code);
        sendHelloWorldToBE();
      }
    };

    getCodeFromURL();
  }, []);

  const sendHelloWorldToBE = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello, World!' }),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error(
          'Failed to send message to backend:',
          response.statusText
        );
      }
    } catch (error) {
      console.error('Error sending message to backend:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
};

export default Login;
