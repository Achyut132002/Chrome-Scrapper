# 📊 Table to CSV - Chrome Extension

A simple Chrome extension that scrapes the **first HTML table** on any webpage and downloads it as a CSV file – with just one click.

## 🚀 Features

- Extracts data from the first `<table>` element on a page
- Converts the data into a clean `.csv` format
- Automatically downloads the file – no copy-paste needed
- Fast and lightweight

## 🧩 How to Install

1. Download or clone this repository to your local machine.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top-right toggle).
4. Click **"Load unpacked"** and select the extension folder.

## 📁 Project Structure

table-to-csv-extension/
├── manifest.json – Chrome extension configuration
├── icon.png – Extension icon
├── popup.html – HTML for the extension's popup UI
├── popup.js – Listens for button click and runs content script
└── content.js – Scrapes the table and downloads CSV

## 🛠 How It Works

1. Click the extension icon in Chrome.
2. Press the "Download table CSV" button.
3. The extension:
   - Finds the **first `<table>`** element on the active page.
   - Converts it into CSV format.
   - Automatically downloads the CSV file as `table_data.csv`.

If no table is found, a message will alert the user.

## 🖼 Example

Suppose the page has this table:

```html
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>30</td></tr>
  <tr><td>Bob</td><td>25</td></tr>
</table>

The downloaded table_data.csv will contain:

"Name","Age"
"Alice","30"
"Bob","25"


