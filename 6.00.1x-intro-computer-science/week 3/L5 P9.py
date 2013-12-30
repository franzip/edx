# L5 PROBLEM 9

def semordnilap(str1, str2):
    '''
    str1: a string
    str2: a string
    
    returns: True if str1 and str2 are semordnilap;
             False otherwise.
    '''
    if len(str1) != len(str2):
        return False
    if len(str1) == 1 and len(str2) == 1:
        return str1 == str2
    return str1[0] == str2[-1] and semordnilap(str1[1:], str2[0:-1])