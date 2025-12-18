---
title: boardclass.py
sidebar_position: 7
---

# boardclass.py

The boardclass file contains the Board class: the object which handles everything related to the board. This means playing letters to tiles and resetting them, attempting to play a word, requesting words created and more. It has the following public properties:
* *used_rows: list[bool]*: a list with, for every row, whether a letter has been played in that row.
* *used_columns: list[bool]*: a list with, for every column, whether a letter has been played in that column.
* *game_board: dict[str, dict[str, GameBoardCell]]*: the dictionary which contains all of the board information. A tile is selected by (row, column). the GameBoardCell object contains information for the tile: the tile type, the letter and the BoardTile object linked to that board coordinate.
* *word_tree: TRIE*: handles the main word tree.

the Board class also has the following methods used publically:
* *get_clicked_tile_coordinates(mouse_coordinates: tuple[int,int]) -> tuple[int,int]*: transforms *mouse coordinates* on the display into row and column indexes which it returns in a tuple (row, column).
* *set_letter_to_tile(letter: str, tile_coordinates: tuple[int,int]) -> bool*: attempts to set *letter* to the tile at *tile_coordinates*. Returns *True* if the attempted operation works and *False* if not.
* *get_tile_object(tile_coordinates: tuple[int,int]) -> BoardTile*: returns the BoardTile object for the tile at *tile_coordinates*.
* *reset_tile(clicked_tile_coordinates: tuple[int,int]) -> None*: resets the tile at *clicked_tile_coordinates* back to the empty state with its original tile type.
* *reset_tiles(reset_coordinates_list: list[tuple[int,int]]) -> None*: applies *reset_tile* to every coordinate set in *reset_coordinates_list*.
* *get_word_from_tile(known_tile_coordinate: tuple[int,int], direction: tuple[int,int], complete_tile_list: list[tuple[int,int]], blank_tiles: list[tuple[int,int]] | None) -> tuple[str,int]*: gets the word and score from a certain tile at *known_tile_coordinate* with the word having *direction*. The *complete_tile_list* is used to check whether a special tile is still useable or has already been used. *blank_tiles* is a list with the blank tiles to make sure calculated scores are correct.
* *player_try_word(tile_coordinates_list: list[tuple[int,int]]) -> tuple[bool, int]*: runs when the player attempts to confirm a move. The *tile_coordinates_list* has the coordinate sets of all tiles the player has put on the board in this turn. The function returns *(False, 0)* if the move is invalid, and otherwise returns *(True, score)* with *score* being the number of points awarded for the move.
* *bot_play_word(tile_coordinates_list: list[tuple[int,int]], letters_list: list[str], blanks_list: list[tuple[int,int]]) -> None*: because any move the bot plays is valid, no checks for words are needed and nothing is returned. The letters in *letters_list* are placed at the coordinates in *tile_coordinates_list*, and the value displayed at the tile is made 0 if those coordinates are present in *blanks_list*.