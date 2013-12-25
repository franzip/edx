"""
Week 2 PS 1.1
Write a program that counts up the number of vowels contained in the string s. 
Valid vowels are: 'a', 'e', 'i', 'o', and 'u'. 
For example, if s = 'azcbobobegghakl', your program should print:
Number of vowels: 5

"""
count = 0

for char in s:
    if char in 'aeiou':
        count += 1
        
print 'Number of vowels: ' + str(count)