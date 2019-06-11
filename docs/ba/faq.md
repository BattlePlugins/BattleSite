---
id: faq
title: BattleArena FAQ
sidebar_label: FAQ
---
These are some of the most frequent questions about the plugin, configuring it, and changing different arena settings. Please make sure your issue isn't listed here before contacting us for help!

## General Questions
### What's the difference between Matches and Events?
The primary difference is how they are started by default, and how you join.
* Matches have a waiting queue, and the competition will start when enough people join
* Events are usually started by an admin, where there is an announcement and a phase where people can join.
What makes it tricky is there are a lot of options to start both in different ways. Matches can be started with '''defaultOptions.matchEnableForceStart: true''' which will make the game start after a set time as long as the minimum number of teams have joined. Events can be started with '''defaultOptions.allowPlayerCreation''' which allows them to auto start their own events. Events can also skip the join phase by enabling a ready block '''defaultOptions.enablePlayerReadyBlock: true'''
## Statistic Questions
### How do I make leaderboards?
You need the [BattleTracker](bt/index.md) plugin, BA's sister plugin that handles PVP and PVE deaths and interactions. This also allows for leaderboard signs, ELO, rankings, and more!
### Where it says Player1[0] ,how do I make it so they start of with 1200 rating?
For ELO calculations and statistics, you need the above mentioned [BattleTracker](bt/index.md) plugin.
### How do I enable player ranking, and /arena top?
See both above points about [BattleTracker](bt/index.md).
## Debug Questions
### My server crashed and players lost their items. What can I do to fix it?
There is a backup inventory saving system in place that stores the players inventories so you can restore them in the event of a mishap or error. See [BA/Debug](ba/debug.md)
## Message Questions
### How do I change who gets messages?
There is a section in the `config.yml` (see [Config](ba/config.md)) that manages and handles server and player messages.
## Config Questions
### I don't want participants to drop their items. What can I do?
See the [Customizing Arenas](ba/settings.md) page for info on how to manage arena settings.
### I want to change how many people can play. What can I do?
You change these by changing the options `nTeams` (number of teams), and `teamSize` (how many players per team, 1 for solo). See [Customizing Arenas](ba/settings.md) for more info on that.
### Where is the list of item enchants!!!!??
See the following page for [Enchantment Types & Info](enchants.md).
### How do you change the number of players in a match?
Check out the Config Help Page - See [Customizing Config](ba/config.md) for more info.
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