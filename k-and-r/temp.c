#include <stdio.h>

/* Print Fahrenheit -> Celcius
  for fahr = 0, 20, ..., 300 */

main() {
  /* Initialise floating point and  integer variables beforehand so they can be used */
  float fahr, celsius;
  int lower, upper, step;

  /* Assign integers to the pre-initialised variables */
  lower = 0; /* Lowest limit of the table */
  upper = 300; /* Highest limit of the table */
  step = 20; /* Increment size */

  fahr = lower;

  printf("F\tC\n");
 
  while (fahr <= upper) {
    celsius = (5.0/9.0) * (fahr - 32.0);

    /* %3.0f states that a floating point number is to be printed at least 3 characters wide with 0 decimal places. */
    /* Similarly, %6.1 states the same but to be printed at least 6 characters wide with 1 decimal place */

    printf("%3.0f %6.1f\n", fahr, celsius);
    fahr = fahr + step;
  }
}
