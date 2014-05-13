def isAlphabeticalWord(word, wordList):
    
    """
    This function checks if a word is alphabetical. A word is alphabetical if 
    letters in the word are in alphabetical order, and is a word from the list 
    of valid words.
    
    For example, if wordList is a list of English words, 'box', 'annoy', and 
    'chips' are alphabetical words, but 'bat' and 'pack' are not because the 
    letters are not in alphabetical order, and 'abcd', 'aqz' are not because 
    they are not words in the wordList.
    
    Without access to a valid wordList, this function is useless. But, it 
    doesn't have to be that way. Your task is to use default values in the 
    function definition so that users of that function may call it without 
    providing a wordList. If no wordList is provided, the function should treat
    all words as valid words, but should still return True or False depending on
    whether the word's letters are in alphabetical order.
    
    For example, isAlphabeticalWord('abcd') should return True but 
    isAlphabeticalWord('zoo') should return False.
    
    """
    
    if (len(word) > 0):
        curr = word[0]
    for letter in word:
        if (curr > letter):
            return False
        else:
            curr = letter
    if wordList is None:
        return True
    return word in wordList
    
#    What should the default value for wordList be, so that the function 
#    behaves correctly?   
#    def isAlphabeticalWord(word, wordList = <Code Here> )
#    What should we put as the default value, in the space <Code Here>?    

print isAlphabeticalWord('abcd', wordList = None)