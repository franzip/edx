/****************************************************************************
 * dictionary.h
 *
 * Computer Science 50
 * Problem Set 6
 *
 * Declares a dictionary's functionality.
 ***************************************************************************/

#ifndef DICTIONARY_H
#define DICTIONARY_H

#include <stdbool.h>

// maximum length for a word
// (e.g., pneumonoultramicroscopicsilicovolcanoconiosis)
#define LENGTH 45
#define TRIE_LENGTH 27

/**
 * Trie structure to load a lexicographically order dictionary in memory.
 * Each node points to (TRIE_LENGTH - 1) long sub-tries. Initially all root's children
 * will be set to be NULL pointers and is_word attribute will be set to false.
 * So each node can be marked with true to indicate the end of a word. 
 * For example, with the input word "abc" the trie will be traversed in the following way:
 * root_node->children[0]->children[2]->children[3]
 * children[3]->is_word = true
 * 
 * The trie is empty, "ABC" is the first word to load.
 * "ABC"  ----->                   *ROOT
                               0      1     2    ...   26
 *               "A" -> ( [x->false][NULL][NULL] ... [NULL] )    1st level of depth
 *                                \
 *                                 \
 *                                 \/
 *                           0      1       2          26
 *               "B" -> { [NULL][x->false][NULL] ... [NULL] }    2nd level of depth
 *                                    \
 *                                     \
 *                                     \/
 *                          0     1      2             26
 *               "C" -> { [NULL][NULL][x->true] ... [NULL]  }    3rd level of depth
 */
typedef struct trie_node
{
    struct trie_node* children[TRIE_LENGTH];
    bool is_word;
} trie_node;

/**
 * Maps single characters to an integer index for the trie structure.
 * As per problem spec, it DOES NOT check for valid letters.
 * We assume that the dictionary will contain only english alphabet letters 
 * and apostrophes.
 */
int get_index(const char letter);

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char* word);

/**
 * Loads dictionary into memory.  Returns true if successful else false.
 */
bool load(const char* dictionary);

/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void);

/**
 * Unloads dictionary from memory.  Returns true if successful else false.
 */
bool unload(void);

/**
 * Free the trie using recursion. 
 * It does not free the root node.
 */
void unload_trie(trie_node *trie);

#endif // DICTIONARY_H
