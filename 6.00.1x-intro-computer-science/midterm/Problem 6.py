"""
Write a recursive procedure, called laceStringsRecur(s1, s2), which also laces 
together two strings. Your procedure should not use any explicit loop 
mechanism, such as a for or while loop. We have provided a template of the code;
your job is to insert a single line of code in each of the indicated places.

For this problem, you must add exactly one line of code in each of the three 
places where we specify to write a line of code. If you add more lines, your 
code will not count as correct.

"""

def laceStringsRecur(s1, s2):
    """
    s1 and s2 are strings.

    Returns a new str with elements of s1 and s2 interlaced,
    beginning with s1. If strings are not of same length, 
    then the extra elements should appear at the end.
    """
    def helpLaceStrings(s1, s2, acc):
        # Base case 1a: when the first string is empty, just return the 
        # concatenation of the accumulator with what remains of s2
        if s1 == '':
            return acc + s2
        # Base case 1b: same as above
        if s2 == '': 
            return acc + s1
        else:
        # Keep left stripping the two strings until one of them is empty.
        # Keep track of the characters concatenations into the accumulator.
            return helpLaceStrings(s1[1:], s2[1:], acc + s1[0] + s2[0])
            
    return helpLaceStrings(s1, s2, '')
    

