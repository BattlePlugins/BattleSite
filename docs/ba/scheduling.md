---
id: scheduling
title: Teams Info & Setup
sidebar_label: Scheduling
---
## Scheduling Events

==Scheduling Games==
You can schedule games so that they run periodically. You just add events to the scheduler and start it.
* Add the events you want to run by using /bas add <commands>
* Start the scheduled events /bas start
you can change the time values in the BattleArena/config.yml under 'defaultOptions.timeBetweenScheduledEvents'

===Command===
* '''/bas''' shorthand for '''battleArenaScheduler'''
* '''/bas add <commands that you would normally type to start an event>'''

====Examples====
* '''/bas add tourney auto skirmish'''
* '''/bas add ffa auto'''
* '''/bas add ffa auto teamSize=1+ nTeams=2'''

===Running the scheduled events===
This will run the scheduled events in order. Starting when the previous finishes.
* '''/bas start'''

===Deleting Events===
* '''/bas delete <number>'''

===Stopping the events===
* '''/bas stop'''

===Listing Scheduled Events===
* '''/bas list'''

===Running Scheduled Events at startup===
* see [[BattleArena/Config#Scheduled Event Options|Running Events at Startup]]

==Other Useful Options==
[[BattleArena/Config#Scheduled Event Options|Running Events at Startup]]

[[BattleArena/Tournaments|Tournaments]]

[[BattleArena/Default Games | Default Games]]

[[BattleArena/Custom Games | Custom Games]]

==Return to Index==
[[BattleArena]]

[[Main Page]]


## Join Phase:
==Join Phase Games==
Games that have a join phase must be "opened", then "started". While "opened" players can join and leave. You must then "start" the game.
You can "open" and "start" the match by doing the command '''/<event> auto''', which will open the game for 3 minutes(configurable) then start it automatically.
===Auto run===
The simplest way to make an event happen. Do it automatically, it will announce instructions every minute until it starts.
* '''/<event> auto'''
Example: '''/ffa auto'''

===Opening an event===
If you want to control when it opens and starts, use the commands:
* '''/<event> open'''
* '''/<event> start'''
Example:
* '''/ffa open'''
* '''/ffa start'''

===Cancelling an event===
* '''/<event> cancel'''

===Declaring a winner of a match===
This is not a tournament option, but it's useful sometimes if something unexpected occurs '''/arena winner <player name>'''

===Full commands with all options===
Valid Options:
* Rated, Unrated
* teamSize=<range>: Example teamSize=1+ ( 1 or more players per team ): Example teamSize=2 (2 players per team)
* nTeams=<range>: Example nTeams=2 (2 teams competing), Example nTeams=2+ (2 or more teams, useful for tournaments)
* silent : Dont announce event messages
* time=<seconds> : Example time=60, seconds till event starts (only used for auto)
* interval=<seconds>: How often to announce this event is starting messages (only used for auto)
* arena=<arena>: Specify a specific arena to run this event in.
Example:
* '''/ffa auto teamSize=1 nTeams=2+''' will run a free for all
* '''/ffa auto teamSize=2 nTeams=2+''' will run a 2 team free for all
* '''/ffa auto teamSize=1+ nTeams=2''' will run a competition between 2 teams. Last team with players alive wins.

== Return to Index ==
[[BattleArena]]

[[Main Page]]
