/**
 * fifteen.c
 *
 * Computer Science 50
 * Problem Set 3
 *
 * Implements the Game of Fifteen (generalized to d x d).
 *
 * Usage: ./fifteen d
 *
 * whereby the board's dimensions are to be d x d,
 * where d must be in [MIN,MAX]
 *
 * Note that usleep is obsolete, but it offers more granularity than
 * sleep and is simpler to use than nanosleep; `man usleep` for more.
 */
 
#define _XOPEN_SOURCE 500

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// board's minimal dimension
#define MIN 3

// board's maximal dimension
#define MAX 9

// blank symbol
#define BLANK 95

// board, whereby board[i][j] represents row i and column j
int board[MAX][MAX];

// board's dimension
int d;

// prototypes
void clear(void);
void greet(void);
void init(void);
void draw(void);
bool move(int tile);
bool won(void);
void save(void);

int main(int argc, string argv[])
{
    // greet player
    greet();

    // ensure proper usage
    if (argc != 2)
    {
        printf("Usage: ./fifteen d\n");
        return 1;
    }

    // ensure valid dimensions
    d = atoi(argv[1]);
    if (d < MIN || d > MAX)
    {
        printf("Board must be between %i x %i and %i x %i, inclusive.\n",
            MIN, MIN, MAX, MAX);
        return 2;
    }

    // initialize the board
    init();

    // accept moves until game is won
    while (true)
    {
        // clear the screen
        clear();

        // draw the current state of the board
        draw();

        // saves the current state of the board (for testing)
        save();

        // check for win
        if (won())
        {
            printf("ftw!\n");
            break;
        }

        // prompt for move
        printf("Tile to move: ");
        int tile = GetInt();

        // move if possible, else report illegality
        if (!move(tile))
        {
            printf("\nIllegal move.\n");
            usleep(500000);
        }

        // sleep for animation's sake
        usleep(500000);
    }

    // that's all folks
    return 0;
}

/**
 * Clears screen using ANSI escape sequences.
 */
void clear(void)
{
    printf("\033[2J");
    printf("\033[%d;%dH", 0, 0);
}

/**
 * Greets player.
 */
void greet(void)
{
    clear();
    printf("GAME OF FIFTEEN\n");
    usleep(2000000);
}

/**
 * Initializes the game's board with tiles numbered 1 through d*d - 1,
 * (i.e., fills board with values but does not actually print them),
 * whereby board[i][j] represents row i and column j.
 */
void init(void)
{
    int swap;
    
    // fill the tiles
    for (int row = 0; row < d; row++)
    {
        for (int column = 0; column < d; column++)
        {
            // insert blank character at the bottom right
            if ((row == d - 1) && (column == d - 1))
                board[row][column] = BLANK;
            else
                board[row][column] = ((d * d) - 1) - ((row * d) + column);
        }
    }
    
    // swap 1 and 2 positions for N x N grids if N is even
    if (d % 2 == 0)
    {
        swap = board[d - 1][d - 2];
        board[d - 1][d - 2] = board[d - 1][d - 3];
        board[d - 1][d - 3] = swap;
    }
}

/**
 * Prints the board in its current state.
 */
void draw(void)
{
    for (int row = 0; row < d; row++)
    {
        for (int column = 0; column < d; column++)
        {
            if (board[row][column] == BLANK)
                // print ASCII for blank tile
                printf(" %c   ", board[row][column]);
            else
                printf("%2d   ", board[row][column]);
        }
        printf("\n");
    }
}

/**
 * If tile borders empty space, moves tile and returns true, else
 * returns false. 
 */
bool move(int tile)
{
    // reject BLANK constant
    if (tile == BLANK)
        return false;
    
    int blank_row, blank_column, swap;
    bool tile_found = false; 
    
    for (int row = 0; row < d; row++) 
    {
        for (int column = 0; column < d; column++)
        {   
            // save offsets for blank and set flag for the swapping operations
            if (board[row][column] == BLANK)
                blank_row = row, blank_column = column;
            if (board[row][column] == tile)
                tile_found = true;
        }
    }    
    
    // check for legal moves IFF tile is in the grid
    if (tile_found)
    {   
        // set swap once for multiple cases
        swap = board[blank_row][blank_column];
        
        // check legal moves and perform correct swaps
        if (board[blank_row][blank_column + 1] == tile)           
        {
            board[blank_row][blank_column] = board[blank_row][blank_column + 1];
            board[blank_row][blank_column + 1] = swap;
            return true;
        }
        
        else if (board[blank_row][blank_column - 1] == tile)            
        {
            board[blank_row][blank_column] = board[blank_row][blank_column - 1];
            board[blank_row][blank_column - 1] = swap;
            return true;
        }
        
        else if (board[blank_row + 1][blank_column] == tile)             
        {
            board[blank_row][blank_column] = board[blank_row + 1][blank_column];
            board[blank_row + 1][blank_column] = swap;
            return true;
        }
        
        else if (board[blank_row - 1][blank_column] == tile)             
        {
            board[blank_row][blank_column] = board[blank_row - 1][blank_column];
            board[blank_row - 1][blank_column] = swap;
            return true;
        }
    }
    
    return false;
}

/**
 * Returns true if game is won (i.e., board is in winning configuration), 
 * else false.
 */
bool won(void)
{
    int count = 1, tile = 1;
    
    for (int row = 0; row < d; row++)
    {
        for (int column = 0; column < d; column++)
        {
            if (board[row][column] == tile && count == tile)
            {           
                if (tile == (d * d) - 1)
                    return true;
                
                tile++;                   
            }   
            count++;
        }
    }

    return false;
}

/**
 * Saves the current state of the board to disk (for testing).
 */
void save(void)
{
    // log
    const string log = "log.txt";

    // delete existing log, if any, before first save
    static bool saved = false;
    if (!saved)
    {
        unlink(log);
        saved = true;
    }

    // open log
    FILE* p = fopen(log, "a");
    if (p == NULL)
    {
        return;
    }

    // log board
    fprintf(p, "{");
    for (int i = 0; i < d; i++)
    {
        fprintf(p, "{");
        for (int j = 0; j < d; j++)
        {
            fprintf(p, "%i", board[i][j]);
            if (j < d - 1)
            {
                fprintf(p, ",");
            }
        }
        fprintf(p, "}");
        if (i < d - 1)
        {
            fprintf(p, ",");
        }
    }
    fprintf(p, "}\n");

    // close log
    fclose(p);
}
