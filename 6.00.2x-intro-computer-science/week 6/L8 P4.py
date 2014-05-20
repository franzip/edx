def yieldAllCombos(items):
    """
      Generates all combinations of N items into two bags, whereby each 
      item is in one or zero bags.

      Yields a tuple, (bag1, bag2), where each bag is represented as 
      a list of which item(s) are in each bag.
    """
    n = len(items)
    for x in xrange(3**n):
        b1, b2 = [], []
        for y in xrange(n):
            if (x / (3**y) % 3 == 1):
                b1.append(items[y])
            elif (x / (3**y) % 3 == 2):
                b2.append(items[y])
        yield (b1, b2)
                