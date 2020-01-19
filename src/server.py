# https://docs.python.org/3/library/enum.html
# datetime.datetime.now().strftime('%m/%d/%Y - %H:%M:%S')
import json
from flask import Flask, request
import threading
import time
import requests
from enum import Enum
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/students")
def students():
    return json.dumps(students)


@app.route('/students/sid')
def get_student():
    studentId = request.args.get('id')
    return json.dumps([user for user in students if user['id'] == studentId ]) 


#alternate method
# @app.route('/students/id/<int: id>', methods=['POST'])
# def add_student_id(id):
#     print(id)
#     return "SUCCESS"


students = [
    {
        "id": "1",
        "first_name": "Harry",
        "last_name": "Potter",
        "created": "2020-01-01",
        "last_update": "2020-01-01",
        "skills": [{"Animation": "4", "Illusion": "3", "Invisibility": "4", "Invulnerability": 3, "Summoning": "4", "Water breathing": "3"}],
        "desired_skills": [{"Alchemy": "5", "Animation": "5", "Illusion": "5", "Invisibility": "5", "Invulnerability": "5", "Summoning": "5", "Water breathing": "5"}],
        "courses_of_interest": list({"Alchemy advanced", "Magic for day-to-day life", "Dating with magic"}),
    },
       {
        "id": "2",
        "first_name": "Hermione",
        "last_name": "Granger",
        "created": "2020-01-02",
        "last_update": "2020-01-02",
        "skills": [{"Animation": "5", "Conjuror": "4", "Healing": "4", "Illusion": "4", "Summoning": "4"}],
        "desired_skills": [{"Alchemy": "5", "Conjuror": "5", "Healing": "5", "Illusion": "5", "Summoning": "5"}],
        "courses_of_interest": list({"Alchemy advanced", "Magic for day-to-day life", "Magic for medical professionals", "Dating with magic"}),
    },
    {
        "id": "3",
        "first_name": "Ron",
        "last_name": "Weasley",
        "created": "2020-01-03",
        "last_update": "2020-01-03",
        "skills": [{"Animation": "2", "Illusion": "2", "Summoning": "3"}],
        "desired_skills": [{"Animation": "5", "Illusion": "5", "Summoning": "5", "Water breathing": "3"}],
        "courses_of_interest": list({"Magic for day-to-day life", "Dating with magic"}),
    },
    {
        "id": "4",
        "first_name": "Luna",
        "last_name": "Lovegood",
        "created": "2020-01-10",
        "last_update": "2020-01-10",
        "skills": [{"Elemental": 1, "Healing": "4", "Illusion": "4", "Omniscient": "1", "Summoning": "4"}],
        "desired_skills": [{"Conjuror": "5", "Healing": "5", "Invisibility": "5", "Water breathing": "4"}],
        "courses_of_interest": list({"Alchemy advanced", "Magic for medical professionals"}),
    },
    {
        "id": "5",
        "first_name": "Draco",
        "last_name": "Malfoy",
        "created": "2020-01-18",
        "last_update": "2020-01-18",
        "skills": [{"Alchemy": "3", "Conjuror": "3", "Illusion": "4", "Summoning": "4"}],
        "desired_skills": [{"Conjuror": "5", "Disintegration": "5", "Elemental": "5", "Illusion": "5", "Immortality": "5", "Invisibility": "5", "Invulnerability": "5", "Necromancer": "5", "Omnipresent": "5", "Omniscient": "5", "Poison": "5", "Possession": "5"}],
        "courses_of_interest": list({"Alchemy advanced"}),
    },
]



@app.route('/students/addnew', methods=['POST'])
def add_student():
    new_student = request.get_json() 
    next_id = int(students[-1]['id']) + 1
    new_student['id'] = str(next_id)
    students.append(new_student)
    return new_student


if __name__ == "__main__":
    app.run(host="localhost", port=7000, debug=True)


