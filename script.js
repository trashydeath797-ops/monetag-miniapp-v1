let points = 0;

// UI update
function updatePoints() {
  document.getElementById("points").innerText = points;
}

// Ad dekhale 40 point barabe
function showAd() {
  show_9628733('pop')
    .then(() => {
      points += 40;
      updatePoints();
      alert("✅ 40 points added!");
    })
    .catch((e) => {
      console.log("Ad error:", e);
    });
}