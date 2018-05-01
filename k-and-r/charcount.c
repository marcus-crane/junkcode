#include <stdio.h>

/* This program counts the number of characters within input */

main() {
  /* Initialise a long with the name nc */
  /* We're using a long since they're at least 32 bits */
  /* int and longs can be the same on same machines but on others, ints are only 16 bits (max value of 32767) */
  /* With a number that small, you could just parse in an essay and overflow the program! */
  long nc;

  /* By default, nc has a value of 0 */
  nc = 0;

  /* As long as the EOF character isn't received */
  while (getchar() != EOF)
    /* Increment nc by 1 */
    /* nc = nc + 1 would give the same result as ++nc but it's longer */
    /* We could also do nc++ instead of ++nc. They have the same effect */
    /* They can have different effects in expressions though but I don't know what those are yet */
    ++nc;
  /* Once the loop is broken, output the value of nc plus a newline */
  /* %1d tells printf to expect a /long/ integer. */
  printf("%1d\n", nc);
}
