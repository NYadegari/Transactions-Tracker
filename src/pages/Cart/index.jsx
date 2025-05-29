import React , {useContext, useState} from 'react'
import styles from "./Wallet.module.scss";

const Wallet = () => {
  return (
    <div className={styles.WalletPage}>
        <h2>Your Wallet</h2>
        <div className={styles.content}>
            <div className={styles.Wallet}>
               {WalletItems.length === 0 ? (<p>Your Wallet is empty</p>) : (
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {WalletItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.quantit}</td>
                                <td>${(item.price*1).toFixed(2)}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               )} 
            </div>
            <div className={styles.checkout}>
                <h6>Order Summary</h6>
                <div>Total: 0$</div>
               </div>
        </div>
    </div>
  )
}

export default Wallet