# Assignment_8

# Employee Management Application

## Overview

The Employee Management Application is a simple web-based tool that allows users to manage a list of employees. Built with HTML, CSS, and JavaScript, it provides an interactive interface where users can view, add, and delete employee records. 

## Features

- **Display Employees**: On page load, a table with the default employees is displayed. Each employee entry includes their name, title, extension, and a delete button.
- **Add Employees**: Users can add new employees by entering a name, title, and extension number in the provided text fields and clicking the "Add" button.
- **Delete Employees**: Each employee row has a delete button that removes the employee from the list.
- **Form Validation**: JavaScript ensures that all fields are filled before an employee can be added. Missing fields will show a "Required field" error message next to the relevant input.
- **Employee Count**: The application displays the current number of employees, which updates dynamically as employees are added or removed.

## Project Structure

```plaintext
Employee-Management-Application/
├── index.html              # Main HTML file
├── styles/
│   └── styles.css          # CSS styles for layout and design
├── js/
│   └── employee-management.js  # JavaScript for DOM manipulation and logic
└── README.md               # Project information and instructions

 
