---
title: bot.py
sidebar_position: 12
---

# bot.py

the Bot class is the base for the bots and was supposed to handle all standard interactions between the computer and the game. In the end though, we opted for a single bot class that contained all 4 possible bots, so the Bot class is a lot less important. It has one public property:
* *tilerow: BotTileRow*: the tilerow of the bot.