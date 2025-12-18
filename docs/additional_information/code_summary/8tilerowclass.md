---
title: tilerowclass.py
sidebar_position: 8
---

# tilerowclass.py

The tilerowclass file has three classes: the base TileRow class, the PlayerTileRow class for the visual player tilerow and the BotTileRow class for the tilerow of the bot. 
## TileRow

the TileRow class contains the basic properties for both specialised tilerow classes. It has the following property and function:
* *tile_list: list[str]*: a list of at most seven letters on the tilerow.
* *get_remaining_points() -> int*: returns the total number of points from the letters remaining in the tilerow.

## PlayerTileRow

The PlayerTileRow handles interaction with the tilerow by the player. It has the following public properties:
* *selected_tile_index: int*: the index between zero and seven of the tile in the tilerow that is currently selected. When no tile is selected, the index is set to -1.
* *selected_letter: str*: the letter that is linked to the tile of the *selected_tile_index*.
* *board_set_tile_list: list[tuple[int,int]]*: a list with all BoardTile coordinates which have an attempt tile on them.

the PlayerTileRow also has a few public methods:
* *swap_letters(list_of_swapped_indexes: list[int]) -> None*: swap the letters at the indexes in *list_of_swapped_indexes* for new ones from the tilebag.
* *reload_tiles() -> None*: reloads the RowTile objects for every letter in the *tile_list*.
* *shuffle_row() -> None*: shuffles the letters in the tilerow to different places and reloads the RowTile visuals.
* *change_selected_tile(mouse_coordinates: tuple[int,int]) -> None*: change the *selected_tile_index* and *selected_letter* properties based on where the player has clicked.
* *hide_selected_tile(clicked_board_tile_coordinates: tuple[int,int]) -> None*: changes the type of a RowTile to hide it and change the color to dark when the tile is attempted on the board.
* *return_full_tilerow() -> None*: recalls the entire tilerow back from the board onto the tilerow.
* *return_clicked_tile(letter: str, uncheck: bool, board_tile_coordinates: tuple[int,int], tile_is_blank: bool) -> None*: returns the *letter* at *board_tile_coordinates*. If *is_blank*, the letter is reverted to " " on the tilerow. If *uncheck*, another tile is currently selected. First uncheck that tile, then execute the standard operation.
* *get_new_letters() -> None*: grabs new letters from the tilebag to replace the played ones.


## BotTileRow

The BotTileRow deals with maintaining the tilerow of the bot:
* *get_new_letters(letters_to_replace: list[str]) -> None*: removes the letters in *letters_to_replace* and grabs new ones from the tilebag.
* *swap_letters(letters_to_return: list[str]) -> None*: swaps the letters in *letters_to_return* for new ones from the tilebag.