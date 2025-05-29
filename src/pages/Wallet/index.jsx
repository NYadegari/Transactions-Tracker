// Wallet.jsx
import React from "react";
import { useWallet } from "../../context/WalletContext";
import styles from './Wallet.module.scss'

const Wallet = () => {
  const { transactions, removeTransaction } = useWallet();

  return (
    <div className={styles.wallet}>
      <h1>Your Transactions</h1>
      <div className={styles.line}/>
      {transactions.length === 0 ? (
        <p className={styles.empty}>No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((trans, index) => (
            <li key={index}>
              <p className={styles.title}>{trans.title}</p> 
              <p className={styles.date}>{new Date(trans.date).toDateString()}</p>
              <p className={styles.amount}>${trans.amount}</p>
              <div className={styles.type}>
                <p className={styles.kind}>{trans.kind}</p>
                <p className={styles.category}>- {trans.category}</p>
              </div>
             
              <button className={styles.removeBtn} onClick={() => removeTransaction(index)}>Remove</button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wallet;
