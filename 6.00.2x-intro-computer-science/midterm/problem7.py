import random
import pylab

"""Assume there is a list of 1,000 balls. The balls are either white or black, with 
the number of white and black balls being equal. They are randomly ordered in 
the list. Consider the following two methods of finding a white ball."""

def lv_method(ball_list):
    """Point to a random ball. If it is white, then exit. If it is black, then 
    repeat (e.g. choose another random ball, and test). The procedure returns 
    the number of tries until a white ball is found.
    """
    trials = 1
    while random.choice(ball_list) != 'white':
        trials += 1
    return trials
    
def montecarlo_method(ball_list):
    """Point to a random location in the list. If the ball in that location is
    white, then return 1. 
    
    If it is black, then examine the next item in the list. 
    If it is white, return 2, and if it is black, continue with the next item in the list.
    
    Continue examining the items in the list sequentially for at most k tries or 
    until a white ball is found. If the end of the list is reached, go to the 
    beginning.
    
    When a white ball is found, return the number of balls examined. If no white 
    ball is found after k tries, return 0.
    """
    list_len = len(ball_list)
    start_idx = random.randrange(list_len)
    if (ball_list[start_idx] == 'white'):
        return 1
    examined = 2
    while True:
        start_idx = (start_idx + 1) % list_len
        if ball_list[start_idx] == 'white':
            return examined
        examined += 1

def plot_methods():
    balls = ["black" if x < 500 else "white" for x in range(1000)]
    random.shuffle(balls)
    hist_lv = [0 for i in range(1, 1000)]
    hist_mc = [0 for i in range(1, 1000)]
    for i in range(1000):
        result_lv = lv_method(balls)
        hist_lv[result_lv] += 1
        result_mc = montecarlo_method(balls)
        hist_mc[result_mc] += 1
    pylab.figure(1)
    pylab.title("LV Method")
    pylab.ylabel("Histogram Frequencies")
    pylab.xlabel("Steps taken to find the ball")
    pylab.plot(hist_lv)
    pylab.semilogx()
    pylab.figure(2)
    pylab.title("Montecarlo Method")
    pylab.ylabel("Histogram Frequencies")
    pylab.xlabel("Steps taken to find the ball")
    pylab.plot(hist_mc)
    pylab.semilogx()
    pylab.show()
        
plot_methods()
