✈️ Eco-Pilot: Sky Restoration – Project Manual
Group 5 Final Project A Sustainable Aviation Strategy & Simulation Game

📖 1. Project Introduction
Eco-Pilot: Sky Restoration is an interactive simulation designed to educate players on the environmental impact of aviation. In a world facing climatic collapse, players take on the role of a pilot who must navigate the globe to collect components for an atmospheric restoration machine.

The Goal
Players must visit 10 unique airports and successfully collect 5 essential parts to save the planet. All of this must be achieved before the 10,000 CO2 unit budget is depleted.

👥 2. Project Team (Group 5)
Santosh Khanal: Lead Developer (Database logic, Haversine formulas, Backend integration).

Dipesh Yogi: Project Coordinator (Team communication, Documentation, Quality Assurance).

Mohammad Moynul: Infrastructure Lead (System architecture, Deployment, Report structure).

🎮 3. Game Mechanics & Manual
The Resources
Carbon Budget: You start with 10,000 units. Every kilometer flown deducts a specific amount of CO2.

The Machine Parts: You must find the Electric Motor, Battery Pack, Air Filter, Propeller, and Solar Panel.

The Probability Logic
Discovery Chance: There is a 40% random drop chance for a part at every new airport you land at.

Strategic Risk: Because the drop rate is randomized, players must decide between taking long, expensive flights to new regions or staying within a localized area to save fuel.

Win/Loss Conditions
Victory: Collect all 5 parts and visit 10 airports while CO2 > 0.

Failure: Running out of CO2 before the machine is complete.

🛠️ 4. Technical Architecture
The application is built using a modern full-stack web architecture to ensure high performance and a smooth user interface.

Database (MySQL): Stores a dataset of 10,000+ real-world airports. It handles spatial queries to calculate distances between coordinates.

Backend (Python Flask): Processes the game logic, manages the session state, and performs the probability calculations.

Frontend (HTML/CSS/JS):

Leaflet.js: Renders the interactive global map.

Fetch API: Enables asynchronous updates. The game HUD (Heads-Up Display) updates fuel and inventory without reloading the page.

🚀 5. Installation & Setup
Follow these steps to run the project locally:

Clone the Repository

Bash
git clone https://github.com/khanalsantosh260-Igtm/eco-pilot-game
Environment Setup
Ensure you have Python 3.10+ and MySQL installed.

Install Dependencies

Bash
pip install flask mysql-connector-python
Database Configuration
Import the provided .sql file into your MySQL workbench. Update the database credentials in the app.py or config.py file.

Launch the Game

Bash
python app.py
Open http://127.0.0.1:5000 in your web browser.

📈 6. Future Development Roadmap
To further enhance the simulation, the following features are planned:

Live Weather API: Real-time wind speed affecting CO2 consumption.

Upgrade Shop: Use "Eco-Credits" to upgrade the plane's engine for better efficiency.

Multiplayer Leaderboards: Compare your carbon-efficiency score with other pilots worldwide.

Reforestation Zones: Special airports where players can perform tasks to "earn back" CO2 units.

📜 7. License
This project was developed for academic purposes. All code and assets are the property of Group 5.
