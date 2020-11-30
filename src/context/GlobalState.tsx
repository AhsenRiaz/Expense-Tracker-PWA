import { type } from 'os';
import React, { useState, createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"



const initialState: any = {
    transactions: [
    
    ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
// useReducer
const [state, dispatch] = useReducer(AppReducer, initialState)

// Actions
// delete Transaction
function deleteTransaction(id:number){
    dispatch({
        type: "DELETE_TRANSACTION",
        payload:id
    })
}

// add transaction
function addTransaction(transaction:any){
    dispatch({
        type : "ADD_TRANSACTION",   
        payload : transaction
    })
}

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction

        }}>
            { children}

        </GlobalContext.Provider>
    )
}