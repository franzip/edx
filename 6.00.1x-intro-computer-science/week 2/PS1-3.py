"""
Assume s is a string of lower case characters.
Write a program that prints the longest substring of s in which the letters 
occur in alphabetical order. For example, if s = 'azcbobobegghakl', then your
program should print:
Longest substring in alphabetical order is: beggh
In the case of ties, print the first substring. 
For example, if s = 'abcbcd', then your program should print:
Longest substring in alphabetical order is: abc

"""

left = 0        
longest = ''     
# Loop through s[:-1] updating left and right indexes at each iteration. 
while left < len(s) - 1:
    toCompare = s[left]
    flag = True  
    right = left + 1
    # The inner loop goes through s[right:] and keep adding characters in  
    # toCompare as long as characters are alphabetically ordered.
    while right < len(s) and flag:
        if ord(s[right]) < ord(s[left]):
            flag = False
        else:
            toCompare += s[right]
            left += 1
        right += 1
    # Keep properly updating the output variable at each outer loop iteration
    if len(toCompare) > len(longest):
        longest = toCompare
    left += 1
    
print longest