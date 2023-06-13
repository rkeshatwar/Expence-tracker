import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpences from './Components/IncomeExpences'
import TransactionList from './Components/TransactionList'
import AddTransactions from './Components/AddTransactions'
import { GlobalProvider } from './Context/GlobalState'
import './App.css'
const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className='balance'>
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    </GlobalProvider>
  )
}

export default App
