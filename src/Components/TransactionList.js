import React, { useContext } from 'react'
import Transactions from './Transactions';
import { GlobalContext } from '../Context/GlobalState'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
  return (
    <>
      <h3>Transactions</h3>
      <ul className='list'>
        {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}
        
      </ul>
    </>
  )
}

export default TransactionList
