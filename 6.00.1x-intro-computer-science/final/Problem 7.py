# PROBLEM 7-1

def insert(atMe, newFrob):
    """
   atMe: a Frob that is part of a doubly linked list
   newFrob:  a Frob with no links 
   This procedure appropriately inserts newFrob into the linked list that atMe is a part of.    
   """
    # The new chain element has the same name of atMe
    if newFrob.name == atMe.name:
        newFrob.after = atMe.after
        atMe.after = newFrob
        newFrob.before = atMe
        # The new chain element has a next element
        if newFrob.after:
            newFrob.after.before = newFrob
   
    # The new element chain name comes before atMe's name
    elif newFrob.name < atMe.name:
        # atMe is the head of the chain
        if not atMe.before:
            atMe.before = newFrob
            newFrob.after = atMe           
        # atMe is not the head of the chain and its previous element equals newFrob    
        elif atMe.before and atMe.before == newFrob.before:
            newFrob.after = atMe
            atMe.before = newFrob
            newFrob.before.after = newFrob
        else:
            # "normal" case
            newFrob.after = atMe
            insert(atMe.before, newFrob)
    
    # The new element chain name comes after atMe's name          
    else:
        if atMe.after and atMe.after == newFrob.after:
            newFrob.before = atMe
            atMe.after = newFrob
            newFrob.after.before = newFrob
        elif atMe.after == None:
            atMe.after = newFrob
            newFrob.before = atMe
        else:
            newFrob.before = atMe
            insert(atMe.after, newFrob)

# PROBLEM 7-2

def findFront(start):
    """
   start: a Frob that is part of a doubly linked list
   returns: the Frob at the beginning of the linked list
   """
    if not start.getBefore():
        return start
    else:
        return findFront(start.getBefore())
