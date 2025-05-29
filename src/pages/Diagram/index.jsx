import React from 'react'
import styles from "./Diagram.module.scss"
import { useWallet } from '../../context/WalletContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  PieChart, Pie, Cell } from 'recharts';
import { format } from 'date-fns';

const COLORS = ['#8884d8', '#8dd1e1', '#ffc658', '#a4de6c', '#d0ed57', '#ff6b6b', '#82ca9d', '#ffb3b3'];

const Diagram = () => {
  const { transactions } = useWallet();

  const chartDataMap = new Map();

  transactions.forEach((t) => {
    const date = format(new Date(t.date), 'yyyy-MM-dd'); 
    const prev = chartDataMap.get(date) || { date, income: 0, expense: 0 };

    if (t.kind.toLowerCase() === 'income' || t.kind.toLowerCase() === 'recome') {
      prev.income += t.amount;
    } else {
      prev.expense += t.amount;
    }

    chartDataMap.set(date, prev);
  });

  const chartData = Array.from(chartDataMap.values());

  const categoryMap = new Map();
  transactions.forEach((t) => {
    const prev = categoryMap.get(t.category) || 0;
    categoryMap.set(t.category, prev + t.amount);
  });

  const pieData = Array.from(categoryMap.entries()).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div  className={styles.diagram}>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={chartData} className={styles.linear}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#fff"/>
          <YAxis stroke="#fff"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={3} name="Income" />
          <Line type="monotone" dataKey="expense" stroke="#ff6b6b" strokeWidth={3} name="Expense" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="90%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Diagram;
