#include <stdio.h>

main() {
  /* Initialise a double precision floating point, larger than the previous long */
  double nc;

  /* This program would break if it was a while loop with no input so we're using a for loop */

  /* Starting at 0, while EOF hasn't been received, keep incrementing nc by 1 */
  for (nc = 0; getchar() != EOF; ++nc)
    ; /* Since the loop logic is all we need, we can leave the loop body empty! */
    /* The standalone semicolon actually returns a null value. It's only on a seperate line for visibility */
    /* Output the count telling printf to expect a float and display only 1 decimal place */
    printf("%.0f\n", nc);
}
