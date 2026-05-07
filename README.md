# 🌍 Eco-Pilot: Sky Restoration
### **Final Project | Group 5**

Eco-Pilot: Sky Restoration is a strategic aviation simulation designed to challenge players' decision-making regarding environmental sustainability. Players must navigate a global network of airports to collect components for an atmospheric restoration machine while managing a finite carbon budget.

---

## 👥 Meet the Team (Group 5)
* **Santosh Khanal**: Lead Developer (Database Logic, Python Backend, Haversine Calculations)
* **Dipesh Yogi**: Project Coordinator (Documentation, Quality Assurance, Scheduling)
* **Mohammad Moynul**: Infrastructure Lead (System Architecture, UI Design, Deployment)

---

## 📖 Project Background & Narrative
The world is at a climatic tipping point. To reverse the damage, a "Carbon-Builder" machine must be assembled. As an Eco-Pilot, you are the last hope to transport 5 critical components across the globe. However, every flight releases CO2, potentially worsening the very crisis you are trying to solve.

### **The Challenge**
* **The Mission**: Visit **10 airports** and collect **5 machine parts**.
* **The Resource**: You start with **10,000 CO2 units**.
* **The Parts**: Electric Motor, Battery Pack, Air Filter, Propeller, and Solar Panel.

---

## 🎮 Game Mechanics (User Manual)

### **1. Navigation**
Players are presented with 3 destination options at each turn. Distances are calculated using real-world Latitude/Longitude coordinates from our database.

### **2. The Probability System**
To win, you must find 5 parts. However, parts are not guaranteed.
* **40% Discovery Chance**: Every time you land at a new airport, there is a 40% probability that a part will be found.
* **Strategic Failure**: If the "random drop chance" does not work in your favor within the 10-airport limit, or if you exceed 10,000 CO2 units, the mission fails.

### **3. HUD (Heads-Up Display)**
The interface updates in real-time to show:
* Current Location
* Remaining CO2 Budget
* Inventory (Collected Parts)
* Total Airports Visited

---

## 🛠️ Technical Stack & Architecture

### **Backend: Python & Flask**
The core engine is built with **Flask**. It handles the game state, processes the 40% RNG logic, and performs the **Haversine Formula** to calculate distances between global coordinates.

### **Database: MySQL**
We utilize a relational database containing over **10,000 airports**. 
* **Spatial Data**: Used to fetch nearby airports and track player location.
* **Persistence**: Stores player inventory and carbon history.

### **Frontend: JavaScript & Fetch API**
To ensure a smooth, professional UX, we used the **Fetch API**. This allows the game to update the HUD and markers on the **Leaflet.js** map asynchronously—meaning the page never has to refresh during gameplay.

---

## 🚀 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/khanalsantosh260-Igtm/eco-pilot-game](https://github.com/khanalsantosh260-Igtm/eco-pilot-game)
    ```

2.  **Install Dependencies**
    ```bash
    pip install flask mysql-connector-python
    ```

3.  **Database Setup**
    * Import the provided `airports.sql` file into your MySQL instance.
    * Update the database connection details in `app.py`.

4.  **Launch the Application**
    ```bash
    python app.py
    ```
    Open `http://127.0.0.1:5000` in your web browser.

---

## 🔮 Future Roadmap
* **Dynamic Weather**: Integrating a Weather API to adjust CO2 costs based on real-time wind speeds.
* **Vessel Upgrades**: Allowing players to upgrade their plane for better fuel efficiency.
* **Global Leaderboard**: Ranking pilots based on the amount of CO2 saved during successful missions.

---

## 📜 License
This project was developed for academic purposes. All rights reserved by Group 5.
