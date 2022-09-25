import React,{useState} from "react";

function AddTransactionForm({addTransaction}) {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
        description,
        transactionAmount: +transactionAmount,
        category,
        date
    }
    console.log(newTransaction );
    addTransaction(newTransaction);

        setDescription("");
        setTransactionAmount(0);
        setCategory("");
        setDate("");

}
  return (
    <div className="ui segment">
      <form className="ui form"onSubmit={onSubmit}>
        <div className="inline fields">
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={transactionAmount} onChange={(e) =>setTransactionAmount(e.target.value) }/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
