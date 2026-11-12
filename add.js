document.getElementById("saveBtn").addEventListener("click", function () {
  var description = document.getElementById("description").value;
  var amount = document.getElementById("amount").value;
  var expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push({ description: description, amount: amount });
  localStorage.setItem("expenses", JSON.stringify(expenses));
  window.location.href = "expenses.html";
});