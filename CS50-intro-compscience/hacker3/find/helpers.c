/**
 * helpers.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Helper functions for Problem Set 3.
 */
       
#include <cs50.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    // iterative binary search
    int upper, lower, mid;
    upper = n - 1;
    lower = 0;
    mid = (upper + lower) / 2;
    
    
    while (lower <= upper)
    {
        if (values[mid] == value)
            return true;
        else if (values[mid] > value)
            upper = mid - 1;
        else if (values[mid] < value)
            lower = mid + 1;
            
        mid = (upper + lower) / 2;       
    }
    
    return false;
}


/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{   
    // no need to sort
    if (n <= 1)
        return;
        
    int to_swap;
    
    // insertion sort
    for (int i = 1; i < n; i++)
    {
        int sorted_idx = i;
        while (sorted_idx > 0 && values[sorted_idx] < values[sorted_idx - 1])
        {
            to_swap = values[sorted_idx];
            values[sorted_idx] = values[sorted_idx - 1];
            values[sorted_idx - 1] = to_swap;
            
            sorted_idx--;
        }
    }
    
    return;
}
