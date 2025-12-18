---
title: trieclass.py
sidebar_position: 4
---

# trieclass.py

The trieclass file defines the TRIE- and TRIENode-class. These classes are used to transform the main word list into a word tree for more efficient lookup times.

The TRIE-class is the wrapper for the word tree. It handles basic operations on the tree:
* *insert(word: str)*: add *word* to the tree.
* *search_word(word: str)*: look up *word* in the word tree. Returns *True* if found and *False* if not.

Every node in the word tree is a TRIENode. These nodes are linked to a letter and have a child node for every letter that can be put behind it, considering the ancestor nodes on the path between the root node and the current node. The Node has 2 properties:
* *children*: returns a dictionary with every letter that can be put behind it as a key with the TRIENode linked to that letter on that position as the value.
* *is_word*: A boolean which tells the program whether a string formed by the path between the root node and the current node is a valid word in the word list.