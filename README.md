# CLI Employee Tracker
## Description

A Node/SQL based application that allows the user to manage and view a database of departments, roles, employees, and management-structure. The user can view tables, add to tables, and update a given user all within the CLI itself.

I wanted to dip my toes into the world of MySQL and writing a simple Employee Tracker application was a great help in doing so. Prior to writing this application I had near zero previous knowledge of MySQL. Throughout the short development cycle I learned basic MySQL syntax, how to properly utilize primary and foreign keys, and how to utilize JOIN clauses to display necessary and pertinent information. For me one of the most challenging aspects of this project was understanding how to properly utilize prepared statements in order to protect the database itself.

---
## Installation

To install the application you'll need to do the following:

- Clone the repository to your local machine
- Navigate to the project repository
- type `npm install` in the terminal to install dependencies

In addition to the above requirements you'll also need to create the database and tables using ./db/schema.sql, as well as seed the tables with data using ./db/seeds.sql.

- Log in to MYSQL in your terminal
- Run the command `source db/schema.sql` followed by the command `source db/seeds.sql` to create and seed the database, respectively.

---
## Usage

A short video demonstration can be found here: [Click Here](https://drive.google.com/file/d/12YTn5S9Goof8Kh4fzUq_eata04GW5jEW/view)

Begin by invoking the program in the terminal by typing `node index.js`, the user will then be prompted to choose an item from the menu. Upon choosing your desired option you will be presented with either a table or additional input fields depending on which option was initially selected.

![Program Demonstration GIF](./assets/images/READMEGIF1.gif)

After the user has reached the end of a given line of questions the main menu will again be displayed.

---
## Technologies

[Inquirer](https://www.npmjs.com/package/inquirer) - Used to display/retrieve data from local files and the user in the command line.

[MySQL2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js.

[console.table](https://www.npmjs.com/package/console.table) - Adds console.table method for viewing tables created by/in MySQL.

---