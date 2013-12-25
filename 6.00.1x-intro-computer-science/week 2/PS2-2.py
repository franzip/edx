"""
Write a program to calculate the credit card balance after one year if a person
only pays the minimum monthly payment required by the credit card company each 
month.
The following variables contain values as described below:
    
balance - the outstanding balance on the credit card
annualInterestRate - annual interest rate as a decimal
monthlyPaymentRate - minimum monthly payment rate as a decimal

For each month, calculate statements on the monthly payment and remaining 
balance, and print to screen something of the format:
Month: 1
Minimum monthly payment: 96.0
Remaining balance: 4784.0

Be sure to print out no more than two decimal digits of accuracy - so print
Remaining balance: 813.41
instead of
Remaining balance: 813.4141998135 

Finally, print out the total amount paid that year and the remaining balance at
the end of the year in the format:
Total paid: 96.0
Remaining balance: 4784.0

A summary of the required math is found below:
Monthly interest rate= (Annual interest rate) / 12.0
Minimum monthly payment = (Minimum monthly payment rate) x (Previous balance)
Monthly unpaid balance = (Previous balance) - (Minimum monthly payment)
Updated balance each month = (Monthly unpaid balance) + (Monthly interest rate
x Monthly unpaid balance)

"""
# These commented out values are provided by the grader.
# balance = 4704
# annualInterestRate = 0.15 
monthlyInterestRate = annualInterestRate / 12.0 
guess = 10      # Threshold value given in the problem 

def onemonth(balance):
    monthlyBalance = balance - guess  
    updatedBalance = monthlyBalance + (monthlyInterestRate * monthlyBalance)
    return updatedBalance
    
def getYear(startBalance):
    newBalance = onemonth(startBalance)
    # This loop return the yearly balance using our guess global variable
    # inside the onemonth's math
    for months in range(1,12):
        newBalance = onemonth(newBalance)
    return newBalance

# Keep calling getYear and increase guess by ten until we get the first 
# suitable monthly payment value
while getYear(balance) > 0:
    guess += 10

print guess



