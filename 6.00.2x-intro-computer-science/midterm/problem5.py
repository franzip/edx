import random
import pylab

def sampleQuizzes(num_trials):
    """Problem 5.1
    You are taking a class that plans to assign final grades based on two 
    midterm quizzes and a final exam. The final grade will be based on 25% for
    each midterm, and 50% for the final. You are told that the grades on the 
    exams were each uniformly distributed integers:
    Midterm 1: 50 <= grade <= 80
    Midterm 2: 60 <= grade <= 90
    Final Exam: 55 <= grade <= 95
    
    Write a function called sampleQuizzes that implements a Monte Carlo 
    simulation that estimates the probability of a student having a final
    score >= 70 and <= 75. Assume that 10,000 trials are sufficient to provide 
    an accurate answer.
    """
    in_range = 0  
    # as per spec
    mid1_low, mid1_high = 50, 80
    mid2_low, mid2_high = 60, 90
    fin_low, fin_high = 55, 95
    for trials in range(num_trials):
        grade = .25 * random.randrange(mid1_low, mid1_high + 1) +          \
                .25 * random.randrange(mid2_low, mid2_high + 1) +          \
                .50 * random.randrange(fin_low, fin_high + 1) 
        if 70 <= grade <= 75:
            in_range += 1
    # P(totG) with 70 <= totG <= 75 is simply in_range / num_trials ratio
    return in_range / float(num_trials)
    
#print sampleQuizzes(10000)

def generateScores(numTrials):
    """Problem 5.2
    Runs numTrials trials of score-generation for each of
    three exams (Midterm 1, Midterm 2, and Final Exam).
    Generates uniformly distributed scores for each of 
    the three exams, then calculates the final score and
    appends it to a list of scores.
    
    Returns: A list of numTrials scores.
    """
    scores = []
    mid1_low, mid1_high = 50, 80
    mid2_low, mid2_high = 60, 90
    fin_low, fin_high = 55, 95 
    for trials in range(numTrials):
        grade = .25 * random.randrange(mid1_low, mid1_high + 1) +          \
                .25 * random.randrange(mid2_low, mid2_high + 1) +          \
                .50 * random.randrange(fin_low, fin_high + 1)
        scores.append(grade)
    return scores

def plotQuizzes(n_bins = 7):
    """Problem 5.2
    Write a procedure called plotQuizzes that produces a plot of the 
    distribution of final scores for all of the trials. Try your best to match 
    exactly how the histogram below looks (including the bins, titles and labels 
    on the axes). Click the image to see a larger version.
    Your code should make a call to the function generateScores.
    You should use the same number of trials as you did in Problem 5-1.
    """
    # as per spec
    scores = generateScores(10000)
    pylab.title("Distribution of Scores")
    pylab.xlabel("Final Score")
    pylab.ylabel("Number of Trials")
    pylab.hist(scores, n_bins)
    pylab.show()

#plotQuizzes()