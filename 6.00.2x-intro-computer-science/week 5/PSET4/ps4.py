# 6.00.2x Problem Set 4

import numpy
import random
import pylab
from ps3b import *

#
# PROBLEM 1
#        
def simulationDelayedTreatment(numTrials):
    """
    Runs simulations and make histograms for problem 1.

    Runs numTrials simulations to show the relationship between delayed
    treatment and patient outcome using a histogram.

    Histograms of final total virus populations are displayed for delays of 300,
    150, 75, 0 timesteps (followed by an additional 150 timesteps of
    simulation).

    numTrials: number of simulation runs to execute (an integer)
    """
    # as per spec
    steps = 150
    delay = {300: [], 150: [], 75: [], 0: []}
    n_virus, maxPop = 100, 1000
    maxBirthProb, clearProb, mutProb = 0.1, 0.05, 0.005
    resistances = {'guttagonol': False}
    # main loop
    for trial in range(numTrials):
        viruses = [ResistantVirus(maxBirthProb, clearProb, resistances, mutProb)
                   for i in range(n_virus)]
        patient = TreatedPatient(viruses, maxPop)
        # compute final population for each delay interval
        for delays in delay.keys():
            for timesteps in range(delays):
                patient.update()
            patient.addPrescription('guttagonol')
            for timesteps in range(steps):
                patient.update()
            delay[delays].append(patient.getTotalPop())
            # reset patient for each delay interval
            patient = TreatedPatient(viruses, maxPop)   
    # plot data
    # delayed 300
    pylab.figure(1)
    pylab.hist(delay[300], bins = 10)
    cured = round(((len([x for x in delay[300] if x <= 50]) / float(len(delay[300]))) * 100), 4)
    pylab.title("Delayed treatment after 300 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials') 
    # delayed 150 
    pylab.figure(2)
    pylab.hist(delay[150], bins = 10)
    cured = round(((len([x for x in delay[150] if x <= 50]) / float(len(delay[150]))) * 100), 4)
    pylab.title("Delayed treatment after 150 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')
    # delayed 75
    pylab.figure(3)
    pylab.hist(delay[75], bins = 10)
    cured = round(((len([x for x in delay[75] if x <= 50]) / float(len(delay[75]))) * 100), 4)
    pylab.title("Delayed treatment after 75 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')  
    # delayed 0
    pylab.figure(4)
    pylab.hist(delay[0], bins = 10)
    cured = round(((len([x for x in delay[0] if x <= 50]) / float(len(delay[0]))) * 100) , 4)
    pylab.title("Delayed treatment after 0 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')  
    pylab.show()


#
# PROBLEM 2
#
def simulationTwoDrugsDelayedTreatment(numTrials):
    """
    Runs simulations and make histograms for problem 2.

    Runs numTrials simulations to show the relationship between administration
    of multiple drugs and patient outcome.

    Histograms of final total virus populations are displayed for lag times of
    300, 150, 75, 0 timesteps between adding drugs (followed by an additional
    150 timesteps of simulation).

    numTrials: number of simulation runs to execute (an integer)
    """
    steps = 150
    delay = {300: [], 150: [], 75: [], 0: []}
    n_virus, maxPop = 100, 1000
    maxBirthProb, clearProb, mutProb = 0.1, 0.05, 0.005
    resistances = {'guttagonol': False, 'grimpex': False}
    # main loop
    for trial in range(numTrials):
        viruses = [ResistantVirus(maxBirthProb, clearProb, resistances, mutProb)
                   for i in range(n_virus)]
        patient = TreatedPatient(viruses, maxPop)
        # compute final population for each delay interval
        for delays in delay.keys():
            for timesteps in range(steps):
                patient.update()
            patient.addPrescription('guttagonol')
            for timesteps in range(delays):
                patient.update()
            patient.addPrescription('grimpex')
            for timesteps in range(steps):
                patient.update()
            delay[delays].append(patient.getTotalPop())
            # reset patient for each delay interval
            patient = TreatedPatient(viruses, maxPop)        
    # plot data
    # delayed 300
    pylab.figure(1)
    pylab.hist(delay[300], bins = 10)
    cured = round(((len([x for x in delay[300] if x <= 50]) / float(len(delay[300]))) * 100), 4)
    pylab.title("Delayed treatment after 300 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials') 
    # delayed 150 
    pylab.figure(2)
    pylab.hist(delay[150], bins = 10)
    cured = round(((len([x for x in delay[150] if x <= 50]) / float(len(delay[150]))) * 100), 4)
    pylab.title("Delayed treatment after 150 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')
    # delayed 75
    pylab.figure(3)
    pylab.hist(delay[75], bins = 10)
    cured = round(((len([x for x in delay[75] if x <= 50]) / float(len(delay[75]))) * 100), 4)
    pylab.title("Delayed treatment after 75 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')  
    # delayed 0
    pylab.figure(4)
    pylab.hist(delay[0], bins = 10)
    cured = round(((len([x for x in delay[0] if x <= 50]) / float(len(delay[0]))) * 100) , 4)
    pylab.title("Delayed treatment after 0 steps.\n" + "Cured patients = " + str(cured) + "%")
    pylab.xlabel('Virus Population')
    pylab.ylabel('Number of Trials')  
    pylab.show()   

#simulationDelayedTreatment(150)
#simulationTwoDrugsDelayedTreatment(150)