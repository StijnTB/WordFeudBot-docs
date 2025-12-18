---
title: Main Terminology In Code
sidebar_position: 3
---

# Main Code Terminology
There are a few terms regarding the code that will be used a lot in this report, so this should help to understand it.

# Bots
We have created four bots: Greedy, Chance, Boardposition and Combi. 

The first one, Greedy-bot, tackles the base mechanic of the bot: in its turn, it picks the move which will result in the greatest increase in score in the current turn.

The next two bots, Chance-bot and Boardposition-bot, build upon Greedy-bot to add components based on a strategy we set up.

Chance-bot gives every possible move a score between 0 and 100 based on the chance that the bot will be able to play a bingo in the next turn. this chance is calculated from the statistics of letters used in the word list and the letters remaining on the tilerow and in the tilebag.

Boardposition-bot is the most strategically oriented component. It gives every move a score based on three main factors:
* An expected multiplication for every tile played with the move. This is a multiplication with every TW and DW, with the impact reduced to take word length into account.
* The danger of a word being laid alongside the main word, touching either the first or the last tile.
* The danger of letters being appended to the front or the back of the word.


? DO WHEN CODE SUMMARY IS DONE