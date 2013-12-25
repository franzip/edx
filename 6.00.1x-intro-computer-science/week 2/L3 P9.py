# L3 PROBLEM 9

print "Please think of a number between 0 and 100!"
high, low = 100, 0
while True:
    guess = (high + low) / 2
    print 'Is your secret number ' + str(guess) + '?'
    user_input = raw_input('Enter \'h\' to indicate the guess is too high. Enter \'l\' to indicate the guess is too low. Enter \'c\' to indicate I guessed correctly. ')
    if user_input == 'c':
        print 'Game over. Your secret number was: ' + str(guess)
        break
    elif user_input == 'h':
        high = guess
    elif user_input == 'l':
        low = guess
    else:
        print 'Error, please enter a valid input!'