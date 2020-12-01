import React, { useContext, useState } from "react"
import { GlobalContext } from '../context/GlobalState'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export const AddTransaction = () => {
    let [text, setText] = useState<any>("");
    let [amount, setAmount] = useState<any>(0)

    const { addTransaction, checkSign, trigger } = useContext(GlobalContext);

    const onSubmit = (e: any) => {

        e.preventDefault();

        if (!trigger) {

            const newTransaction = {
                // text:text, same as doing text if key and value are same we can type only one time
                id: Math.floor(Math.random() * 100000),
                text,
                amount: +amount
                
            }
            addTransaction(newTransaction);
            setText( " ");


        }
        else {
            const newTransaction = {
                // text:text, same as doing text if key and value are same we can type only one time
                id: Math.floor(Math.random() * 100000),
                text,
                amount: -amount
            }

            addTransaction(newTransaction);
            setText( " ");


        }
    }


    return (
        <div>
            <h3 className="addtransaction">Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Enter text..."
                        required />
                </div>

                <div>
                    <FormControlLabel  label="Switch off '+' and Switch on '-'" control={<Switch  color = "primary" checked={trigger} onChange={checkSign} />} />
                </div>

                <div className="form-contron">
                    <label htmlFor="amount"> Transaction Amount <br />
                    </label>
                    <input
                        className="amount_input"
                        onChange={(e: any) => setAmount(parseInt(e.target.value))}
                        value={amount}
                        type="number"
                        placeholder="Enter amount..."
                        required 
                        min={0} />

                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )


}
