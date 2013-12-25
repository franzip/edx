"""
Write a program to calculate the credit card balance after one year if a person
only pays the minimum monthly payment required by the credit card company each
month. The following variables contain values as described below:
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

The code you paste into the following box should not specify the values for the
variables balance, annualInterestRate, or monthlyPaymentRate - our test code 
will define those values before testing your submission.

A summary of the required math is found below:

Monthly interest rate = (Annual interest rate) / 12.0
Minimum monthly payment = (Minimum monthly payment rate) x (Previous balance)
Monthly unpaid balance = (Previous balance) - (Minimum monthly payment)
Updated balance each month = (Monthly unpaid balance) + (Monthly interest rate 
x Monthly unpaid balance)

"""
# These commented out values are provided by the grader.
# balance = 4213 
# annualInterestRate = 0.2 
# monthlyPaymentRate = 0.04 

months = 1
monthlyInterestRate = annualInterestRate / 12.0
minMonthlyPayment = monthlyPaymentRate * balance
total = 0

while months <= 12:  
    if months == 1:
        # Handling the special case when months = 1 and updatedBalance 
        # is not yet initialized
        minMonthlyPayment = round(monthlyPaymentRate * balance, 2) 
        monthlyUnpaid = balance - minMonthlyPayment
    else:  
        minMonthlyPayment = round(monthlyPaymentRate * updatedBalance, 2)
        monthlyUnpaid = updatedBalance - minMonthlyPayment 
               
    updatedBalance = round((monthlyUnpaid + (monthlyInterestRate * monthlyUnpaid)), 2)
    total += minMonthlyPayment
    
    print 'Month: ' + str(months)
    print 'Minimum monthly payment: ' +  str(minMonthlyPayment)
    print 'Remaining balance: ' + str(updatedBalance)
    if months == 12:
        print 'Total paid: ' + str(total)
        print 'Remaining Balance: ' + str(updatedBalance)
    months += 1