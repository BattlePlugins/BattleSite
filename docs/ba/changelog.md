---
id: changelog
title: BattleArena Changelog
sidebar_label: Changelog
---

== 3.6.8 == === Fixes ===

- Fixed a problem for Windows servers where add ons, like ArenaSpleef and ArenaPaintball, weren't properly making configs.

=== New Features ===

- You can now bet on duels using the option '''money

  <amount>'''.  You can also use the name of your server currency if you are using vault.
  Example using skirmish match</amount>

- '''/skirmish duel alkarin_v money 50'''

== 3.6.7 == === Fixes ===

- Fixes for creative mode switching bug that I introduced in == 3.6.6
- Fix for matches/events using HighestKills where kills/deaths wasnt tracking properly.

=== New Features ===

- MobArena support: checks to see if a player is in MobArena and won't allow them to join a match if they are.
- Multiverse-Core support: Gamemode switching now works properly with Multiverse-Core
- Multiverse-Inventories support: Gamemode and cross world teleporting now works properly with Multiverse-Inventories
- New onServerStartup options: startNext and startContinuous will now start the event scheduler on startup

== 3.6.6.7 == === Fixes ===

- added new command for event scheduling /bas startNext: to start the next event in the list
- If a player does /

  <match> join and there is no 1v1 made it will try and put them in a larger arena, like 3v3.</match>

- Took extra steps to remove WorldGuard dependency (it shouldnt be needed)

=== New Features ===

- New API features for plugins using Arenas

== 3.6.6.3 == === Fixes ===

- Players joining the arena through creative were able to take items out. Resolved in this version.

=== New Features ===

- Added Dueling between players
- Added worldguard support for clearing items from a region, and not letting players leave the arena region

== 3.6.5.3 == === Fixes ===

- Fix for messages.yml being loaded before the default directory was created, causing messages errors to occur on first startup.
- Added a space into the classes.yml file that was causing a yml parsing error.

== 3.6.5.2 == === Fixes ===

- Fixes for mob/item spawning
- Fix for gamemodes and item storing for events with Waitrooms

=== New Features ===:

- Class signs are now functional. You can place them in a waitroom or arena and players can select a class. If they can swap between all classes until their inventory changes, at which point they are locked into that class. This allows people to choose classes but not be able to transfer items to other people or themselves.

== 3.6.5 == === Fixes ===

- Minor message Fixes
- Fixes for matches and tournaments when I introduced a bug in == 3.6.4.

=== New Features ===:

- Option for force joining all players on the server for events
- Allows events to be scheduled and run on a continuous loop
- new cleaner handling of options for opening events (see wiki)
- All matches and events can now have an end time (specified by matchTime:

  <value> in the config).  Can be overriden in any match/event config section.</value>

== 3.6.4.5 == === Fixes ===

- Fix for people that joined and disconnected with different gamemodes
- Removed BattleTracker Dependency

=== New Features ===

- new command. '''/

  <cmd> rank''', and '''/<cmd> rank <player>'''. Example, '''/skirmish rank'''.  This needs BattleTracker v2.1.2 or above</player></cmd></cmd>

- '''/cmd leave''' now works at all times
