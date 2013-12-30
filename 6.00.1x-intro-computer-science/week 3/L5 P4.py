# L5 PROBLEM 4

def gcdIter(a, b):
    '''
    a, b: positive integers
    
    returns: a positive integer, the greatest common divisor of a & b.
    '''
    test = min(a,b)
    while test > 0:
        if a % test == 0 and b % test == 0:
            return test
        test -= 1
