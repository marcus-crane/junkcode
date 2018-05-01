#include <stdio.h>

/* Fahrenheit -> Celcius version 2 */

main() {
  /* Initialise an empty fahr variable */
  int fahr;

  /* Starting at 0, while fahr is less than 300, do the following increasing fahr by 20 */
  for (fahr = 300; fahr >= 0; fahr = fahr - 20)
    /* Print fahr 3 chars wide and print the temp conversation to be 6 chars wide with 1 decimal place */
    printf("%3d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));
  }
