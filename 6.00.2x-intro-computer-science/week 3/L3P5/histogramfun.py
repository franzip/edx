import pylab

# You may have to change this path
WORDLIST_FILENAME = "C:/Users/Administrator/Desktop/Repo/6.00.2x Files/assignment/week 3/L3P5/words.txt"

def loadWords():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print "Loading word list from file..."
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r', 0)
    # wordList: list of strings
    wordList = []
    for line in inFile:
        wordList.append(line.strip().lower())
    print "  ", len(wordList), "words loaded."
    return wordList

def plotVowelProportionHistogram(wordList, numBins=15):
    """
    Plots a histogram of the proportion of vowels in each word in wordList
    using the specified number of bins in numBins
    """
    vowel_ratios = []
    for word in wordList:
        vowels = sum([1 for x in word if x in 'aeiou'])
        vowel_ratios.append(float(vowels) / len(word))
    pylab.figure()
    pylab.title('Vowel ratio in ' + str(len(wordList)) + ' input words.')
    pylab.xlabel('(Word length) / (Vowel) ratio')
    pylab.ylabel('Words X Bin')   
    pylab.hist(vowel_ratios, numBins)
    # prevent x-axis set ticks to 0.2 (0.2, 0.4, ... 1.0). Set to 0.1 instead.
    pylab.axes().set_xticks([x / 10.0 for x in range(0, 11)])
    pylab.show()

if __name__ == '__main__':
    wordList = loadWords()
    plotVowelProportionHistogram(wordList)
    

