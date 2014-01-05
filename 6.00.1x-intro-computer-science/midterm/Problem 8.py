# PROBLEM 8-1

def fixedPoint(f, epsilon):
    """
    f: a function of one argument that returns a float
    epsilon: a small float
  
    returns the best guess when that guess is less than epsilon 
    away from f(guess) or after 100 trials, whichever comes first.
    """
    guess = 1.0
    for i in range(100):
        # Just take the absolute value
        if abs(f(guess) - guess) < epsilon:
            return guess
        else:
            guess = f(guess)
    return guess

# PROBLEM 8-2  

def sqrt(a):
    def tryit(x):
        return 0.5 * (a/x + x)
    # tryit is wrapped inside sqrt, so when we call fixedPoint we don't need
    # to pass tryit any argument.
    return fixedPoint(tryit, 0.0001)
    
# PROBLEM 8-3  

def babylon(a):
    def test(x):
        return 0.5 * ((a / x) + x)
    return test

def sqrt(a):
    # fixedPoint gets called outside babylon scope, so we need to pass 
    # babylon the sqrt's argument
    return fixedPoint(babylon(a), 0.0001)
    