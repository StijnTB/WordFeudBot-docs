---
title: competition_bot.py
sidebar_position: 13
---

# competition_bot.py

As previously mentioned, the main code for the bots is contained in one class: CompetitionBot. Because this is the code you are probably most interested in, we will discuss all internal functions and the more important variables per component.

## Basic move code

This section covers the main function *competition_bot_play* and *getGreedyMove*, and the backend functions *get_letters_in_array*, *get_attempt_objects_in_array*, *try_word_on_tile*, *ends_out_of_bounds*, *word_has_letters_before_or_after*, *rearranges_tiles*, *touches_no_tiles*, *get_points_and_attempted_words* and *filter*, and *countFrequencyOfEachLetterType*, *letterTypesInWord*, *hasLetterTypes* and *hasNeededLetters* for backend tasks to make filtering words faster.

The main functionality of the bot lies in *competition_bot_play()*: this is the only function of the class that gets called externally. It uses *getGreedyMove* to get the best move and then attempts to execute that move. If anything in that process fails, the bot passes. Otherwise, it will place the tiles and grab new letters. If the bot type is Chance or Combi, a *bingo_bonus_score* of more than zero can be achieved so another option is to swap letters.

*getGreedyMove()* decides what the best move is. It does this in a few steps. The first one, if the bot is Chance or Combi, is selecting the letter swap that gives the highest *bingo_bonus_score*, adding that to the *possible_moves_list* and making it the *best_move_greedy*. After this, the letters in that row or column combined with the letters in the tilerow are passed to *get_attempt_objects_in_array* function for every row and column if they either touch a row or column respectively that has a letter in it, or have a letter themselves (*skip_array*). The *best_move_greedy* is compared to the best moves for both vertical and horizontal and updated if there is a better move available. *best_move_greedy* is then returned.

*get_letters_in_array()* takes the arguments *row_or_column* which decides the direction, and *array_index* which decides the index of the row or column that is supposed to be checked. It returns the letters currently in that row or column in a string.

*get_attempt_objects_in_array()* takes the arguments *row_or_column*, *array_index*, *tiles_in_array* and *bingo_dict*. *row_or_column* and *array_index* serve the same purpose as in *get_letters_in_array*, while *tiles_in_array* is a string consisting of the letters in the row or column combined with the letters in the tilerow and *bingo_dict* is the dict with letters to be played linked to bingo chances in the next turn, as created in *getGreedyMove()*. The function first uses *filter()* to get all words possible with the letters in *tiles_in_array*, not yet looking at whether those letters are already on the board or where they might be placed. After this, every word is tried on every tile in the row or column using *try_word_on_tile*, which returns information for the move if it is valid and *False* if it is an invalid move. The moves are added to the *possible_moves_list* and compared to the current best move in that direction. After this is done fifteen times (once for every row or column), the *best_move_greedy* and *possible_moves_list* for that direction are returned.

*try_word_on_tile()* checks whether playing a word *word* starting at a certain tile *tile* in the direction *direction* with the letters in *tiles_in_array* available is a valid move. It executes five checks, after each of which it is possible to return *False* and exit the function:
* *ends_out_of_bounds()* checks if the main word would have letters outside of the board.
* *touches_no_tiles()* checks if the word would touch any tiles.
* *word_has_letters_before_or_after()* checks whether the word still has letters before or after it on the board. If so, the word is invalid.
* *rearranges_tiles()* makes sure that playing this word does not move any tiles or clear out spaces that were previously occupied by letters, since this is not prevented in the *filter* function.
* *get_points_and_attempted_words()* returns *False* if any other created words are invalid, and otherwise returns the information about the move that is encapsulated in a BotMove object.

*filter()* takes a string with the letters that are available and returns a list of all words that can be created with those characters. It works based on letter frequencies to optimize for speed. 

## Bingo score

Besides the standard operations, the Chance- and Combibots also need to calculate a *bingo_bonus_score* to evaluate a move. This is done with the following functions: *valid_words*, *brute_force*, *sampling*, *bingo_chance*, *update_bingo_bonus_score* and *get_bingo_dict*.

*valid_words()* takes a list of characters as input and returns a list of seven-letter words that can be created with either zero, one or two blank tiles, depending on how many the bot currently has.

*brute_force()* gives the chance 

*sampling()* 

*bingo_chance()*

*update_bingo_bonus_score()* combines the functionality of the previously mentioned functions to calculate a *bingo_bonus_score*.

*get_bingo_dict()* is used to create the bingo dict passed to *update_bingo_bonus_score*. This dictionary contains the chance that, for any combination of letters the bot has in its tilerow and can play, he will be able to play a bingo in the next turn.

## Boardposition score

To calculate the *boardposition_score* for the Boardposition- and Combibots, three functions are used: *update_boardposition_score*, *get_danger_word_played_alongside*, *get_expected_multiplication* and *get_score_difference*.

*update_boardposition_score()* is the longest function in the class due to the complicated nature of the boardposition score. It returns a *degradation_value* based on expected multiplications for each played tile and the possibilities for playing a word before or after it and alongside it. Since we found it plays relatively defensively, the returned *boardposition_score* is made smaller when the score difference (opponent's score - own score) is greater. This difference is determined in *get_score_difference()*.

*get_danger_word_played_alongside()* returns a float that is bigger when the danger that a word is played alongside the currently played word is bigger. We have limited the number of calculations the function has to do by only checking for words that end next to the first tile and ones that start next to the last tile.

*get_expected_multiplication()* takes a tile *current_tile* and calculates an expected multiplication factor in *check_direction*. This factor is the predicted multiplication a word played over that tile will have due to TW- and DW-tiles.