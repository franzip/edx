/*****************************************************\
* HarvardX CS50 - PSet1 - mario.c - Standard Edition  *
*                                                     *
\*****************************************************/

#include <stdio.h>
#include <cs50.h>

// define magic numbers
#define MIN_HEIGHT 0
#define MAX_HEIGHT 23

int main(void) 
{
    // declare user input variable
    int height;
    
    // ask user input loop
    do 
    { 
        printf("Height: ");
        height = GetInt();       
    }
    while (height < MIN_HEIGHT || height > MAX_HEIGHT);
    
    // generate the pyramid
    for (int row = height; row > 0; row--) 
    {
        for (int col = 0; col < height + 1; col++)
        {
            printf("%s", (col + 1 >= row) ? "#" : " ");
        }
        
        printf("\n");
    }
    
    return 0;
}
