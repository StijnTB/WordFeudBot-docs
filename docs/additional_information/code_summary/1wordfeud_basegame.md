---
title: WordFeud_basegame.py
sidebar_position: 1
---

# WordFeud_basegame.py

This file is the one to run if you want to play a game against the bot. It executes a multitude of tasks:
* It initiates Pygame;
* It loads in the wordlists;
* If you play against Chance or Combi, a dictionary is created which ...;
* It initiates the board, tilebag, sidebar, player and bot;
* It runs the while-loop that is the main loop for the game;
    * Every iteration, the main loop lets either the player or the bot make a move, depending on the *turn* variable;
    * After the move is made, a check is run to see whether the game has ended or not. If it has ended, the scores are updated a final time and the main loop is exited;
* It quits Pygame to exit the display;