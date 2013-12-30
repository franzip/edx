# L6 PROBLEM 11

def biggest(aDict):
    '''
    aDict: A dictionary, where all the values are lists.

    returns: The key with the largest number of values associated with it
    '''
    result = None
    maxVal = 0
    for x in aDict.keys():
        if len(aDict[x]) >= maxVal:
            result = x
            maxVal = len(aDict[x])
    return result