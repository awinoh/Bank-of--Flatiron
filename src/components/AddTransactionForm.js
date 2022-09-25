import React,{useState} from "react";

function AddTransactionForm({handleAddTransaction}) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      description,
      category,
      amount,
      date,
    };
    console.log (newTransaction)
    handleAddTransaction(newTransaction);
    setAmount("");
    setDescription("");
    setCategory("");
    setDate("");
  }
  return (
    <div className="ui segment">
      <form className="ui form"onSubmit={handleSubmit}>
        <div className="inline fields">
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={(e) =>setAmount(e.target.value) }/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
