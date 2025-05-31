import React, { useState, useMemo } from "react";
import { useWallet } from "../../context/WalletContext";
import styles from './Wallet.module.scss';
import ExportButton from "../../components/ExportButton";

const Wallet = () => {
  const { transactions, removeTransaction } = useWallet();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    const unique = new Set(transactions.map(t => t.category));
    return Array.from(unique);
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchTitle = t.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory ? t.category === selectedCategory : true;
      return matchTitle && matchCategory;
    });
  }, [transactions, searchTerm, selectedCategory]);

  return (
    <div className={styles.wallet}>
      <h1>Your Transactions</h1>
      <div className={styles.line} />
      <div className={styles.searchSelect}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className={styles.selectCat}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className={styles.empty}>No transactions found</p>
      ) : (
        <ul>
          {filteredTransactions.map((trans, index) => (
            <li key={index}>
              <p className={styles.title}>{trans.title}</p>
              <p className={styles.date}>{new Date(trans.date).toDateString()}</p>
              <p className={styles.amount}>${trans.amount}</p>
              <div className={styles.type}>
                <p className={styles.kind}>{trans.kind}</p>
                <p className={styles.category}>- {trans.category}</p>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => removeTransaction(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <ExportButton data={filteredTransactions} />
    </div>
  );
};

export default Wallet;
