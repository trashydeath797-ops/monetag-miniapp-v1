function submitWithdraw() {
  const method = document.getElementById("method").value;
  const account = document.getElementById("account").value;
  const amount = parseInt(document.getElementById("amount").value);

  if (!account || isNaN(amount) || amount <= 0) {
    alert("❌ Please enter valid account and amount.");
    return;
  }

  if (amount > userPoints) {
    alert("❌ Not enough points.");
    return;
  }

  // Deduct points
  userPoints -= amount;
  updatePointsUI();

  // ✅ Send to backend
  fetch("https://monetag-miniapp-withdraw.onrender.com/withdraw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      method,
      account,
      amount
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      alert("✅ Withdraw request submitted successfully!");
    } else {
      alert("❌ Failed to send request.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Network error.");
  });
}
