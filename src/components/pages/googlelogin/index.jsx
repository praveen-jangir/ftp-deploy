import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  // console.log(response);
  // Handle response from Google login
};

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
