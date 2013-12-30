# L6 PROBLEM 7A

def applyToEach(L, f):
    for i in range(len(L)):
        L[i] = f(L[i])
        
testList = [1, -4, 8, -9]

# >>> print testList
#  [1, 4, 8, 9]

applyToEach(testList, abs)

# L6 PROBLEM 7B

# >>> print testList
# [2, -3, 9, -8]

def addOne(inp):
    return inp + 1
    
applyToEach(testList, addOne)

# L6 PROBLEM 7C  

# >>> print testList
# [1, 16, 64, 81]

def square(x):
    return x**2

applyToEach(testList, square)