/**
 * resize.c - Hacker Edition
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Resize a 24-bit uncompressed BMP by a given floating point factor n (0.1 <= n <= 100.0) 
 * using the Nearest Neighbor Image Scaling algorithm
 * http://tech-algorithm.com/articles/nearest-neighbor-image-scaling
 */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#include "bmp.h"

#define FILE_HEADER_SIZE sizeof (BITMAPFILEHEADER)
#define FILE_INFO_SIZE sizeof (BITMAPINFOHEADER)

int main(int argc, char *argv[]) {

	// ensure proper usage
	if (argc != 4)
	{
		printf("Usage: ./resize [+]float infile outfile\n");
		return 1;
	}

	// remember filenames
	char *infile = argv[2];
	char *outfile = argv[3];

	// save the resize factor as a combination of its integer part and its first, rounded, decimal place digit
	int int_resize = atoi(argv[1]);
	int dec_resize = floor(fmod(atof(argv[1]), 1) * 10);

	// check also for corner cases like -0.5 (int_resize = 0, dec_resize = -5)
	if ((int_resize < 0 || dec_resize < 0) || (int_resize == 0 && dec_resize == 0))
	{
		printf("Please supply a positive floating point number up to 100: ./resize [+]float infile outfile\n");
		return 1;
	}

	// open input file
	FILE *inptr = fopen(infile, "r");
	if (inptr == NULL)
	{
		printf("Could not open %s.\n", infile);
		return 2;
	}

	// open output file
	FILE *outptr = fopen(outfile, "w");
	if (outptr == NULL)
	{
		fclose(inptr);
		fprintf(stderr, "Could not create %s.\n", outfile);
		return 3;
	}

	// read infile's BITMAPFILEHEADER
	BITMAPFILEHEADER bf;
	fread(&bf, sizeof (BITMAPFILEHEADER), 1, inptr);

	// read infile's BITMAPINFOHEADER
	BITMAPINFOHEADER bi;
	fread(&bi, sizeof (BITMAPINFOHEADER), 1, inptr);

	// ensure infile is (likely) a 24-bit uncompressed BMP 4.0
	if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 ||
					bi.biBitCount != 24 || bi.biCompression != 0)
	{
		fclose(outptr);
		fclose(inptr);
		fprintf(stderr, "Unsupported file format.\n");
		return 4;
	}
	
    
    // save old width and height values for further usage
	int old_width = bi.biWidth; 
	int old_height = abs(bi.biHeight);
	
	// set new width and height for the output file header
	// int_resize accounts for the integer part of the scaling factor, dec_resize for its decimal part
    bi.biWidth = (bi.biWidth * int_resize) + (bi.biWidth * dec_resize) / 10;
    bi.biHeight = (bi.biHeight * int_resize) + (bi.biHeight * dec_resize) / 10;
    
    // save old and new padding
	int old_padding = (4 - (old_width * sizeof (RGBTRIPLE)) % 4) % 4;
	int new_padding = (4 - (bi.biWidth * sizeof (RGBTRIPLE)) % 4) % 4;
    
    // set correct size on BITMAPFILEHEADER and BITMAPINFOHEADER output file
	bi.biSizeImage = abs(bi.biHeight) * ((bi.biWidth * sizeof (RGBTRIPLE)) + new_padding); 
	bf.bfSize = bi.biSizeImage + FILE_HEADER_SIZE + FILE_INFO_SIZE;

	// write outfile's BITMAPFILEHEADER
	fwrite(&bf, sizeof (BITMAPFILEHEADER), 1, outptr);

	// write outfile's BITMAPINFOHEADER
	fwrite(&bi, sizeof (BITMAPINFOHEADER), 1, outptr);
    
    // temporary array to save input file pixels (padding excluded)
    RGBTRIPLE inptr_buffer[old_height * old_width];
    
    // since we store the input file pixels sequentially, set up an index
    int index = 0;
    
    for (int i = 0; i < old_height; i++)
    {
        for (int j = 0; j < old_width; j++)
        {
            // temporary storage to fit a single pixel
            RGBTRIPLE triple;
            
            // read RGB triple from infile
            fread(&triple, sizeof (RGBTRIPLE), 1, inptr);
            
            // write into the array sequentially
            inptr_buffer[index] = triple;
            index++;
        }
        
        // do not copy padding pixels
        fseek(inptr, old_padding, SEEK_CUR);  
    }

    // both old_width/new_width and old_height/new_height ratios are needed 
    // in order to map the correct inptr_buffer pixels to the output bmp file
    double x_resize_ratio = old_width / (double) bi.biWidth;
    double y_resize_ratio = fabs(abs(old_height) / (double) bi.biHeight);
	
	// variable for loop computations
	double px, py;
	
	// iterate over outputr and fill it with pixels
	for (int i = 0, biHeight = abs(bi.biHeight); i < biHeight; i++)
	{
	    for (int j = 0; j < bi.biWidth; j++)
	    {
	       // px and py adjust row and column pointers accordingly to x and y resize ratios
	       px = floor(j * x_resize_ratio);
	       py = floor(i * y_resize_ratio);
	       
	       // use nearest neighbor image scaling formula
	       fwrite(&inptr_buffer[(int) ((py * old_width) + px)], sizeof (RGBTRIPLE), 1, outptr);
	    }
	    for (int k = 0; k < new_padding; k++)
	    {
	       // write padding pixels
	       fputc(0x00, outptr);
	    }
	}

	// close infile
	fclose(inptr);

	// close outfile
	fclose(outptr);

	// that's all folks
	return 0;
}
