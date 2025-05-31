import { AuthProvider } from "react-oidc-context";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'


const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_JhDadWAl8",
  client_id: process.env.COGNITO_CLIENT_ID || '',
  redirect_uri: window.location.hostname.includes('localhost') ? "http://localhost:5173" : "https://www.khmerlish.net",
  response_type: "code",
  scope: "phone openid email",
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
