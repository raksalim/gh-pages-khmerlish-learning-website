import { AuthProvider } from "react-oidc-context";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_w8zbAeSTu",
  client_id: "5vb2i2a2tbdaat794gjq8tups",
  redirect_uri: window.location.hostname.includes('localhost') ? `http://${window.location.hostname}:5173` : `https://${window.location.hostname}`,
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
