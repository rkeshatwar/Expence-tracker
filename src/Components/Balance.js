import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts =  transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
  return (
    <div style={{textAlign:'center'}}>
        <h4>Your Balance</h4>
        <h1>Rs{total}</h1>
    </div>
  )
}

export default Balance
