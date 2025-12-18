---
title: sidebar.py
sidebar_position: 9
---

# sidebar.py

The sidebar file contains the five classes which make up the complete sidebar object: BaseButton, NumberButton, Scores, ButtonSet and SideBar.

## BaseButton

The BaseButton class defines basic properties for the sidebar buttons. It handles basic visuals.
* *vertical_range: tuple[int,int]*: the y-coordinates between which the button is situated.
* *horizontal_range: tuple[int,int]*: the x-coordinates between which the button is situated.
* *highlighted: bool*: whether the button is highlighted or not. This depends on the mouse location of the player.
* *hidden: bool*: whether the button is hidden or not.
* *text: str*: the text displayed on the button.
* *dimensions: tuple[int,int]*: the width and height of the button.
* *coordinates: tuple[int,int]*: the centre coordinates of the button.

## NumberButton

The NumberButton class inherits from the BaseButton class. It is made specifically for the number buttons in the submenu for swapping tiles, so it has no extra properties after instancing.

## Scores

The Scores class handles the visualisation of both the player and bot scores. it has two public properties, those being the score variables:
* *player_score: int*: the score of the player.
* *bot_score: int*: the score of the bot.

## ButtonSet

The ButtonSet class is a wrapper for the combined buttons in the sidebar. It has no public properties, but it does have an externally used function:
* *get_swappable_indexes() -> list[int]*: when the player swaps letters, this function returns a list with the indexes of the tiles in the tilerow he wants to trade based on whether those NumberButtons are highlighted.

## SideBar

The SideBar class wraps around the entirety of the objects in the sidebar, those being the buttons in the ButtonSet and the Scores object. It has the following public properties:
* *score_object: Scores*: returns the Scores object to change the player or bot scores.
* *button_set: ButtonSet*: returns the ButtonSet object to handle interactions with different buttons.
* *horizontal_range: tuple[int,int]*: returns the x-coordinates between which the sidebar is located.
* *vertical_range: tuple[int,int]*: returns the y-coordinates between which the sidebar is located.

The SideBar class also has a few publically used functions:
* *recalculate_button_highlights(mouse_coordinates: tuple[int,int]) -> None*: updates the *highlighted* state for the buttons in the *ButtonSet* object based on the location of the mouse.
* *switch_number_button_visibility() -> None*: hides or reveals the NumberButtons when swapping letters.
* *button_clicked(mouse_coordinates: tuple[int,int]) -> BaseButton | None*: returns the BaseButton button that was clicked if one was clicked and None if no button was clicked based on the mouse coordinates.
* *swap_state_button_clicked(mouse_coordinates: tuple[int,int]) -> None | Literal["Swap_state_back", "Swap_letters"]*: hides or reveals the NumberButtons and returns what swap state the game is currently in. The swap state shows in what phase of the letter trading process the player currently is.