import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="root123",
        database="eco_builder"
    )

@app.route('/get_airports', methods=['GET'])
def get_airports():
    db = None
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        # Use RAND() and LIMIT 3 for your specific requirement
        cursor.execute("SELECT name, latitude_deg, longitude_deg FROM all_airports ORDER BY RAND() LIMIT 3")
        airports = cursor.fetchall()
        return jsonify(airports)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if db and db.is_connected():
            cursor.close()
            db.close()

if __name__ == '__main__':
    app.run(debug=True, port=5000)