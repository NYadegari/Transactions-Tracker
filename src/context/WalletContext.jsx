// import React, { createContext, useState, useEffect, useContext } from "react";

// export const WalletContext = createContext();

// export const WalletProvider = ({ children }) => {
//   const [transactions, setTransactions] = useState(() => {
//     const saved = localStorage.getItem("walletTransactions");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("walletTransactions", JSON.stringify(transactions));
//   }, [transactions]);

//   const addTransaction = (transaction) => {
//     setTransactions((prev) => [...prev, transaction]);
//   };

//   const removeTransaction = (indexToRemove) => {
//     setTransactions((prev) =>
//         prev.filter((_, index) => index !== indexToRemove)
//     );
//     };


//   return (
//     <WalletContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export const useWallet = () => useContext(WalletContext);