import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState ={
    transactions: [
        
    ]
}

//Create Context
 export const GlobalContext = createContext(initialState);

//Provider Component
 export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer (AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'Add_Transaction',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )
 }