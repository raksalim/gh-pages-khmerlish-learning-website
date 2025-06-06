import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { appLinks } from './data/data'
// import { NavBar } from './components/NavBar';
import { useAuth } from "react-oidc-context";
import { getAwsSecret } from './utls/getAwsSecrets'

function App() {
  console.log(window.location.hostname)
  const auth = useAuth();

  const signOutRedirect = () => {
    auth.removeUser()
    const clientId = process.env.COGNITO_CLIENT_ID || '';
    const logoutUri = window.location.hostname.includes('localhost') ? `http://${window.location.hostname}:5173` : `https://${window.location.hostname}`;
    const cognitoDomain = "https://us-east-2jhdadwal8.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  getAwsSecret().then((secret) => {
    console.log("AWS Secret:", secret);
  }).catch((error) => {
    console.error("Error fetching AWS secret:", error);
  })


  return (<div className='appContainer'>
    <Header />
    {
      auth.isAuthenticated
        ? (<div>
          <pre> Hello: {auth.user?.profile.email} </pre>
          <pre> ID Token: {auth.user?.id_token} </pre>
          <pre> Access Token: {auth.user?.access_token} </pre>
          <pre> Refresh Token: {auth.user?.refresh_token} </pre>
          <pre> Refresh Token: {auth.user?.profile.picture} </pre>

          <button onClick={() => signOutRedirect()}>Sign out</button>
        </div>)
        : (<div>
          <button onClick={() => auth.signinRedirect()}>Sign in</button>
        </div>)
    }
    {/* <NavBar /> */}
    <BrowserRouter>
      <Routes>
        {appLinks.filter((link) => link.isEnabled).map((link, idx) =>
          <Route key={idx} path={link.location} element={link.component} />
        )}
      </Routes>
    </BrowserRouter>

    <Footer />
  </div >)

}


export default App
