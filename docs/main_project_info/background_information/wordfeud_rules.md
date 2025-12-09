---
title: WordFeud Ruleset
sidebar_position: 2
---

# WordFeud Rules

Wordfeud is a relatively simple game and shares most of its rules with Scrabble. We took the rules from [the official WordFeud website][WF_website], leaving out the rules which are not relevant for our version of the game: the *Turn time limit* and the information about *Account termination*. We also created our tilebag based on the *Tile distribution* for Dutch.  

To make it clear, we used the following rules.  
* A turn consists of one of the following three actions: play a word; pass; trade letters.  
    * Play a word:  
        * The played word and all words formed by the laid tiles must exist in the dictionary of the language chosen for the game.  
        * The tiles of the word must touch a tile which was played in a previous turn. Exception to this rule is the first turn, in which a tile must be played on the center space of the board.  
        * After playing a word, the player receives the amount of tiles from the tilebag which he has played. If there are not enough tiles in the tilebag, the player will receive the remaining tiles left in the tilebag.  
    * pass: A player may always pass his turn. The turn will now go to the opponent.  
    * Trade letters: A player may trade letters if there are 7 or more tiles in the tilebag.  
* The player receives points by playing words.  
    * Every letter is worth a certain amount of points, which is visible in the bottom right corner.  
    * Every newly formed word is taken into account for the total score.  
    * Bonus tiles are only taken into account if they were not yet covered at the start of the turn.  
    * A player receives a bonus of 40 points when he plays a bingo: he plays all 7 tiles on his tilerow.  
* End game:  
    * Both the tilebag and the tilerow of one of the players are empty. The player who has the empty tilerow receives the total value of the opponent's tilerow as a bonus. This same value is subtracted from the opponent's score.  
    * There have been 3 consecutive passes. Both players receive the value of their own tilerow as subtraction from their own score.  
    * The winner is the player with the highest amount of points at the end of the game, after the aforementioned additions and subtractions to the scores.  


[WF_website]: https://wordfeud.com/wfweb/help/