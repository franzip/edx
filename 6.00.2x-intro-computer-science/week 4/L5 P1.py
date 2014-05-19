import random

def noReplacementSimulation(numTrials):
    '''
    Runs numTrials trials of a Monte Carlo simulation
    of drawing 3 balls out of a bucket containing
    3 red and 3 green balls. Balls are not replaced once
    drawn. Returns the a decimal - the fraction of times 3 
    balls of the same color were drawn.
    '''
    # as per spec
    num_draw = 3
    same_color = 0.0
    for trials in range(numTrials):
        picked = []
        bucket = ['G', 'G', 'G', 'R', 'R', 'R']
        for draws in range(num_draw):
            # pick a random ball, append and remove from bucket
            choice = random.choice(bucket)
            picked.append(choice)
            bucket.remove(choice)
        # check if the 3 balls are all equal
        if all(map(lambda x: x == bucket[0], bucket)):
            same_color += 1
    return same_color / numTrials
    