"""
Write a simple procedure, myLog(x, b), that computes the logarithm of a number 
x relative to a base b. For example, if x = 16 and b = 2, then the result is 
4 - because 24=16. If x = 15 and b = 3, then the result is 2 - because 32 is 
the largest power of 3 less than 15.

In other words, myLog should return the largest power of b such that b to that 
power is still less than or equal to x.

x and b are both positive integers; b is an integer greater than or equal to 2. 
Your function should return an integer answer.

Do not use Python's log functions; instead, please use an iterative or 
recursive solution to this problem that uses simple arithmatic operators and 
conditional testing.

"""

def myLog(x, b):
    '''
    x: a positive integer
    b: a positive integer; b >= 2

    returns: log_b(x), or, the logarithm of x relative to a base b.
    '''
    # Please note that this log definition is NOT mathematically accurate 
    # but DOES work with the problem specs.
    
    # Base case 1: log(n, n) = 1 for all real numbers.
    if x == b:
        return 1
    # Base case 2 to stop recursive calls when x is less than its base.
    elif x < b:
        return 0
    else:
    # Recursively reduce the problem size along with our x size
        return 1 + myLog (x / b, b)
        