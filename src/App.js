import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation';

import Home from "../src/customer/pages/Home"

function App() {
  return (
    <>
    <div>
      <Navigation/>
      <div>
      <Home/>
    </div>
    </div>  
    </>
  );
}

export default App;
