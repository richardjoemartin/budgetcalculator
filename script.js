        var totalIncome = 0;
        var totalExpenses = 0;

        function addIncome() {
            var income = parseFloat(document.getElementById('income').value) || 0;
            totalIncome += income;
            alert(`cash added successfully`)
            updateSummary();
        }

        function addExpense() {
            var expenses = parseFloat(document.getElementById('expenses').value) || 0;
            totalExpenses += expenses;
            alert(`expence added rs${expenses}`)
            updateSummary();
        }

        function updateSummary() {
            document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
            document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);

            var balance = totalIncome - totalExpenses;
            document.getElementById('balance').textContent = "Balance: " + balance.toFixed(2);
        }
