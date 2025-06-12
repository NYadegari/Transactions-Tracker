import React, { useState, useMemo } from "react";
import styles from './Wallet.module.scss';
import ExportButton from "../../components/ExportButton";
import { walletActions } from "../../redux/slices/walletSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Wallet = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.wallet.transactions || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const categories = useMemo(() => {
    const unique = new Set(transactions.map(t => t.category));
    return Array.from(unique);
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchTitle = t.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory ? t.category === selectedCategory : true;

      const transDate = new Date(t.date);
      const matchStartDate = startDate ? transDate >= new Date(startDate) : true;
      const matchEndDate = endDate ? transDate <= new Date(endDate) : true;

      return matchTitle && matchCategory && matchStartDate && matchEndDate;
    });
  }, [transactions, searchTerm, selectedCategory, startDate, endDate]);


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
        <div className={styles.dateFilter}>
          <label>
            From:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateInput}
            />
          </label>
          <label>
            To:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.dateInput}
            />
          </label>
        </div>
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
                onClick={() => dispatch(walletActions.removeTrans(index))}
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
