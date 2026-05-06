let co2Budget = 10000;
let attemptsLeft = 10;
let availableSlots = [0, 1, 2, 3, 4];
let map, markers = [];
let currentPos = [0, 0];
const partNames = ["Solar Panel", "Gearbox", "Battery", "Turbine", "Power Crystal"];

// High-quality Sound Links
const sounds = {
    boot: "https://codesandbox.io/api/v1/sandboxes/sy689/assets/startup.mp3",
    fly: "https://codesandbox.io/api/v1/sandboxes/sy689/assets/engine.mp3",
    success: "https://codesandbox.io/api/v1/sandboxes/sy689/assets/success.mp3",
    fail: "https://codesandbox.io/api/v1/sandboxes/sy689/assets/fail.mp3",
    click: "https://codesandbox.io/api/v1/sandboxes/sy689/assets/click.mp3"
};

function playSnd(url) {
    const a = new Audio(url);
    a.volume = 0.5;
    a.play().catch(() => console.log("Sound blocked by browser"));
}

function handleLogin() {
    const name = document.getElementById('player-name-input').value;
    if (!name) return;

    playSnd(sounds.boot);
    document.getElementById('login-screen').style.display = 'none';
    const greetScreen = document.getElementById('greeting-screen');
    const greetText = document.getElementById('greeting-text');

    greetScreen.style.display = 'flex';
    greetText.innerText = `Welcome Aboard, Pilot ${name}`;

    setTimeout(() => {
        greetScreen.style.display = 'none';
        startGame(name);
    }, 3000);
}

function startGame(name) {
    document.getElementById('game-screen').style.display = 'flex';
    document.getElementById('pilot-name-display').innerText = `Engineer: ${name}`;
    const log = document.getElementById('mission-log');
    log.innerHTML = `<div> [ LOG INITIALIZED ] </div>`;
    updateUI();
    initMap();
    fetchAirports();
}

function toggleSettings() {
    playSnd(sounds.click);
    const panel = document.getElementById('settings-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function updateUI() {
    document.getElementById('co2-val').innerText = co2Budget;
    document.getElementById('attempts-val').innerText = attemptsLeft;
}

async function fetchAirports() {
    const list = document.getElementById('airport-list');
    list.innerHTML = `<div style="color:var(--accent)">📡 Scanning Coordinates...</div>`;
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    try {
        const res = await fetch(`http://127.0.0.1:5000/get_airports?t=${Date.now()}`);
        const data = await res.json();
        list.innerHTML = "";

        data.forEach(ap => {
            const cost = Math.floor(Math.random() * 300) + 200;
            const btn = document.createElement('button');
            btn.className = 'airport-btn';
            btn.innerHTML = `<span>✈️ ${ap.name.substring(0,20)}</span> <span style="color:var(--danger)">-${cost}KG</span>`;

            const targetCoords = [parseFloat(ap.latitude_deg), parseFloat(ap.longitude_deg)];

            btn.onclick = () => {
                playSnd(sounds.click);
                list.innerHTML = "";
                animateFlight(ap.name, cost, targetCoords);
            };
            list.appendChild(btn);
            markers.push(L.marker(targetCoords).addTo(map));
        });
        if(markers.length > 0) map.fitBounds(new L.featureGroup(markers).getBounds().pad(0.3));
    } catch (e) { list.innerHTML = "Signal Lost"; }
}

function animateFlight(name, cost, targetCoords) {
    playSnd(sounds.fly);
    const planeIcon = L.divIcon({ html: '✈️', className: 'plane-icon', iconSize: [40, 40], iconAnchor: [20, 20] });
    const flightMarker = L.marker(currentPos, { icon: planeIcon }).addTo(map);
    map.flyTo(targetCoords, 4, { duration: 2 });

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / 2000;
        if (progress < 1) {
            const lat = currentPos[0] + (targetCoords[0] - currentPos[0]) * progress;
            const lng = currentPos[1] + (targetCoords[1] - currentPos[1]) * progress;
            flightMarker.setLatLng([lat, lng]);
            requestAnimationFrame(step);
        } else {
            map.removeLayer(flightMarker);
            currentPos = targetCoords;
            processArrival(name, cost);
        }
    }
    requestAnimationFrame(step);
}

function processArrival(name, cost) {
    co2Budget -= cost;
    attemptsLeft -= 1;
    updateUI();
    const log = document.getElementById('mission-log');
    log.innerHTML += `<div>> Landed: ${name}</div>`;

    // 60% Chance to find a part
    if (Math.random() < 0.6 && availableSlots.length > 0) {
        playSnd(sounds.success);
        const id = availableSlots.shift();
        document.getElementById(`part-${id}`).classList.add('part-found');
        log.innerHTML += `<div style="color:var(--success)">> HURRAY! Recovered ${partNames[id]} ✨</div>`;
    } else {
        log.innerHTML += `<div style="color:#64748b">> Sector scanned. No parts found.</div>`;
    }
    log.scrollTop = log.scrollHeight;

    if (availableSlots.length === 0) {
        showResult("MISSION COMPLETE", "Planet Restored! Excellent work, Pilot.", "#10b981");
    } else if (co2Budget <= 0 || attemptsLeft <= 0) {
        playSnd(sounds.fail);
        showResult("MISSION FAILED", "Fuel exhausted. Grounded.", "#f43f5e");
    } else {
        fetchAirports();
    }
}

function initMap() {
    map = L.map('map-container').setView([0, 0], 2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
}

function showResult(title, msg, color) {
    document.getElementById('status-overlay').style.display = 'flex';
    document.getElementById('status-title').innerText = title;
    document.getElementById('status-title').style.color = color;
    document.getElementById('status-msg').innerText = msg;
}