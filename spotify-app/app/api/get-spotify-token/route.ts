export const sendCodeToBackend = async (code: string) => {
  try {
    const response = await fetch(
      'http://localhost:3001/api/get-spotify-token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Access Token:', data.access_token);
      console.log('Refresh Token:', data.refresh_token);
      // Now you have the access token and refresh token, you can perform further actions
    } else {
      console.error(
        'Failed to exchange authorization code for tokens:',
        response.statusText
      );
    }
  } catch (error) {
    console.error('Error exchanging authorization code for tokens:', error);
  }
};
