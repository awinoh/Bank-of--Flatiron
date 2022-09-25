import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions,setTransactions]=useState([])

  async function fetchTransactions() {
    const response = await fetch("http://localhost:8001/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  };
    
  const handleSearch = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm  handleAddTransaction={handleAddTransaction} />
      <TransactionsList  transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
