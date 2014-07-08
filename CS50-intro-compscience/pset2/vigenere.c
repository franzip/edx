/*******************************************************\
* HarvardX CS50 - PSet2 - vigenere.c - Standard Edition *
*                                                       *
\*******************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <cs50.h>

#define UPPERCASE_OFFSET 65
#define LOWERCASE_OFFSET 97
#define ALPHA_OFFSET 26

// Functions headers
int make_vigenere(char letter);
string encrypt_vigenere(string to_encrypt, int cypher[], int cypher_length);

int main(int argc, string argv[])
{
    // declare user input variable
    string input;
    // variable to store our cypher length
    int cypher_length;
       
    // user does not supply a key or supplies an invalid one
    if (argc != 2)
    {
        printf("Correct usage is: ./vigenere [alphabetical_key]\n");
        return 1;
    }
    
    // check for any non-alphabetical character in the supplied key
    for (int i = 0, j = strlen(argv[1]); i < j; i++)
    {
        if (!isalpha(argv[1][i]))
        {
            printf("Correct usage is: ./vigenere [alphabetical_key]\n");
            return 1;
        }
    }
    
    // set a vigenere cypher array where to store numeric keys for shifts
    cypher_length = strlen(argv[1]);
    int vigenere_cypher[cypher_length];
    
    // make a vigenere cypher array   
    for (int i = 0; i < cypher_length; i++)
    {
        vigenere_cypher[i] = make_vigenere(argv[1][i]);
    }    
    
    // get the input from the user
    input = GetString();
 
    // encrypt the whole input string calling encrypt_vigenere
    input = encrypt_vigenere(input, vigenere_cypher, cypher_length);

    // print results
    printf("%s\n", input);
    
    return 0;
}

// Functions implementations

/*
** Given an input character, encrypt it as a vigenere key
*/

int make_vigenere(char letter)
{
    int encrypted;
    // No need to check for alphabetic character.
    if (isupper(letter))
        encrypted = letter % UPPERCASE_OFFSET;
    else
        encrypted = letter % LOWERCASE_OFFSET;
 
    return encrypted;
}

/*
** Given a string to encrypt, a vigenere cypher and the cypher's length, return an encrypted string  
** Non alphabetic character in the string will not be encrypted.
*/

string encrypt_vigenere(string to_encrypt, int cypher[], int cypher_length)
{
    // set an index to keep track of the proper key to apply
    int cypher_index = 0;
    
    for (int i = 0, j = strlen(to_encrypt); i < j; i++)
    {
        if (isalpha(to_encrypt[i])) 
        {
            // handle upper and lowercase properly
            if (islower(to_encrypt[i]))
                to_encrypt[i] = ((to_encrypt[i] - 'a' + cypher[cypher_index]) % 
                                                        ALPHA_OFFSET) + 'a';    
            else
                to_encrypt[i] = ((to_encrypt[i] - 'A' + cypher[cypher_index]) % 
                                                        ALPHA_OFFSET) + 'A';    
            
            // update the key to apply IFF we have an alphabetic character
            cypher_index = (cypher_index + 1) % (cypher_length);
        }
    }        
    
    return to_encrypt;
}
