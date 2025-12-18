---
title: Wordlists
sidebar_position: 2
---

# Wordlists

There are three files that contain the wordlists for this program.  
The first one is *wordlist.txt*, which has the base list of all words allowed to be played in the game. We constructed this list ourselves, as the official Wordfeud list was not available for free in Dutch. Our version is shorter but is at a length at which it does not hinder the game too much.

The second list is *prefixes.json*. This file is used as a dictionary. The keys are all words in the base wordlist which have at least one other entry in the base wordlist with one more letter attached in front of the word. The values linked to these keys are strings that consist of all possible one-letter additions possible before that word.

The third list is *suffixes.json*. This file is used similarly to *prefixes.json*, but instead of suffixes behind the word the values are all possible additions in front of the word.