/**************************************************\
* HarvardX CS50 - PSet1 - mario.c - Hacker Edition *
*                                                  *
\**************************************************/

#include <stdio.h>
#include <cs50.h>

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
    while (height < 0 || height > 23);
    
    if (height) 
    {
        for (int row = 0; row < height; row++) 
        {
            for (int col = 0; col < (height * 2) + 2; col++)
            {
                if (((col <= height - 1) && (col >= height - 1 - row)) ||
                    ((col <= height + 2 + row) && (col >= height + 2)))
                    printf("#");
                // do not print spaces on the right side of the right pyramid
                else if ((col == height) || (col == height + 1) || 
                        (col < height - row - 1)) 
                    printf(" "); 
            }
            printf("\n");
        }
    }
    return 0;
}
