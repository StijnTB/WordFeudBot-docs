---
title: Methodology
sidebar_position: 3
---

# Methodology

Here, we will discuss the process that took place during the project, from the idea all the way to our final product.

## The timeline

### The start

The initial month of the project was over quick. We took some time to map out the idea and flesh it out. We also set up [our main Github repository][github_repo] to make sure we could start efficiently during summer break.

### The development phase

We made a good start during summer break, spending around 60 hours to build our own simplified local version of WordFeud to make the integration of the bots easier. During these months, the player side of the game was also developed. The main goal here was to create a solid foundation from which we could expand, so the focus was set on keeping the codebase organised and structured. About the last month was used to create a rudimentary Greedy bot, constructing it from the (pseudo-)code in the [report of Berntsson and Ericsson][report_MB&FE].

We used the first weeks after the start of school (September 8 to September 26) to work out the kinks in this original code base and fix the bugs that turned up. At the same time, a more precise roadmap was created to give us a better idea of the weekly goals and deadlines.

Between the 22nd of September and the 13th of October, the Chance bot was developed and integrated into the main bot. Before this process, we also took a few hours to sketch out the plan for the modularity and setup of the combination of all bots. This period was also filled with testing and bugfixing various components.

From October 20th to the 19th of November, most of our time was put into building the Boardposition bot, which took more time than expected due to the more complicated and in general more difficult strategy behind it. At the same time, the research process began with the first simulation rounds of Greedy against Chance.

When the main development for Boardposition was done, we spent around 2 weeks (until December 5th) bugfixing Boardposition. Another big time consuming process during this period was the finetuning of Boardposition, as it has quite a few variables and factors which influence the decisions it makes. The last few hours spent here were put into making sure the combination of Boardposition and Chance in Combi was done properly and decisions it made were according to our own strategy, and making a start with the website you are currently reading through.

### The main research phase & writing

from the end of November until the **18th of December -> make handin date**, we simulated a lot of matchups, pitting both Boardposition and Combi against Greedy to move towards the research process. Besides that, most of the writing for the website was also done during these 3 weeks.


## Our Development & Research cycle

It is also good to go into more detail about the specifics of our development and research cycles, to give a better idea of what actually happened during those 6 months of creating this bot.
Our development cycle is very similar to the conventional cycle many programmers go through while building their product. It consisted of mainly seperate coding and bugfixing sessions, with regular testing when new features were designed. We had weekly meetings for more difficult bugs and evaluation, and biweekly ones with our supervisor to keep him up to date about the process and pitch ideas against an outside voice.
The research cycle is more tailored to our project. We used a seperate computer to run games during school and logged the results of those matches in an Excel file so that we could take a look at it later and inspect. Those results were made up from words played, scores and time per move, in the form of both standard tables and graphs. When we had data from enough games for a matchup, we applied some statistics to it to analyse them and extract more information. 


[report_MB&FE]: https://www.csc.kth.se/utbildning/kth/kurser/DD143X/dkand12/Group3Johan/report/berntsson_ericsson_report.pdf
[github_repo]: https://github.com/StijnTB/PWS-2526-WordFeudBot