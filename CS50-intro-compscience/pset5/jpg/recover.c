/**
 * recover.c - Standard Edition
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Recovers JPEGs from a forensic image.
 */
 
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>

// FAT sector size
#define SECTOR_SIZE 512

// buffer structure
typedef uint8_t BYTE;


int main(int argc, char* argv[])
{
    // open mem card file
    FILE* mem_card = fopen("card.raw", "r");     
    if (mem_card == NULL)
    {
        printf("Could not open card.raw.\n");
        return 1;
    }
    
    // output jpg file pointer
    FILE* output_jpg = NULL;
    
    // counter for output file names
    int jpg_found = 0;
    
    // loop until EOF
    while(true)
    {
        // 512 byte buffer, reset on each cycle
        BYTE buffer[SECTOR_SIZE] = {};
        
        // scan a sector and check for EOF
        for (int i = 0; i < SECTOR_SIZE; i++)
        {
            // check for EOF at the beginning
            if (feof(mem_card))
            {
                // close file pointers and exit
                fclose(mem_card);
                if (output_jpg != NULL)
                    fclose(output_jpg);
                return 0;   
            }
            // read 1 byte at a time
            fread(&buffer[i], sizeof(BYTE), 1, mem_card);
        }
        
        // analyzing buffer content
        // a new jpg file has been found
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] == 0xe0 || buffer[3] == 0xe1))
        {
            // close the jpg file in if the pointer is active
            if (output_jpg != NULL)
                fclose(output_jpg);
            
            // make a jpg file named [int jpg_found].jpg
            char jpg_name[8];
            sprintf(jpg_name, "%03d.jpg", jpg_found);
            // try to open the output file for writing
            output_jpg = fopen(jpg_name, "w");
            if (output_jpg == NULL)
            {
                printf("There was an error writing the jpg file.\n");
                return 2;
            }
            
            // write the first block on output jpg
            fwrite(&buffer[0], sizeof(BYTE) * SECTOR_SIZE, 1, output_jpg);
            // set next jpg name
            jpg_found++;         
        }
        
        // jpg found and we're already writing on a jpg file
        else if (jpg_found > 0 && output_jpg != NULL)
            // keep writing buffer data on the output jpg
            fwrite(&buffer[0], sizeof(BYTE) * SECTOR_SIZE, 1, output_jpg);
    }
    
    // close data file
    fclose(mem_card);
    
    return 0;
}
