import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    let [text, setText] = useState<string>("");
    let [amount, setAmount] = useState<number>(0)

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e:any) => {
        e.preventDefault();

        const newTransaction = {
        // text:text, same as doing text if key and value are same we can type only one time
        id:Math.floor(Math.random() * 100000),
        text,
        amount:+amount
        }

        addTransaction(newTransaction);
        
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} value={text} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-contron">
                    <label htmlFor="amount">Amount <br />
                        (Negative - expense , positive - income)
                    </label>
                    <input onChange = {(e) => setAmount(parseInt(e.target.value))} value = {amount} type="number" placeholder="Enter amount..." />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
