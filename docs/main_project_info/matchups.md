---
title: Research
sidebar_position: 4
---

| Bot 1   | Bot 2        | Wins bot 1 | Wins bot 2 | Avg. score bot 1 | Avg. score bot 2 | σ bot 1 | σ bot 2 | t̅ per game bot 1 | t̅ per game bot 2 |
| ------- | ------------ | ---------- | ---------- | ---------------- | ---------------- | ------- | ------- | ---------------- | ---------------- |
| Greedy  | Chance    | 26         | 35         | 479              | 493              | 49.9    | 65.6    | 04:32            | 10:28            |
| Greedy  | Boardposition | 51         | 34         | 448              | 433              | 57.6    | 60.4    | 05:09            | 05:40            |
| Greedy  | Combi| ?          | ?          | ?                | ?                | ?       | ?       | ?                 | ?                 |

Explanations for the table:
* Avg. score: the average score the bot had after the game ended.
* σ: the standard deviation from the average score.
* t̅: the average time.

## Observations from the results

There are a few notable observations to be made when reviewing these statistics.  
Firstly, it is interesting to see that in the matchup between Greedy and Boardposition, the win-lose ratio for Greedy is 51-34. This means that Boardposition is the only 'more advanced' bot that has lost to Greedy more often than it has won. This observation does have more context to be placed in, that being the average score. Comparing the average score of Greedy between its matchup against Chance and its games with Boardposition shows a decrease in the average score of more than 30 points. These lower scores might be due to the fact that the built-in strategy of Boardposition is mostly defensive, preventing Greedy from getting high scoring moves.**also take combi stats into account**  
Secondly, the average time per game is a stat where a large difference is to be spotted. Chance takes more than twice as long as Greedy in its own matchup, and there is also a comparable factor between its time and the times in the Greedy vs. Boardposition matches.