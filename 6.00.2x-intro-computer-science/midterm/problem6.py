def probTest(limit):
    """You observe that the probability of first seeing a 1 on the n-th roll 
    decreases as n increases. You would like to know the smallest number of rolls 
    such that this probability is less than some limit. Complete the Python 
    procedure, probTest, to compute this.
    """
    def get_prob(exp):
        # P(1) for the n-th roll is just -> ((5 / 6) ** (n - 1)) * (1 / 6) 
        return ((5.0 / 6.0)**(exp - 1) * (1.0 / 6.0))       
    # get P(1) starting at the first roll
    n_roll = 1
    # stop rolling when P(1) on the subsequent roll would go beyond the threshold
    while get_prob(n_roll) > limit:
        n_roll += 1       
    return n_roll
        