"""
Now you will implement the function hangman, which takes one parameter - the 
secretWord the user is to guess. This starts up an interactive game of Hangman 
between the user and the computer. Be sure you take advantage of the three 
helper functions, isWordGuessed, getGuessedWord, and getAvailableLetters, that 
you've defined in the previous part.

"""

def hangman(secretWord):
    '''
    secretWord: string, the secret word to guess.

    Starts up an interactive game of Hangman.

    * At the start of the game, let the user know how many 
      letters the secretWord contains.

    * Ask the user to supply one guess (i.e. letter) per round.

    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computers word.

    * After each round, you should also display to the user the 
      partially guessed word so far, as well as letters that the 
      user has not yet guessed.

    Follows the other limitations detailed in the problem write-up.
    '''

    lettersGuessed = []
    mistakesMade = 0
    availableLetters = getAvailableLetters(lettersGuessed)
    print "Welcome to the game, Hangman!"
    print "I am thinking of a word that is %d letters long" % (len(secretWord))
    print "-------------"
    # Keep the game on until player hits 8 mistakes or guess the secret word
    while mistakesMade < 8 and \
           getGuessedWord(secretWord, lettersGuessed) != secretWord:
        print "You have %d guesses left." %(8 - mistakesMade)
        print "Available letters: %s" %(getAvailableLetters(lettersGuessed))
        guess = raw_input("Please guess a letter: ").lower()
        # arleady guessed guess
        if guess in lettersGuessed:
            print "Oops! You've already guessed that letter: %s" \
                    %(getGuessedWord(secretWord, lettersGuessed))
        # new guess
        else:
            lettersGuessed.append(guess)
            if guess in secretWord:
                print "Good guess: %s" \
                       %(getGuessedWord(secretWord, lettersGuessed))
            else:
                print "Oops! That letter is not in my word: %s" \
                       %(getGuessedWord(secretWord, lettersGuessed))
                mistakesMade += 1
        print "-------------"
        
    if mistakesMade == 8:
        print "Sorry, you ran out of guesses. The word was %s" %(secretWord)
    else:
        print "Congratulations, you won!"  