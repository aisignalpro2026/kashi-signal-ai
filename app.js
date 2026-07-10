const button = document.getElementById("generate");
const decision = document.getElementById("decision");
const totalSignals = document.getElementById("totalSignals");
const winRate = document.getElementById("winRate");
const status = document.getElementById("status");
const currentDate = document.getElementById("currentDate");
const liveClock = document.getElementById("liveClock");
let signalCount = 0;
let today = new Date();

currentDate.innerHTML = "📅 Date: " + today.toLocaleDateString();
setInterval(function(){

    let now = new Date();

    liveClock.innerHTML = "🕒 Time: " + now.toLocaleTimeString();

},1000);
const history = document.getElementById("history");
const lastSignal = document.getElementById("lastSignal");
const clearHistory = document.getElementById("clearHistory");
const resetDashboard = document.getElementById("resetDashboard");
button.addEventListener("click", function () {

    decision.innerHTML = "🤖 AI is Analyzing...";
    lastSignal.innerHTML = "⏳ Waiting for new signal...";
    status.innerHTML = "🟡 AI Status: Analyzing...";

    button.disabled = true;
    button.innerHTML = "🤖 Analyzing...";
let count = 3;

let timer = setInterval(function(){

    decision.innerHTML = "🤖 AI is Analyzing...<br><br>⏳ " + count;

    count--;

    if(count === 0){
        clearInterval(timer);
    }

},1000);
    setTimeout(function(){

        let signals = [
"🟢 Strong Buy",
"🟡 Weak Buy",
"🔴 Strong Sell",
"🟠 Weak Sell",
"⚪ Wait"
];

let pair = document.getElementById("pair").value;
let time = document.getElementById("time").value;

let randomSignal = signals[Math.floor(Math.random() * signals.length)];

let accuracy = Math.floor(Math.random() * 11) + 90; // 90-100%
let accuracyColor =
accuracy >= 97 ? "#00ff88" :
accuracy >= 94 ? "#ffd700" :
"#ff6666";

let trend =
randomSignal.includes("Buy") ? "📈 UP TREND" :
randomSignal.includes("Sell") ? "📉 DOWN TREND" :
"⏳ SIDEWAYS";

let now = new Date();

let currentTime = now.toLocaleTimeString();

decision.innerHTML =
"📈 Pair: " + pair +
"<br>⏱ Time: " + time +
"<br><br>" +
randomSignal +
"<br><br>🎯 Accuracy: <span style='color:" + accuracyColor + "'>" + accuracy + "%</span>" +
"<br>" + trend +
"<br>🕒 " + currentTime;
lastSignal.innerHTML =
randomSignal + " | " + pair + " | " + time +
"<br><small>🕒 Generated at: " + currentTime + "</small>";
if(history.innerHTML.includes("No signals yet...")){
    history.innerHTML = "";
}

history.innerHTML =
"📌 " + pair + " | " +
time + " | " +
randomSignal +
"<br>" +
history.innerHTML;
signalCount++;
winRate.innerHTML = (90 + Math.floor(Math.random() * 11)) + "%";
totalSignals.innerHTML = signalCount;
status.innerHTML = "🟢 AI Status: Online";
        button.disabled = false;
        button.innerHTML = "Generate AI Signal";
      

    },3000);

});
clearHistory.addEventListener("click", function(){

    let confirmClear = confirm("Are you sure you want to clear history?");

    if(confirmClear){
        history.innerHTML = "No signals yet...";
    }

});
resetDashboard.addEventListener("click", function(){

    signalCount = 0;
    totalSignals.innerHTML = "0";

    winRate.innerHTML = "95%";

    lastSignal.innerHTML = "No signal yet...";

    history.innerHTML = "No signals yet...";

});
