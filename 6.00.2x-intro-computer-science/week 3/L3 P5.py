import random

class intDict(object):
    """A dictionary with integer keys"""
    
    def __init__(self, numBuckets):
        """Create an empty dictionary"""
        self.buckets = []
        self.numBuckets = numBuckets
        for i in range(numBuckets):
            self.buckets.append([])
            
    def addEntry(self, dictKey, dictVal):
        """Assumes dictKey an int.  Adds an entry."""
        hashBucket = self.buckets[dictKey%self.numBuckets]
        for i in range(len(hashBucket)):
            if hashBucket[i][0] == dictKey:
                hashBucket[i] = (dictKey, dictVal)
                return
        hashBucket.append((dictKey, dictVal))
        
    def getValue(self, dictKey):
        """Assumes dictKey an int.  Returns entry associated
           with the key dictKey"""
        hashBucket = self.buckets[dictKey%self.numBuckets]
        for e in hashBucket:
            if e[0] == dictKey:
                return e[1]
        return None
    
    def __str__(self):
        res = '{'
        for b in self.buckets:
            for t in b:
                res = res + str(t[0]) + ':' + str(t[1]) + ','
        return res[:-1] + '}' #res[:-1] removes the last comma


def collision_prob(numBuckets, numInsertions):
    '''
    Given the number of buckets and the number of items to insert, 
    calculates the probability of a collision.
    '''
    prob = 1.0
    for i in range(1, numInsertions):
        prob = prob * ((numBuckets - i) / float(numBuckets))
    return 1 - prob

def sim_insertions(numBuckets, numInsertions):
    '''
    Run a simulation for numInsertions insertions into the hash table.
    '''
    choices = range(numBuckets)
    used = []
    for i in range(numInsertions):
        hashVal = random.choice(choices)
        if hashVal in used:
            return False
        else:
            used.append(hashVal)
    return True

def observe_prob(numBuckets, numInsertions, numTrials):
    '''
    Given the number of buckets and the number of items to insert, 
    runs a simulation numTrials times to observe the probability of a collision.
    '''
    probs = []
    for t in range(numTrials):
        probs.append(sim_insertions(numBuckets, numInsertions))
    return 1 - sum(probs)/float(numTrials)


def main():
    hash_table = intDict(25)
    hash_table.addEntry(15, 'a')
#    random.seed(1) # Uncomment for consistent results
    for i in range(20):
       hash_table.addEntry(int(random.random() * (10 ** 9)), i)
    hash_table.addEntry(15, 'b')
    print hash_table.buckets  #evil
    print '\n', 'hash_table =', hash_table
    print hash_table.getValue(15)

# 1. If our hash table has 1000 buckets and we perform 50 insertions, what is the 
# calculated probability of a collision? Answer to at least 3 decimal places.
print collision_prob(1000, 50)

# 2. If our hash table has 1000 buckets and we perform 200 insertions, what is the 
#calculated probability of a collision? Answer to at least 3 decimal places.
print collision_prob(1000, 200)

# 3. If our hash table has 1000 buckets and we perform 50 insertions, perform a 
# simulation to observe the probability of a collision. Run for at least 1000 
# trials; answer to at least 3 decimal places.
print observe_prob(1000, 50, 1000)

# 4. If our hash table has 1000 buckets and we perform 200 insertions, perform a 
# simulation to observe the probability of a collision. Run for at least 1000 trials; 
# answer to at least 3 decimal places.
print observe_prob(1000, 200, 1000)

# 5. Say you're in a classroom with 29 other students (30 total students). What 
# is the calculated probability that two students share the same birthdate? For 
# simplicity, assume there are 365 days in a year and all birthdates are equally 
# probable. Answer to at least 3 decimal places.
print collision_prob(365, 30)

# 6. Say you're in a lecture hall with 249 other students (250 total students). 
# What is the calculated probability that two students share the same birthdate? 
# For simplicity, assume there are 365 days in a year and all birthdates are equally 
# probable. Answer to at least 3 decimal places.
print collision_prob(365, 250)

# 7. What's the largest classroom size where the probability of two students sharing 
# the same birthday is less than 0.99? Hint: either write a function that loops 
# through values and finds this for you, or perform a manual bisection search.

def largest_class(days = 365):
    size = 1
    while True:
        if collision_prob(days, size + 1) < 0.99:
            size += 1
        else:
            return size
        
print largest_class()
        