import { createRoot } from 'react-dom/client'
import React from "react";
import App from "./App";
import { Authenticator } from '@aws-amplify/ui-react';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>
)
