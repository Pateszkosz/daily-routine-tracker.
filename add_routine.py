import json
import os
from datetime import datetime

# Az alapértelmezett napi rutin sablon
default_routine = {
    "tasks": [
        { "text": "Reggeli", "done": False },
        { "text": "Edzés", "done": False },
        { "text": "Munka", "done": False }
    ],
    "notes": ""
}

# A napi rutinokat tartalmazó JSON fájl elérési útja
routines_file = 'routines.json'

# Az aktuális dátum
today = datetime.now().strftime('%Y-%m-%d')

# Az új napi rutin
new_routine = {
    "date": today,
    "tasks": default_routine["tasks"],
    "notes": default_routine["notes"]
}

# A JSON fájl beolvasása
if os.path.exists(routines_file):
    with open(routines_file, 'r') as file:
        routines = json.load(file)
else:
    routines = []

# Az új napi rutin hozzáadása
routines.append(new_routine)

# Az új napi rutinok JSON fájlba írása
with open(routines_file, 'w') as file:
    json.dump(routines, file, indent=4)

print(f'Napi rutin hozzáadva: {today}')