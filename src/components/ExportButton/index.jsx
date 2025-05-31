import React from "react";
import styles from "./ExportButton.module.scss"

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row => Object.values(row).join(",")).join("\n");
    const csvContent = [headers, rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className={styles.exportBtn} onClick={handleExport}>
      Export CSV
    </button>
  );
};

export default ExportButton;
