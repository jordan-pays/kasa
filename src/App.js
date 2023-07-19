import './App.css';
import Router from './routes/Router';
import Header from './components/Header'
import Footer from './components/Footer'

import "./App.css"

export default function App() {
  return (
    <>
     <Header/>
      <Router/>
     <Footer/>
    </>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={s} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}