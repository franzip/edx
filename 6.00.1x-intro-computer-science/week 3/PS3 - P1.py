"""
Please read the Hangman Introduction before starting this problem. The helper 
functions you will be creating in the next three exercises are simply 
suggestions, but you DO have to implement them if you want to get points for 
this Hangman Problem Set. If you'd prefer to structure your Hangman program in 
a different way, feel free to redo this Problem Set in a different way. 
However, if you're new to programming, or at a loss of how to construct this 
program, we strongly suggest that you implement the next three helper functions 
before continuing on to Hangman Part 2.

We'll start by writing 3 simple functions that will help us easily code the 
Hangman problem. First, implement the function isWordGuessed that takes in two 
parameters - a string, secretWord, and a list of letters, lettersGuessed. This 
function returns a boolean - True if secretWord has been guessed (ie, all the 
letters of secretWord are in lettersGuessed) and False otherwise.
"""

def isWordGuessed(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: boolean, True if all the letters of secretWord are in lettersGuessed;
      False otherwise
    '''
    
    for x in secretWord:
        if x not in lettersGuessed:
            return False
    return True
    
"""
Next, implement the function getGuessedWord that takes in two parameters - a 
string, secretWord, and a list of letters, lettersGuessed. This function 
returns a string that is comprised of letters and underscores, based on what
letters in lettersGuessed are in secretWord. This shouldn't be too different 
from isWordGuessed!

"""
    
def getGuessedWord(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters and underscores that represents
      what letters in secretWord have been guessed so far.
    '''
    
    my_String = ''
    for x in secretWord:
        if x in lettersGuessed:
            my_String += x
        else:
            my_String += '_'
    return my_String
    
"""
Next, implement the function getAvailableLetters that takes in one parameter - 
a list of letters, lettersGuessed. This function returns a string that is 
comprised of lowercase English letters - all lowercase English letters that 
are not in lettersGuessed.

"""

def getAvailableLetters(lettersGuessed):
    '''
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters that represents what letters have not
      yet been guessed.
    '''
    
    notGuessed = ''
    for x in 'abcdefghijklmnopqrstuvwxyz':
        if x not in lettersGuessed:
            notGuessed += x
    return notGuessed