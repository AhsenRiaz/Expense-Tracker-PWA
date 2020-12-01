import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map((transaction: any) => transaction.amount)
    const total = amount.reduce((acc:number , item:number) => (acc = acc +  item),0).toFixed(2)
    return (
        <div className = "balance">
            <h4 className = "balance_heading">Balance</h4>
            <h3 id="balance">${total}</h3>
        </div>
    )
}
