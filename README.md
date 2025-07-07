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

```
table-to-csv-extension/
├── manifest.json     # Chrome extension configuration
├── icon.png          # Extension icon
├── popup.html        # HTML for the extension's popup UI
├── popup.js          # Listens for button click and runs content script
└── content.js        # Scrapes the table and downloads CSV
```

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

```


## Screenshots

The screenshots show the stats of Akashdeep singh .

![image](https://github.com/user-attachments/assets/0dba7b51-e45c-440b-8912-88bc65934e21)

![image](https://github.com/user-attachments/assets/d86f0fd8-1724-4d9e-ae13-4d9100756239)

![image](https://github.com/user-attachments/assets/29a14728-dcb1-4580-80ef-3744a60e9cd8)

![image](https://github.com/user-attachments/assets/f88c19cf-677b-4eba-ab3e-84ef4ac0f061)

![image](https://github.com/user-attachments/assets/b031cc9a-99df-4785-8c2f-3b1b3ac4d34e)







