#include <stdio.h>

main() {
  /* Initialise two ints called c and n1 */
  int c, n1;

  /* Set n1 to be 0 */
  n1 = 0;

  /* While the input character isn't EOF */
  while ((c = getchar()) != EOF)
    /* Check if the input character is a newline. If so, increment n1 by 1 */
    if (c == '\n')
      ++n1;
    /* If the EOF value is received, terminate while printing the value of n1 (number of lines) */
    printf("%d\n", n1);
}
