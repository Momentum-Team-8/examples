students = ["Robert", "Sara", "Roan"]

# we want to make this:
# {"Robert": 1, "Sara": 3, "Roan": 5}

d = {}

print("Here's our empty dictionary", d)

d["Robert"] = 1

print("Here's the dictionary with a new key: ", d)

d[students[1]] = 3

print("Did that work?", d)

last_student = students[-1]

print("Now I want to add the last student, who is ", last_student)

# d.append(last_student)
# d.last_student
d[last_student] = 5

print("Did that work?", d)

another = "Quinten"
d[another] = 6

print("what does it look like now?", d)

# How can I change Robert's value from 1 to 2?

print("Robert's count is", d["Robert"])

print("Updating by 1!")

# increment by 1
# In JS, we do ++ AND +=
d["Robert"] += 1

print("Robert's count is", d["Robert"])
print(d)
print("What is the type of thing we just saved to Robert's count?", type(d["Robert"]))
