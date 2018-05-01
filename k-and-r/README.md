### What is all this about?

I'm currently reading through [The C Programming Language, 2nd Edition](https://en.wikipedia.org/wiki/The_C_Programming_Language) or K&R as it's sometimes known.

No idea how far through it I'll get but here's the project files anyway.

### How do I run the files?

Since C is a compiled language, you'll need a compiler. I'm not sure about Windows but for macOS, you've got Clang built in and for Linux, you'll probably want to use [GCC](https://gcc.gnu.org/).

I have no idea what compilers are recommended for what systems though. I barely even know what I'm doing in the first place!

### How do I compile the files then?

For macOS, you can run `cc` or `clang` which both run the Clang compiler.

It takes in a file as a parameter. To compile hello.c, you would run `cc hello.c` which would currently spit out an `a.out` file.

I say currently because I'm guessing you can change the output name but I wouldn't know how just yet.

To run it, you can type `./a.out` into your terminal and the program should run.

I assume for Linux, it's the same but swap `cc` for `gcc`? Google is your friend anyway.

If you don't have gcc installed, I believe it's part of `build-essential` which you can probably get from your distro package manager.
