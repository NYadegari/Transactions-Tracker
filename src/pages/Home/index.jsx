import React, { useState } from "react";
import styles from "./home.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWallet } from "../../context/WalletContext";

const HomePage = () => {
  const [Kind, setKind] = useState("Expense");
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoryOptions, setCategoryOptions] = useState([
    "Food",
    "Transportation",
    "Fee",
    "Entertainment",
    "Others",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [customCategoryInput, setCustomCategoryInput] = useState("");
  const { addTransaction } = useWallet();

  const handleAddToWallet = () => {
  let finalCategory = selectedCategory;

  if (selectedCategory === "Others" && customCategoryInput.trim()) {
    const newCategory = customCategoryInput.trim();
    if (!categoryOptions.includes(newCategory)) {
      setCategoryOptions([...categoryOptions.slice(0, -1), newCategory, "Others"]);
    }
    finalCategory = newCategory;
    setSelectedCategory(newCategory);
    setCustomCategoryInput("");
  }

  const transaction = {
    kind: Kind,
    title: Title,
    amount: parseFloat(Amount),
    date: selectedDate,
    category: finalCategory,
  };

  addTransaction(transaction);

  setTitle("");
  setAmount("");
  setKind("");
};


  return (
    <div className={styles.addContainer}>
      <select
        className={styles.selectExpRec}
        onChange={(e) => setKind(e.target.value)}
        value={Kind}
      >
        <option value="">Expense</option>
        <option value="Income">Income</option>
      </select>

      <input
        type="text"
        placeholder="Title of transaction..."
        onChange={(e) => setTitle(e.target.value)}
        value={Title}
      />
      <input
        type="number"
        placeholder="Amount of transaction..."
        onChange={(e) => setAmount(e.target.value)}
        value={Amount}
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        className={styles.date}
      />
      <select
        className={styles.categorySelect}
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        {categoryOptions.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Write your own category..."
        disabled={selectedCategory !== "Others"}
        value={customCategoryInput}
        onChange={(e) => setCustomCategoryInput(e.target.value)}
        className={styles.categorySelect}
      />

      <button onClick={handleAddToWallet}>Add to wallet</button>
    </div>
  );
};

export default HomePage;
