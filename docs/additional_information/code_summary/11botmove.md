---
title: botmove.py
sidebar_position: 11
---

# botmove.py

The botmove file contains the BotMove class for easy access of properties and the TypedDict BotMovePropertiesDict for fast complete information collection. Every possible move has a BotMove object.  
The BotMove class gives a wrapper around every property a possible move of the bot has. This class has the most public properties due to everything being useable:
* *move_attempted_letters: list[str]*: a list of the letters placed in the attempted move.
* *move_attempted_words: list[str]*: a list of the words formed by placing the letters in *move_attempted_letters*.
* *move_coordinates: list[tuple[int,int]]*: the coordinates where the letters in *move_attempted_letters* are placed.
* *move_direction: tuple[int,int]*: the direction the main word is in.
* *score: int*: the base number of points received for the move.
* *bingo_bonus_score: float*: the score given by the Chance- and Combibots based on the ability to, in the next turn, play a bingo.
* *position_degradation_score: float*: the score given by the Boardposition- and Combibots based on the dangerous situations created by the current move.
* *properties: BotMovePropertiesDict*: a dictionary with all the properties as mentioned above.