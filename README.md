---
tags: todo, arrays, objects
languages: JavaScript, js
level: advanced
---

# Atbash Cipher

## Background

In honor of the legendary [Alan Turing](http://en.wikipedia.org/wiki/Alan_Turing) we're going to practice some decryption by creating our own cipher.  It won't be as amazing as the enigma machine, but we won't have to worry about Mr. Turing cracking it either. 

The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the
second-last, and so on.

An Atbash cipher for the Latin alphabet would be as follows:

```
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: zyxwvutsrqponmlkjihgfedcba
```

It is a very weak cipher because it only has one possible key, and it is a
simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

## Examples

- Encoding "test" gives "gvhg"
- Decoding "gvhg" gives "test"


To run the specs follow these commands:
- first install the new gem to run the tests (if it isn't installed already on your computer).
  - `gem sources -a http://flatiron:33west26@gems.flatironschool.com`
  - `gem install learn-co`
- to run in the command line run
  -  `learn`
- to run in the browser
  - `learn -b`
