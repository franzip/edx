/*****************************************************\
* HarvardX CS50 - PSet2 - caesar.c - Standard Edition *
*                                                     *
\*****************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <cs50.h>

// define magic numbers
#define ALPHA_OFFSET 26

// Functions headers
char encrypt(char letter, int k);

int main(int argc, string argv[])
{       
    // declare user input variable
    string input;
    
    // user does not supply a key or supplies an invalid one
    if (argc != 2 || atoi(argv[1]) < 1)
    {
        printf("Correct usage is: ./caesar [positive_integer_key]\n");
        return 1;
    }
    
    // check for any non numerical character in the supplied key
    for (int i = 0, j = strlen(argv[1]); i < j; i++)
    {
        if (!isdigit(argv[1][i]))
        {
            printf("Correct usage is: ./caesar [positive_integer_key]\n");
            return 1;
        }
    }
    
    // store the integer key and prompt the user for a string
    // keep the key in (a-z | A-Z) range -> (key MOD 26)
    int key = atoi(argv[1]) % ALPHA_OFFSET;
    input = GetString();
    
    // encrypt user's input
    for (int i = 0, j = strlen(input); i < j; i++)
    {
        input[i] = encrypt(input[i], key);
    }
    
    // print encrypted input
    printf("%s\n", input);
    
    return 0;
}

// Functions implementations

/*
** Encrypt an alphabetic character by switching it of a given positive integer key value.
*/

char encrypt(char letter, int k)
{
    // only encrypt alphabetic character
    if isalpha(letter)
    {
        // handle upper and lowercase properly
        if (isupper(letter))
            letter = ((letter - 'A' + k) % ALPHA_OFFSET) + 'A';
        else
            letter = ((letter - 'a' + k) % ALPHA_OFFSET) + 'a';
    }
    return letter;
}
