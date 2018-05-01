#include <stdio.h>

/* Accept input one character at a time and then spit it back out via output */

main() {
  /* Initalise an integer variable called c */
  /* The reason we use int and not char is because the variable needs to be able to hold a char + EOF eg; 'jEOF' */
  int c;

  /* Call the getchar function reading the next character from the input stream (eg keyboard) */
  c = getchar();
  /* As long as the End of File terminator hasn't been received... */
  while (c != EOF) {
    /* Spit that same letter out via the getchar() function */
    putchar(c);
    /* and then reassign c to be getchar() continuing the loop until EOF is received! */
    c = getchar();
  }
}

/* N̶o̶t̶e̶:̶ ̶I̶n̶ ̶m̶o̶s̶t̶ ̶c̶a̶s̶e̶s̶,̶ ̶t̶h̶e̶ ̶s̶h̶o̶r̶t̶c̶u̶t̶ ̶f̶o̶r̶ ̶t̶h̶e̶ ̶E̶O̶F̶ ̶c̶h̶a̶r̶a̶c̶t̶e̶r̶ ̶i̶s̶ ̶C̶t̶r̶l̶ ̶+̶ ̶C̶ */

/* Note: My entire life has been a lie. Ctrl + D sends EOF whereas Ctrl + C just quits a program */
