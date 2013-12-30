# L5 PROBLEM 8

def isIn(char, aStr):
    '''
    char: a single character
    aStr: an alphabetized string
    
    returns: True if char is in aStr; False otherwise
    '''
    if len(aStr) <= 1:
        return char == aStr
    if char == aStr[len(aStr) / 2]:
        return True
    else:
        if char < aStr[(len(aStr) / 2)]:
            return isIn(char, aStr[0:(len(aStr)/2)])
        else:
            return isIn(char, aStr[(len(aStr)/2) + 1:])