import random
import pylab

# Global Variables
MAXRABBITPOP = 1000
CURRENTRABBITPOP = 500
CURRENTFOXPOP = 30

def rabbitGrowth():
    """ 
    rabbitGrowth is called once at the beginning of each time step.

    It makes use of the global variables: CURRENTRABBITPOP and MAXRABBITPOP.

    The global variable CURRENTRABBITPOP is modified by this procedure.

    For each rabbit, based on the probabilities in the problem set write-up, 
      a new rabbit may be born.
    Nothing is returned.
    """
    # you need this line for modifying global variables
    global CURRENTRABBITPOP
    # as per spec
    prob_born = 1 - (float(CURRENTRABBITPOP) / MAXRABBITPOP)
    rabbit_number = CURRENTRABBITPOP
    # compute offspring iterating over n_rabbits
    for rabbits in range(rabbit_number):
        # enforce constraint MAXRABBITPOP
        if random.random() < prob_born and CURRENTRABBITPOP < MAXRABBITPOP:
            CURRENTRABBITPOP += 1
    
def foxGrowth():
    """ 
    foxGrowth is called once at the end of each time step.

    It makes use of the global variables: CURRENTFOXPOP and CURRENTRABBITPOP,
        and both may be modified by this procedure.

    Each fox, based on the probabilities in the problem statement, may eat 
      one rabbit (but only if there are more than 10 rabbits).

    If it eats a rabbit, then with a 1/3 prob it gives birth to a new fox.

    If it does not eat a rabbit, then with a 1/10 prob it dies.

    Nothing is returned.
    """
    # you need these lines for modifying global variables
    global CURRENTRABBITPOP
    global CURRENTFOXPOP
    # set probabilities as per spec
    prob_eat = CURRENTRABBITPOP / float(MAXRABBITPOP)
    fox_reproduce = 1.0 / 3.0
    fox_die = 1.0 / 10.0
    fox_number = CURRENTFOXPOP
    # iterate over each fox
    for fox in range(fox_number):
        # check for eating probability and enforce constraint (min rabbit = 10)
        if random.random() < prob_eat and CURRENTRABBITPOP > 10:
            CURRENTRABBITPOP -= 1
            CURRENTFOXPOP += 1
            # check for fox offspring probability
            if random.random() < fox_reproduce:
                CURRENTFOXPOP += 1
        # check if the current fox dies
        else: 
            if random.random() < fox_die:
                CURRENTFOXPOP -= 1
    
            
def runSimulation(numSteps):
    """
    Runs the simulation for `numSteps` time steps.

    Returns a tuple of two lists: (rabbit_populations, fox_populations)
      where rabbit_populations is a record of the rabbit population at the 
      END of each time step, and fox_populations is a record of the fox population
      at the END of each time step.

    Both lists should be `numSteps` items long.
    """
    rabbit_pop, fox_pop = [], []
    for steps in range(numSteps):
        rabbitGrowth()
        foxGrowth()
        rabbit_pop.append(CURRENTRABBITPOP)
        fox_pop.append(CURRENTFOXPOP)
    
    return (rabbit_pop, fox_pop)

def plotCurve(rabbits, foxes):
    pylab.xlabel("Steps")
    pylab.ylabel("Populations")
    pylab.plot(rabbits, label="Rabbits Population")
    pylab.plot(foxes, label="Foxes Population")
    pylab.legend()
    pylab.show()
    
def plotFittingCurve(rabbits, foxes):
    r_coeff = pylab.polyfit(range(len(rabbits)), rabbits, 2) 
    f_coeff = pylab.polyfit(range(len(foxes)), foxes, 2)
    pylab.plot(pylab.polyval(r_coeff, range(len(rabbits))), label = "Rabbits Curve")
    pylab.plot(pylab.polyval(f_coeff, range(len(foxes))), label = "Foxes Curve")
    pylab.legend()
    pylab.show()
    
a = runSimulation(200)

plotCurve(a[0], a[1])
plotFittingCurve(a[0], a[1])
