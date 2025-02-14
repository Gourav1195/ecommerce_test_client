import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
// import dotenv from 'dotenv'
// dotenv.config();

// /api/v2/clients/{id}
const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-gorlsjubkb0am38j.us.auth0.com"; 
  const clientId = "gHv8J7jOUy422tHMxYNwDfdJxTOxeDZ4"; 
  const redirectUri = 'https://ecommerce-test-client.vercel.app/'; 
//   const redirectUri = window.location.origin; 

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
