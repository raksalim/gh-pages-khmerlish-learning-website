import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_BPuTDDHd3",
  client_id: "1dbkk59stlbcn9a1mvdmggkjok",
  redirect_uri: window.location.hostname.includes('localhost') ? `http://${window.location.hostname}:5173` : `https://${window.location.hostname}`,
  response_type: "code",
  scope: "aws.cognito.signin.user.admin email openid phone profile",
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
)