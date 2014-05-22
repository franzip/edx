import pylab

# Problem 2.1
a = 1.0
b = 2.0
c = 4.0
yVals = []
xVals = range(-20, 20)
for x in xVals:
    yVals.append(a*x**2 + b*x + c)
yVals = 2*pylab.array(yVals)
xVals = pylab.array(xVals)
try:
    a, b, c, d = pylab.polyfit(xVals, yVals, 3)
    print '%.1f, %.1f, %.1f, %.1f' %(a, b, c, d)
except:
    print 'fell to here'
    
# Problem 2.2
A = [0,1,2,3,4,5,6,7,8]

B = [5,10,10,10,15]

C = [0,1,2,4,6,8]

D = [6,7,11,12,13,15]

E = [9,0,0,3,3,3,6,6]

def mean(n):
    return sum(n) / len(n)
    
def variance(n):
    m = mean(n)
    return sum([(x - m)**2 for x in n]) 
    
print 'A: ', mean(A), variance(A)
print 'B: ', mean(B), variance(B)
print 'C: ', mean(C), variance(C)
print 'D: ', mean(D), variance(D)
print 'E: ', mean(E), variance(E)

# Problem 2.3

def possible_mean(L):
    return sum(L)/len(L)

def possible_variance(L):
    mu = possible_mean(L)
    temp = 0
    for e in L:
        temp += (e-mu)**2
    return temp / len(L)
    
print 'A: ', possible_variance(A)
print 'B: ', possible_variance(B)
print 'C: ', possible_variance(C)
print 'D: ', possible_variance(D)
print 'E: ', possible_variance(E)
