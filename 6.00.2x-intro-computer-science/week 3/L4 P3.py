def stdDevOfLengths(L):
    """
    Write a function, stdDevOfLengths(L) that takes in a list of strings, L, and 
    outputs the standard deviation of the lengths of the strings. Return 
    float('NaN') if L is empty.
    """
    if not L:
        return float('NaN')
    mean = sum([len(x) for x in L]) / float(len(L))
    return (sum([(len(x) - mean)**2 for x in L]) / len(L))**0.5
    
    
        