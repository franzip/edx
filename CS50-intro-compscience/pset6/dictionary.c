/****************************************************************************
 * dictionary.c
 *
 * Computer Science 50
 * Problem Set 6
 *
 * Implements a dictionary's functionality.
 ***************************************************************************/

#include <stdbool.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

#include "dictionary.h"

/**
 * Global variables
 */ 
// global counter for words found.
int word_counter = 0;
// fixed size buffer for words. 
char word[LENGTH + 1];
// root node of the trie data structure.
trie_node *root; 

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word)
{
    int word_len, i;
    int index;
    // start at root
    trie_node *traverse = root;
    // check the whole word but the last character
    for (i = 0, word_len = strlen(word); i < word_len; i++)
    {
        // just keep going until you hit a NULL pointer
        index = get_index(word[i]);
        if (traverse->children[index] == NULL)
            return false;
        traverse = traverse->children[index];
    }
    // check the last character
    if (traverse->is_word)
        return true;
    return false;
}

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary)
{
    FILE *input_dict;
    int i, word_len;
    // open the input dictionary
    if (!(input_dict = fopen(dictionary, "r")))
    {
        fclose(input_dict);
        return false;
    }
    // initialize the root node
    root = malloc(sizeof(trie_node));
    root->is_word = false;
    for (i = 0; i < TRIE_LENGTH; i++)
        root->children[i] = NULL;
    // read the dictionary file word by word
    while (fscanf(input_dict, "%s\n", word) != EOF)
    {
        // start from root of the trie on each new word
        trie_node *traverse = root;
        // loop through each word
        for (i = 0, word_len = strlen(word); i < word_len; i++)
        {
            // get the index for the current character
            int index = get_index(word[i]);
            // we found an empty node in position index
            if (traverse->children[index] == NULL)
            {
                // initialize a new trie node 
                // its depth level in the whole structure will be equal to i + 1
                trie_node *new_node = malloc(sizeof(trie_node));
                new_node->is_word = false;
                for (int j = 0; j < TRIE_LENGTH; j++)
                    new_node->children[j] = NULL;
                // set up the new node in position index
                traverse->children[index] = new_node;
            }
            // move to the next trie node
            traverse = traverse->children[index];
        }
        // we're at the end of the word
        traverse->is_word = true;
        word_counter += 1;
    }
    // close the file
    fclose(input_dict);
    return true;
}

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    return word_counter;
}

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void)
{
    // free all root's children tries
    for (int i = 0; i < TRIE_LENGTH; i++)
    {
        unload_trie(root);
    }
    // free root trie
    free(root);
    return true;
}

/**
 * Maps single characters to an integer index for the trie structure.
 * As per problem spec, it DOES NOT check for valid letters.
 * We assume that the dictionary will contain only english alphabet letters 
 * and apostrophes.
 */
int get_index(const char letter)
{
    // map apostrophes to the last index available in the trie structure
    // ("a" -> trie[0], ..., "'" -> trie[26]).
    if (letter == 39)
        return TRIE_LENGTH - 1;
    // uppercase 
    if (letter > 64 && letter < 91)
        return letter % 65;
    // lowercase 
    return letter % 97;
}

/**
 * Free the trie using recursion. 
 * It does not free the root node.
 */
void unload_trie(trie_node *trie)
{
    for (int i = 0; i < TRIE_LENGTH; i++)
    {
        // skip over NULL pointers
        if (trie->children[i] != NULL)
        {
            // traverse with recursion the tree until you hit the bottom level
            unload_trie(trie->children[i]);
            // start by freeing the bottom level pointers
            free(trie->children[i]);
            trie->children[i] = NULL;
        }
    }
}

