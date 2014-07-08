/***************************************************\
* HarvardX CS50 - PSet2 - crack.c - Hacker Edition  *
*                                                   *
\***************************************************/

#include <stdio.h>
#include <ctype.h>
#include <cs50.h>
#include <unistd.h>
#include <string.h>
#include <crypt.h>
#include <time.h>

#define _XOPEN_SOURCE
// define magic numbers
#define MAX_PASSWD_LENGTH 8
#define SALT_LENGTH 2
#define MAX_LINE 80

// function headers
bool try_dictionary(FILE *dict, string tocrack, char *buffer, char *salt);
bool try_bruteforce(string tocrack, char *salt, char *char_keys, 
                    char *buffer, int *permutations);
bool match(char *guess, char *tocrack);
char *get_guess(int *permutations, char *char_keys, char *buffer, int brute_count);

int main(int argc, string argv[])
{
    // check for correct command line usage
    if (argc != 2)
    {
        printf("Correct usage is: ./crack [DES-encrypted-password]\n");
        return 1;
    }
    
    // declare a timer
    time_t timer;
    // store the salt characters 
    char salt[SALT_LENGTH];
    strncpy(salt, argv[1], SALT_LENGTH);
    // declare a buffer and stick to Unix width limitation (80 chars)
    char buffer[MAX_LINE];
    // set up a file descriptor
    FILE *file_dict = fopen("./words", "r");
    
    printf("Trying with the supplied dictionary...\n");   
    timer = time(NULL);
    
    // try a dictionary attack
    if (try_dictionary(file_dict, argv[1], buffer, salt))
    {
        printf("Success! The decrypted password is: \"%s\"\n", buffer);
        printf("Time taken: %.d seconds\n", (int)difftime(time(NULL), timer));
        return 0;
    }
    
    printf("No success.\nTrying now with a bruteforce attack. This might take some time...\n");   
    
    // set up an array with keys to try in the bruteforce attack
    char char_keys[] = "0123456789abcdefghijklmnopqrstuvwxyz";
    int permutations[MAX_PASSWD_LENGTH + 1];
    
    // restart the timer
    timer = time(NULL);
    
    // try bruteforce
    if (try_bruteforce(argv[1], salt, char_keys, buffer, permutations))
    {
        printf("Success! The decrypted password is: \"%s\"\n", buffer);
        printf("Time taken: %.d seconds\n", (int)difftime(time(NULL), timer));
        return 0;
    }
    
    printf("Could not decrypt the password, sorry :(\n");
    return 1;
}

// Functions implementations

/*
** Perform a dictionary attack. Returns true if successful.
** If successful, the variable buffer holds the decrypted string.
*/
bool try_dictionary(FILE *dict, string tocrack, char *buffer, char *salt)
{
    char *guess;
    // check the whole file
    while (!feof(dict))
    {   
        // read the n-th line, store it into buffer and check its length     
        fgets(buffer, 80, dict);
        int buffer_length = strlen(buffer) - 1;
        buffer[buffer_length] = '\0';
        
        // only check for inputs that buffer can hold 
        if (buffer_length <= MAX_PASSWD_LENGTH)
        {
            // encrypt the guess and compare it with the given string
            guess = crypt(buffer, salt);
            if (match(guess, tocrack))
            {
                return true;
            }
        }
    }
    
    return false;
}

/*
** Perform a bruteforce attack. Returns true if successful.
** If successful, the variable buffer holds the decrypted string.
*/

bool try_bruteforce(string tocrack, char *salt, char *char_keys, 
                    char *buffer, int *permutations)
{
    char *guess;
    
    for (int i = 1; i < MAX_PASSWD_LENGTH + 1; i++)
    {
        printf("Trying with length: %d\n", i);
        
        for (int j = 0; j < MAX_PASSWD_LENGTH; j++)
            permutations[j] = 0;
        
        // keep trying all the possible permutations  
        while (permutations[i] == 0)
        {
            guess = crypt(get_guess(permutations, char_keys, buffer, i), salt);
            
            if (match(guess, tocrack))
                return true; 
        }
    }
    
    return false;
}

/*
** Given a keys list, return the next possible permutation
*/

char *get_guess(int *permutations, char *char_keys, char *buffer, int brute_count)
{
    int count_keys = strlen(char_keys), carry_bit = 1;
    int i;
    
    // set the buffer appropriately
    for (i = 0; i < brute_count; i++)
        buffer[i] = char_keys[permutations[i]];    
    buffer[brute_count] = '\0';
    
    for (i = 0; i <= brute_count; i++)   
    {
        if (carry_bit == 1)
        {
            permutations[i] = permutations[i] + 1;
            if (permutations[i] == count_keys)
            {
                permutations[i] = 0;
                carry_bit = 1;
            }
            else
                carry_bit = 0;
        }
        
    }  
    
    return buffer;
}

/*
** Compare two strings with strcmp and return a boolean.
*/

bool match(char *guess, char *tocrack)
{
    if (strcmp(guess, tocrack) == 0)
        return true;
    return false;
}
