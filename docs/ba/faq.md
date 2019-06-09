---
id: faq
title: BattleArena FAQ
sidebar_label: FAQ
---
These are some of the most frequent questions about the plugin, configuring it, and changing different arena settings. Please make sure your issue isn't listed here before contacting us for help!

##General Questions
### What's the difference between Matches and Events?
The primary difference is how they are started by default, and how you join.
* Matches have a waiting queue, and the competition will start when enough people join
* Events are usually started by an admin, where there is an announcement and a phase where people can join.
What makes it tricky is there are a lot of options to start both in different ways. Matches can be started with '''defaultOptions.matchEnableForceStart: true''' which will make the game start after a set time as long as the minimum number of teams have joined. Events can be started with '''defaultOptions.allowPlayerCreation''' which allows them to auto start their own events. Events can also skip the join phase by enabling a ready block '''defaultOptions.enablePlayerReadyBlock: true'''
## Statistic Questions
### How do I make leaderboards?
You need the BattleTracker plugin, BA's sister plugin that handles PVP and PVE deaths and interactions. This also allows for leaderboard signs.
### Where it says Player1[0] ,how do I make it so they start of with 1200 rating?
For ELO calculations and statistics, you need the above mentioned BattleTracker plugin.
### How do I enable player ranking, and /arena top?
See both above points about BattleTracker.
## Debug Questions
### My server crashed and players lost their items. What can I do to fix it?
There is a system in place that stores the players inventories and you can give those items back. See [[BattleArena/Commands#Debug_Commands | Admin Debug Commands - Listing a players saved inventories]]
## Message Questions
### How do I change who gets messages?
There is a section in the config.yml that shows how to set up messages to the server and players. [[BattleArena/Config#Message_Options | Message Options]]
## Config Questions
### I don't want participants to drop their items. What can I do?
[[BattleArena/Config#Clearing_Inventory_on_Death | Clearing players inventory on death]]
### I want to change how many people can play. What can I do?
You change these by changing the options nTeams (number of teams), and teamSize (how many players per team, 1 for solo). Here are some [[BattleArena/Config#Changing_the_number_of_players_on_each_team | examples]]
### Where is the list of item enchants!!!!??
View the following page [[BattleArena/ItemEnchants | Item Enchants]]
### How do you change the number of players in a match?
Check out the Config setup help - [[BattleArena/Config#Changing_the_number_of_players_on_each_team | Changing the number of players on each team]]
### How do you make a arena were people bring their own equipment?
You take out the option `clearInventory` from both these stages, `preReqs` and `onComplete`. Complete example with players bringing their own equipment:
```yaml
### Skirmish 
skirmish:
    enabled: true
    prefix: "&b[Skirmish]&e"
    preReqs:
        options: []
    onStart:
        options: [teleportIn, pvpOn]
    onComplete:
        options: [teleportOut]
```