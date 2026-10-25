// GeoAlert student demo: values are randomly simulated, not live sensor data.
const thresholds = { rainfall: 50, moisture: 80, movement: 10 };

function generateReadings() {
  return {
    rainfall: Math.round(Math.random() * 90),
    moisture: Math.round(Math.random() * 100),
    movement: Math.round(Math.random() * 15 * 10) / 10
  };
}

function assessRisk(readings) {
  const triggers = [];
  if (readings.rainfall >= thresholds.rainfall) triggers.push("high rainfall");
  if (readings.moisture >= thresholds.moisture) triggers.push("high soil moisture");
  if (readings.movement >= thresholds.movement) triggers.push("ground movement");
  if (triggers.length >= 2) return { level: "HIGH RISK (DEMO)", triggers };
  if (triggers.length === 1) return { level: "CAUTION (DEMO)", triggers };
  return { level: "NORMAL (DEMO)", triggers };
}

function updateDashboard() {
  const readings = generateReadings();
  const result = assessRisk(readings);
  document.getElementById("rainfall").textContent = readings.rainfall;
  document.getElementById("moisture").textContent = readings.moisture;
  document.getElementById("movement").textContent = readings.movement.toFixed(1);

  const status = document.getElementById("status");
  status.textContent = result.level;
  status.className = "status";
  if (result.level.startsWith("CAUTION")) status.classList.add("warning");
  if (result.level.startsWith("HIGH")) status.classList.add("danger");

  document.getElementById("explanation").textContent = result.triggers.length
    ? "Triggered indicators: " + result.triggers.join(", ") + "."
    : "No example threshold was crossed in these simulated readings.";
}

document.getElementById("simulate").addEventListener("click", updateDashboard);
updateDashboard();
