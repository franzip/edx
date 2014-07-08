/***************************************************\
* HarvardX CS50 - PSet1 - credit.c - Hacker Edition *
*                                                   *
\***************************************************/

#include <stdio.h>
#include <cs50.h>
#include <string.h>

// Functions headers
int count_digits(long long number);
int is_valid_card(long long number);
int get_digit(long long number, int position);
int get_card_type(long long number);

int main(void)
{
    // declare user input variable
    long long card_number;  
    // declare input data analysis variables
    int card_digits, card_type;
    // output variable
    string result;
    
    // get input from the user
    printf("Number: ");
    card_number = GetLongLong();
    card_digits = count_digits(card_number);
    
    // preliminar input filter to check if the card length matches
    if (card_number > 0 && ((card_digits == 13) || (card_digits == 15) || 
                            (card_digits == 16))) 
    { 
        if (is_valid_card(card_number))
        {
            // if the card is valid, store the correct type for the card into result
            card_type = get_card_type(card_number);
            switch (card_type)
            {
                case 1:
                    result = "AMEX\n";
                break;               
                case 2:
                    result = "MASTERCARD\n";
                break;          
                case 3:
                    result = "VISA\n";
                break;             
                default:
                    result = "INVALID\n";
                break;
            }
        }
        else
            result = "INVALID\n";
    }
    else
        result = "INVALID\n";

    // print the result
    printf ("%s", result);
    
    return 0;
}


// Functions implementation


/* 
** Return the count of the digits for a number.
*/

int count_digits(long long number) 
{
    int count = 0;
    for ( ; number != 0; number /= 10) 
    {
        count++;
    }
    return count;
}

/*
** Check for the validity of a credit card number.
** Return 0 or 1.
*/

int is_valid_card(long long number)
{
    int sum, digit;
    sum = 0;
    for (int i = 0; i < count_digits(number); i++)
    {
        // store the digit on each cycle
        digit = get_digit(number, i);
        // even position: perform a simple addition
        if (i % 2 == 0)
            sum += digit;
        // odd position: perform the proper checks
        else 
        {
            // special case: handle 2 digits products correctly
            // 5 > 1, 6 > 3, 7 > 5, 8 > 7, 9 > 9
            if (digit > 4)
            {
                sum += (2 * digit) % 10 + 1;
            }
            // simple case
            else
                sum += digit * 2;
        }
    }   
    // check sum for Luhn's condition
    if (sum % 10)
        return 0;
    return 1;
}

/*
** Given a number and a position N, return the number's N-th digit.
*/

int get_digit(long long number, int position) 
{
    for (int i = 0; i < position; i++)
        number /= 10;
    return number % 10;
}

/*
** Perform checks on a valid card number and return a numeric value
** for each card type.
** Return -1 if the test fails.
*/

int get_card_type(long long number)
{
    int length = count_digits(number);
    int first_two_digits = 10 * get_digit(number, length - 1) + 
                                get_digit(number, length - 2);
    // American Express
    if (length == 15 && (first_two_digits == 34 || first_two_digits == 37))
        return 1;
    // Mastercard
    else if (length == 16 && first_two_digits >= 51 && first_two_digits <= 55)
        return 2;
    // Visa
    else if ((length == 13 || length == 16) && (first_two_digits / 10) == 4)
        return 3;
    // Invalid.
    else
        return -1;
}
