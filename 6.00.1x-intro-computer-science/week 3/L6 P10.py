# L6 PROBLEM 10

def howMany(aDict):
    '''
    aDict: A dictionary, where all the values are lists.

    returns: int, how many values are in the dictionary.
    '''
    count = 0
    for li in aDict.values():
        for sub in li:
            count += 1
    return count
        