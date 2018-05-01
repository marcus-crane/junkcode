#include <stdio.h>

/* Here is a more compact way of writing the same program */

/* In this example, we only have one reference to getchar() and overall, it's easier to read */
/* We also don't need to reassign getchar() to c as the checking is done before the loop executes */

main() {
  int c;
  while ((c = getchar()) != EOF)
    putchar(c);
}
