# Eco-Pilot: Sky Restoration 🌍✈️

**Eco-Pilot: Sky Restoration** is a strategic aviation simulation developed by **Group 5**. The project combines geospatial data, resource management, and environmental storytelling to highlight the challenges of sustainable travel.

## 👥 Project Team (Group 5)
* **Santosh Khanal**: Lead Developer (Database Architecture & Core Logic)
* **Dipesh Yogi**: Project Coordinator (Communication & Scheduling)
* **Mohammad Moynul**: Infrastructure Lead (System Structure & Deployment)

## 🎮 Game Concept
In a future plagued by climatic disruption, you are a pilot tasked with building an atmospheric restoration machine.
* **Goal**: Visit 10 airports and collect 5 essential parts (Motor, Battery, Filter, Propeller, Solar Panel).
* **Constraint**: 10,000 CO2 budget. Every flight costs fuel.
* **The Challenge**: A **40% random drop chance** for parts requires strategic route optimization.

## 🛠️ Technical Stack
* **Database**: MySQL (Managing 10,000+ airport coordinates).
* **Backend**: Python Flask (Haversine distance formulas & game logic).
* **Frontend**: JavaScript (Fetch API for no-refresh HUD updates & Leaflet.js for mapping).

## 🚀 Installation
1. Clone the repo: `git clone https://github.com/khanalsantosh260-Igtm/eco-pilot-game`
2. Install dependencies: `pip install flask mysql-connector-python`
3. Run: `python app.py`
