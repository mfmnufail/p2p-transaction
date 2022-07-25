import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import axios from "axios";

const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");

  const submitHandler=(event)=>{
    event.preventDefault();
    const data = {
      name: name,
      account: account,
      amount:  parseFloat(amount)
    }

    console.log("Transaction details" + JSON.stringify(data))

    axios.post("https://localhost:4000/transaction", data)
   
  }


  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input name="name" placeholder="Name with initial" onChange={(e)=> setName(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Amount</label>
          <input
            name="amount"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>Account Number</label>
          <Input name="reg" label={`AC`} placeholder="Last 4 digits" onChange={(e)=>setAccount(e.target.value)} autoComplete="off" />
        </Form.Field>

        <Button primary type="submit">Submit</Button>
       
      </Form>

     
    </div>
  );
};

export default Transaction;
