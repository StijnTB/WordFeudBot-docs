---
title: player.py
sidebar_position: 10
---

# player.py

the Player class handles most of what the user does. It has few public properties and functions, because it is mainly a user of other class methods:
* *tilerow: PlayerTileRow*: returns the PlayerTileRow object.
* *play() -> None*: this function contains the main player loop. It handles practically everything user related, from updating highlights to executing functions after button interactions.