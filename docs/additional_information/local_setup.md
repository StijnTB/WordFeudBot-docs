---
sidebar_position: 2
title: Local Setup
---

# Local Setup

To speed up the process of setting up our project on your own local device, we have written some simple instructions.

## Download

You can download a zip file containing the codebase from the [GitHub repository][GitHub_Repo], or directly by clicking on [this link][Direct_Download]. After you have downloaded it, you unpack it in the location you want to.

## Requirements
included in the project folder is a requirements.txt file which you can use to install all necessary Python modules by pasting the following line in the terminal.

```bash
python -m pip install --upgrade -r requirements.txt
```

This is not much more efficient though, as the only module we use that is not included in the Python standard library is Pygame.

## Running the program

To execute the program, you need to run the *WordFeud_basegame.py* file. This will load up the entire game and bot, although it might take a few minutes depending on your device.

[GitHub_Repo]: https://github.com/StijnTB/PWS-2526-WordFeudBot
[Direct_Download]: https://github.com/StijnTB/PWS-2526-WordFeudBot/archive/refs/heads/main.zip