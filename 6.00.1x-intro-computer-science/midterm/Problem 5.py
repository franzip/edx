"""
Suppose you are given two strings (they may be empty), s1 and s2. You would 
like to "lace" these strings together, by successively alternating elements of
each string (starting with the first character of s1). If one string is longer 
than the other, then the remaining elements of the longer string should simply 
be added at the end of the new string. For example, if we lace 'abcd' and 
'efghi', we would get the new string: 'aebfcgdhi'.

Write an iterative procedure, called laceStrings(s1, s2) that does this.

"""

def laceStrings(s1, s2):
    """
    s1 and s2 are strings.

    Returns a new str with elements of s1 and s2 interlaced,
    beginning with s1. If strings are not of same length, 
    then the extra elements should appear at the end.
    """
    # Your Code Here
    lacedStr = ''
    counter = 0
    # smaller tracks the length of the smaller string between s1 and s2
    if len(s1) == len(s2):
        # ex. laceString('abc', 'def')
        smaller = len(s1)
    else:
        # tail variable logic: ex. laceStrings('abc', 'defgh') -> tail = 'gh'       
        if len(s1) > len(s2):
            # ex. laceStrings('ab', 'c')
            smaller = len(s2)
            tail = s1[len(s2):]  
        else:
            # ex. laceStrings('a', 'bc')
            smaller = len(s1)
            tail = s2[len(s1):]
    while counter < smaller:
        # Keep adding s1[counter:smaller] + s2[counter:smaller]
        lacedStr += s1[counter]
        lacedStr += s2[counter]
        counter += 1
    if len(s1) != len(s2):
        # If there is one, append the tail characters.
        lacedStr += tail
    return lacedStr
    

    