//Added
/*
You need to import React in every component file.
You can also import any images or CSS you want to use at the top.
*/
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
//Added
//import logo from './logo.svg';
import './App.css';

// starter App() js format.
function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );

}

// function App() {
//   return (
//     //jsx code
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
