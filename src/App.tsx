import React, { useEffect } from 'react';
import './App.css';
import {Header} from "./components/Header"
import {Balance} from "./components/Balance"
import {IncomeExpenses} from "./components/IncomeExpenses"
import {TransactionList} from "./components/TransactionList"
import {AddTransaction} from "./components/AddTransaction"
import {GlobalProvider} from "./context/GlobalState"
import firebase from "./firebase";
function App() {

  // firebase notification permission
  // useEffect( () => {
  //   const messaging = firebase.messaging();
  //   messaging.requestPermission().then(() => {
  //     return messaging.getToken()
  //     .then((token) => {
  //       prompt("Token" , token)
  //     })
  //   }) 
  // } , []);
  useEffect( () => {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      return messaging.getToken().then((token) => {
        if (token){
          prompt("Welcome to my App \nToken" ,token)
        }
        else{
          console.log("Token not available")
        }
      })
    })
  } )



  return (
    <GlobalProvider>

    <div className="App">
     <Header/>
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
