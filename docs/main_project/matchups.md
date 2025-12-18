---
title: Research
sidebar_position: 5
---

# Research

As mentioned in Methodology, our design process included long and thorough simulation. From those simulation logs, we were able to do some research. The main results of that research are summarized in the table provided below

| Bot 1 | Bot 2 | Wins bot 1 | Wins bot 2 | wl-ratio bot 1 | wl-ratio bot 2 | Avg. score bot 1 | Avg. score bot 2 | σ bot 1 | σ bot 2 | t̅ bot 1 | t̅ bot 2 |  
| - | - | - | - | - | - | - | - | - | - | - | - |
| Greedy | Chance | 26 | 35 | 1 : 1.346 | 1 : 0.743 | 479 | 493 | 49.9 | 65.6 | 04:32 | 10:28 |  
| Greedy  | Boardposition | 51 | 34 | 1 : 0.667 | 1 : 1.500 | 448 | 433 | 57.6 | 60.4 | 05:09 | 05:40 |  
| Greedy  | Combi | 45 | 57 | 1:1,217 | 1:0,821 | 464 | 500 | 65,2 | 69,9 | 05:13 | 10:19 |  

Clarification for the table:
* Avg. score: the average score the bot had after the game ended.
* σ: the standard deviation from the average score.
* t̅: the average time taken for the own moves in one game (minutes:seconds).
* wl-ratio: the ratio between games won and games lost (1 win:number of losses per win).

## Observations from the results

There are a few notable observations to be made when reviewing these statistics.  
Firstly, an incredibly interesting set of numbers are the win-lose ratios. Although the Combi bot was supposed to be the strongest bot and should have thus had the lowest win-lose ratio, Chance actually has a better one. Meanwhile, Boardposition has, as the only one of the 'more advanced' bots, a win-lose ratio greater than 1.
Firstly, it is interesting to see that in the matchup between Greedy and Boardposition, the win-lose ratio for Greedy is 51-34. This means that Boardposition is the only 'more advanced' bot that has lost to Greedy more often than it has won. This observation does have more context to be placed in, that being the average score. Comparing the average score of Greedy between its matchup against Chance and its games with Boardposition shows a decrease in the average score of more than 30 points. These lower scores might be due to the mostly defensive strategy of Boardposition, which prevents Greedy from getting high scoring moves. Accordingly to our hypothesis, Combi has the highest average score of any bot, although Greedy also has a higher average in that matchup.

Secondly, the average time per game is a stat where a large difference is to be spotted. Chance takes more than twice as long as Greedy in its own matchup, and there is also a comparable factor between its time and the times in the Greedy vs. Boardposition matches. Combi takes after Chance when looking at these times, with an average only 9 seconds lower than that of Chance.