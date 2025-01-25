import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from './auth/Auth0Provier';
import ProductGrid from './components/ProductGrid';
import {Link} from "react-router-dom"
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">     
      <Auth0ProviderWithHistory >
      {/* <Profile /> */}
        <ProductGrid />
      </Auth0ProviderWithHistory>
    </div>
  );
}

export default App;
