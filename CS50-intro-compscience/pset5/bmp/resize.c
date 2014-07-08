/**
 * resize.c - Standard Edition
 *
 * Computer Science 50
 * Problem Set 5
 *
 * Resize a 24-bit uncompressed BMP by a given integer factor n (1 <= n <= 100)
 */

#include <stdio.h>
#include <stdlib.h>

#include "bmp.h"

#define FILE_HEADER_SIZE sizeof (BITMAPFILEHEADER)
#define FILE_INFO_SIZE sizeof (BITMAPINFOHEADER)

int main(int argc, char *argv[]) {

	// ensure proper usage
	if (argc != 4)
	{
		printf("Usage: ./resize [+]integer infile outfile\n");
		return 1;
	}

	// remember filenames
	char *infile = argv[2];
	char *outfile = argv[3];

	// save the resize factor
	int factor = atoi(argv[1]);
	
	// enforce proper integer input usage
	if (factor < 1 || factor > 100)
	{
		printf("Please supply a positive integer up to 100: ./resize [+]integer infile outfile\n");
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
	int old_height = bi.biHeight;
	
	// set new width and height for the output file header
	bi.biWidth *= factor;
	bi.biHeight *= factor; 

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
    
    // temporary storage for output file pixels
	RGBTRIPLE pixel_array[bi.biWidth];

	// iterate over infile's pixel_arrays
	for (int i = 0, biHeight = abs(old_height); i < biHeight; i++)
	{
		int index = 0;
		
		// iterate over pixels in pixel_array
		for (int j = 0; j < old_width; j++)
		{
			// temporary storage width input file pixels
			RGBTRIPLE triple;

			// read RGB triple from infile
			fread(&triple, sizeof (RGBTRIPLE), 1, inptr);
            
            // sequentially save (factor) times input pixels in pixel_array
			for (int c = 0; c < factor; c++)
			{
				pixel_array[index] = triple;
				index++;
			}
		} 
        
		for (int h = 0; h < factor; h++)
		{
			// write the resized pixel_array 
			for (index = 0; index < bi.biWidth; index++)
				fwrite(&pixel_array[index], sizeof (RGBTRIPLE), 1, outptr);

			// write padding to output file
			for (int k = 0; k < new_padding; k++)
				fputc(0x00, outptr);
		}

		// skip over padding, if any
		fseek(inptr, old_padding, SEEK_CUR);
	}

	// close infile
	fclose(inptr);

	// close outfile
	fclose(outptr);

	// that's all folks
	return 0;
}
