---
id: tournaments
title: Teams Info & Setup
sidebar_label: Tournaments
---

==Tournaments==
Tournaments are a series of single elimination bracketed matches until only 1 victor remains (think the NCAA basketball tournament).
Tournaments can be started on any game that has a queue. Such as '''arena,skirmish,col,''' or if you have them downloaded, Paintball and Spleef '''pb, spleef'''(can be found on bukkit).

===Auto run a Tournament event===
The simplest way to make a tournament happen. It will announce instructions every minute until it starts, default 3 minutes.
'''/tourney auto <match type>'''
* Example: '''/tourney auto arena'''

===Running a tournament by yourself===
You will need to open and start the tournament
* '''/tourney open <matchtype>'''
** Example: '''/tourney open skirmish'''
* '''/tourney start'''

===Cancelling the tournament===
* '''/tourney cancel'''

===Declaring a winner of a match===
This is not a tournament option, but it's useful sometimes if something unexpected occurs
* '''/arena winner <player name>'''

===Full commands, with all options===
Valid Options:
* Rated, Unrated
* teamSize=<range>: Example teamSize=1 ( 1 player per team ): Example teamSize=2 (2 players per team)
* nTeams=<range>: Example nTeams=2 (2 teams per tournament match), Example nTeams=4 (4 teams per tournament match)
* This must be a power of 2. For example 2,4,8,16...
* silent : Dont announce event messages
* time=<# seconds> : Example time=60, seconds till event starts (only used for '''auto''')
* interval=<# seconds>: How often to announce this event is starting messages (only used for '''auto''')
Examples:
* '''/tourney auto arena unrated teamSize=1''' will run an unrated tourney with team size 1
* '''/tourney auto arena teamSize=2''' will run a tourney with teams of 2 players
* '''/tourney auto arena teamSize=1 nTeams=4''' will run an unrated tourney with 4 players against each other for each tournament match
* '''/tourney auto arena time=60 interval=20''' will run a tourney in one minute with announcements every 20 seconds to join

==Other Useful Options==
[[BattleArena/Scheduling Events|Scheduling Events]]

[[BattleArena/Default Games | Default Games]]

[[BattleArena/Custom Games | Custom Games]]

==Return to Index==
[[BattleArena]]

[[Main Page]]
