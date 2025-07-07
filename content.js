function tableToCSV(table) {
  let csv = [];
  for (let row of table.rows) {
    let cols = Array.from(row.cells).map(cell => `"${cell.innerText.trim()}"`);
    csv.push(cols.join(","));
  }
  return csv.join("\n");
}

let table = document.querySelector("table");

if (table) {
  let csvData = tableToCSV(table);
  let blob = new Blob([csvData], { type: "text/csv" });
  let url = URL.createObjectURL(blob);
  let filename = "table_data.csv";

  let a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
} else {
  alert("No table found on this page.");
}
