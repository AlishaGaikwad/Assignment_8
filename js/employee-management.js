/*eslint-env browser*/

"use strict";

const $ = (id) => document.getElementById(id);

const employeeList = [
    ["Sally Smith", "Quality Assurance", 3423],
    ["Mark Martin", "VP Sales", 3346],
    ["John Johnson", "Marketing", 3232],
    ["Dave", "Real estate", 5346],
    ["Michel", "Business", 4186]
];

window.addEventListener("load", () => {
    resetForm();
    displayEmployees();
    $("add-button").addEventListener("click", (e) => {
        e.preventDefault();
        addEmployee();
    });

    // Clear error messages on input change
    ["name", "title", "extension"].forEach((id) => {
        $(id).addEventListener("input", () => clearError(id));
    });
});

function displayEmployees() {
    const employeeRows = $("display-employee-rows");
    employeeRows.innerHTML = ""; // Clear existing data

    employeeList.forEach((employee, index) => {
        const row = document.createElement("tr");

        ["0", "1", "2"].forEach((i) => {
            const cell = document.createElement("td");
            cell.textContent = employee[i];
            row.appendChild(cell);
        });

        const deleteBtnCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => deleteEmployee(index));
        deleteBtnCell.appendChild(deleteBtn);
        row.appendChild(deleteBtnCell);

        employeeRows.appendChild(row);
    });

    $("employee-count").textContent = `Showing ${employeeList.length} Employees`;
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    displayEmployees();
}

function addEmployee() {
    const name = $("name").value;
    const title = $("title").value;
    const extension = $("extension").value;

    // Clear all existing error messages
    ["name-block", "title-block", "extension-block"].forEach(clearAllErrors);

    if (!name) $("name-block").appendChild(createRequiredField());
    if (!title) $("title-block").appendChild(createRequiredField());
    if (!extension) $("extension-block").appendChild(createRequiredField());

    if (name && title && extension) {
        employeeList.push([name, title, extension]);
        displayEmployees();
        resetForm();
    }
}

function resetForm() {
    $("name").value = "";
    $("title").value = "";
    $("extension").value = "";
}

// Function to create the error message
function createRequiredField() {
    const requiredEle = document.createElement("span");
    requiredEle.textContent = "Required field";
    requiredEle.className = "required";
    return requiredEle;
}

// Function to clear a specific error message
function clearError(id) {
    const block = $(id + "-block");
    const error = block.querySelector(".required");
    if (error) block.removeChild(error);
}

// Function to clear all error messages in a given block
function clearAllErrors(blockId) {
    const block = $(blockId);
    const error = block.querySelector(".required");
    if (error) block.removeChild(error);
}
