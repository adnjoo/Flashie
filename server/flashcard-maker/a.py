import json
 
# Opening JSON file
f = open('a.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)
 
for i, idx in enumerate(data):
    print(data[i]['front'])

# Closing file
f.close()