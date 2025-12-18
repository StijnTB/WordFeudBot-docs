---
title: tilebagclass.py
sidebar_position: 5
---

# tilebagclass.py

The TileBag class handles the tilebag in the game.
This means it deals with operations and checks:
* *grab_letters*: grab a certain amount of letters from the tilebag. When attempting to grab more letters than there are left in the tilebag, grab all letters remaining.
* *swap_letters*: swap a list of letters for new ones. The function first grabs new letters before it puts the old letters into the bag to follow the rules of Scrabble.
* *get_amount_of_letters_remaining*: the total number of letters remaining.
* *get_amount_of_letter*: the number of a specific letter remaining.