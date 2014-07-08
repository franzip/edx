/*****************************************************\
* HarvardX CS50 - PSet1 - greedy.c - Standard Edition *
*                                                     *
\*****************************************************/

#include <stdio.h>
#include <cs50.h>
#include <math.h>

// define magic numbers
#define QUARTER 25
#define DIME 10
#define NICKEL 5
#define PENNIE 1

int main(void)
{
    // declare user input variable
    float change;   
    // declare calculations variables
    int in_cents;
    int coins = 0;
    
    // ask user input loop
    do 
    {
        printf("O hai! How much change is owed?\n");
        change = GetFloat();
    }
    while (change <= 0);
    
    // convert user input amount to cents
    in_cents = round(change * 100);
    
    // compute coins to give
    // start reducing in_cents from the highest size of change available
    while (in_cents >= QUARTER)
    {
        in_cents -= QUARTER;
        coins += 1;
    }
    
    while (in_cents >= DIME)
    {
        in_cents -= DIME;
        coins += 1;
    }
    
    while (in_cents >= NICKEL)
    {
        in_cents -= NICKEL;
        coins += 1;
    }
    
    while (in_cents >= PENNIE)
    {
        in_cents -= PENNIE;
        coins += 1;
    }
    
    // print the result
    printf("%d\n", coins);
    
    return 0;
}
