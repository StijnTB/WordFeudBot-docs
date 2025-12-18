---
title: tileclass.py
sidebar_position: 6
---

# tileclass.py

The tileclass file defines the visual tile objects and their backend code. It contains a base class BaseTile and two specialised classes, BoardTile and RowTile.

## BaseTile

The BaseTile class consists of properties and methods that both specialised classes use. It has the following properties:
* *_tile_size: int*: the dimension of the tile. Since the tile is square, this property does not need to be an array but can simply be a integer.
* *_letter: str*: the letter displayed on the tile.
* *_tile_value: int*: the value of the letter the tile displays. This is zero by default, for the empty tiles.
* *_tile_type: Literal["TW","TL","DW","DL","MI","Empty_tile","Played_tilerow_letter","Set_board/Base_tilerow","Try_board/Selected_tilerow"]*: the type of a tile decides the color and the interactions possible with it.
* *_x: int* & *_y: int*: the central coordinates of a tile on the display.
* *_is_attempt_blank: bool*: whether a tile on the board is actually a blank letter. If the BoardTile is a blank letter, the *_tile_value* is set to zero.

The other properties and the functions of BaseTile are all for internal use, to update the visual aspect.

## BoardTile

The BoardTile class is used for the two hundred twenty-five tiles that make up the board. These tiles have the following important properties that are not mentioned in the BaseTile class:
* *_used: bool*: whether a letter has been played on the tile. If the BoardTile is used, it cannot have another letter played on it.
* *_board_coordinates: tuple[int,int]*: the coordinates the BoardTile takes in on the board. Both the row and the column range between zero and fourteen. These coordinates decide the actual display coordinates.

## RowTile

The RowTile class is used for the seven tiles that are in the tilerow of the player. It has only one extra property, similar to *_board_coordinates* of BoardTile:
* *_row_coordinate: int*: a place the RowTile takes in on the tilerow. It ranges between zero and 6