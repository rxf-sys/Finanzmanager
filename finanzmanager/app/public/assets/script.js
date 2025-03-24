const accountsList = document.getElementById('accountsList');
const transactionsList = document.getElementById('transactionsList');
const goalsList = document.getElementById('goalsList');

// Dark Mode Toggle
document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 📂 Accounts
async function loadAccounts() {
  const res = await fetch('/api/accounts');
  const accounts = await res.json();
  accountsList.innerHTML = '';
  accounts.forEach(account => {
    accountsList.innerHTML += `
      <div class="list-group-item">
        ${account.name} - ${account.balance.toFixed(2)}€
      </div>`;
  });
}

document.getElementById('accountForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  await fetch('/api/accounts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  e.target.reset();
  loadAccounts();
  bootstrap.Modal.getInstance(document.getElementById('addAccountModal')).hide();
});

// 📂 Transactions (vereinfachtes Beispiel)
async function loadTransactions() {
  const res = await fetch('/api/transactions');
  const transactions = await res.json();
  transactionsList.innerHTML = '';
  transactions.forEach(tx => {
    transactionsList.innerHTML += `
      <div class="list-group-item">
        ${tx.amount.toFixed(2)}€ - ${tx.category || 'Keine Kategorie'}
      </div>`;
  });
}

document.getElementById('transactionForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  // Beispiel: wir setzen das erste Konto als Standard (anpassen!)
  const accounts = await (await fetch('/api/accounts')).json();
  if (accounts.length === 0) return alert('Bitte erst ein Konto erstellen!');
  data.account = accounts[0]._id;

  await fetch('/api/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  e.target.reset();
  loadTransactions();
  bootstrap.Modal.getInstance(document.getElementById('addTransactionModal')).hide();
});

// 📂 Goals
async function loadGoals() {
  const res = await fetch('/api/goals');
  const goals = await res.json();
  goalsList.innerHTML = '';
  goals.forEach(goal => {
    goalsList.innerHTML += `
      <div class="list-group-item">
        ${goal.title}: ${goal.currentAmount.toFixed(2)}€ / ${goal.targetAmount.toFixed(2)}€
      </div>`;
  });
}

document.getElementById('goalForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  await fetch('/api/goals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  e.target.reset();
  loadGoals();
  bootstrap.Modal.getInstance(document.getElementById('addGoalModal')).hide();
});

// Beim Laden
loadAccounts();
loadTransactions();
loadGoals();
