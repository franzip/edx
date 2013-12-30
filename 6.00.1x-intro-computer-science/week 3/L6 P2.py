# L6 PROBLEM 2

def oddTuples(aTup):
    '''
    aTup: a tuple
    
    returns: tuple, every other element of aTup. 
    '''
    newT = ()
    for x in range(len(aTup)):
        if x % 2 == 0:
            newT += (aTup[x],)
    return newT
        