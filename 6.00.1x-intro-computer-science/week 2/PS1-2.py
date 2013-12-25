"""
Week 2 PS 1.2
Assume s is a string of lower case characters.
Write a program that prints the number of times the string 'bob' occurs in s. 
For example, if s = 'azcbobobegghakl', then your program should print
Number of times bob occurs is: 2

"""
bobCounter = 0    # Pattern counter
strCounter = 0    # String counter

while strCounter < len(s) - 1:
    if s[strCounter:strCounter+3] == 'bob':
        bobCounter += 1
    strCounter += 1

print 'Number of times bob occurs is: ' + str(bobCounter)
    