# L5 PROBLEM 6

def lenIter(aStr):
    '''
    aStr: a string
    
    returns: int, the length of aStr
    '''
    count = 0
    for x in aStr:
        if x in ('qwertyuiopasdfghjklzxcvbnm'):
            count += 1
    return count
    