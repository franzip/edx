import pylab
import numpy as np

def loadFile():
    """
    Load text file with temperatures and return only requested data (low/high) 
    """
    inFile = open('C:/Users/Administrator/Desktop/Repo/6.00.2x Files/assignment/week 1/julyTemps.txt')
    high = []
    low = []
    for line in inFile:
        fields = line.split()
        if len(fields) != 3 or 'Boston' == fields[0] or 'Day' == fields[0]:
            continue
        else:
            high.append(int(fields[1]))
            low.append(int(fields[2]))
    return (low, high)
    
def producePlot(lowTemps, highTemps):
    """
    Plot a figure where the X-axis is a range of 31 days and the Y-axis
    represents temperatures difference (high - low)
    """
    diffTemps = list(np.array(highTemps) - np.array(lowTemps))
    pylab.plot(range(1,32), diffTemps)
    pylab.title('Day by Day Ranges in Temperature in Boston in July 2012')
    pylab.xlabel('Days')
    pylab.ylabel('Temperature Ranges')
    pylab.show()
    
(low, high) = loadFile()
producePlot(low, high)