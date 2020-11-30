import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map((transaction: any) => transaction.amounts)
    const total = amounts.reduce((acc:number , item:number) => (acc += item),0).toFixed(2)
    return (
        <div>
            <h4>Balance</h4>
            <h3 id="balance">${total}</h3>
        </div>
    )
}
