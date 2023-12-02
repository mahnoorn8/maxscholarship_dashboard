import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Navbar />
      </BrowserRouter>
    // <div className="App">
    //     <h1>MAX Scholarships</h1>
    //     <Navbar />
    //   {/*<header className="App-header">*/}
    //   {/*  <img src={logo} className="App-logo" alt="logo" />*/}
    //   {/*  /!*<p>*!/*/}
    //   {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
    //   {/*  /!*</p>*!/*/}
    //   {/*  /!*<a*!/*/}
    //   {/*  /!*  className="App-link"*!/*/}
    //   {/*  /!*  href="https://reactjs.org"*!/*/}
    //   {/*  /!*  target="_blank"*!/*/}
    //   {/*  /!*  rel="noopener noreferrer"*!/*/}
    //   {/*  /!*>*!/*/}
    //   {/*  /!*  Learn React*!/*/}
    //   {/*  /!*</a>*!/*/}
    //   {/*</header>*/}
    // </div>
  );
}

export default App;
