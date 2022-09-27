import logo from './logo.svg';
import './App.css';
import {
  getAllTransactionList,
  login,
  getResident,getUnits,
  postTransactions,
  updateTransactionById,deleteTransaction
} from './api/listApi' ;
import { useEffect } from 'react';
import { Transactions } from "./transactional/components/Transactions";



function App() {

  return (
    <Transactions/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
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

export default App;
