import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransactions = () => {
    const[text, setText] = useState('');
    const[amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
            <label htmlFor='text'>Text</label>
            <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter Text...'/>
        </div>
        <div>
            <label htmlFor='amount'>Amount<br />
            (negetive - expence, positive - income)</label>
            <input type='number' value={amount} onChange={(f)=> setAmount(f.target.value)} placeholder='Enter Amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransactions
