---
id: spawns
title: Arena Spawn Settings
sidebar_label: Spawns
---
# Spawning Entities in Arenas

Mobs, Players, Items, and more.

## Chest/Block spawns
These commands will allow you to respawn chests and blocks. `Note!` This is not for entire arena regeneration, for that please use the worldguard regions ([[BattleArena/Regions Manual | Adding WorldGuard Regions]]). To add a spawn for an chest or block do the following. use the command ArenaAlter (aa).
# `/aa select <arena>` : select the arena you want to alter
# `/aa addBlock` : Will ask you then to click a block that you want saved

### Chest Example
Let's say you have the arena BlitzArena and you want to have it respawn with weapons and armor.
# You need to put all the items you want to be respawned inside the chest. Once that is done then...
# `/aa select BlitzArena` : select the BlitzArena
# `/aa addBlock` : This should ask you to select the block
# Click the chest block, this should give you a message confirming the click
Once this is done you can see what will be respawned using
* `/aa showSpawns` : show the current spawns for this arena
And to hide the spawns
* `/aa hideSpawns` : hide the spawns for this arena

## Item/Mob spawns
### Basic Commands
To add a spawn for an item or mob do the following. use the command ArenaAlter (aa).
# `/aa select <arena>` : select the arena you want to alter
# `/aa addSpawn <mob> <amount>` : add a mob spawn to your location.
# `/aa addSpawn <item> <amount>` : add the amount of items to your location
====Examples====
# `/aa addSpawn wolf 1` : add a wolf to your location. Index # 1
# `/aa addSpawn wolf 1` : add 2nd wolf to your location. Index # 2
# `/aa addSpawn diamond_sword 1` : add a diamond sword to your location. Index # 3
# `/aa addSpawn arrow 32` : add 32 arrows to your location. Index # 4

### All Options
There are several options you can use for spawning
* `fs=<seconds>` : First spawn time (counted from when the match starts)
* `rs=<seconds>` : Respawn time, how often will the item respawn (counted from the first spawn)
* `i=<index>` : Index, allows you to change a previous spawn (put at the end of the command)
### Example
Lets say you messed up and you didn't want the diamond_sword from the Basic Commands example. That item was placed at Index 3 (it will tell you in game when you create the spawns or you can use /aa listSpawns.
# `/aa addSpawn log 1 i=3` : replaces whatever is at Index#3 ( diamond sword from the example)
Now lets say you really want that log to be wool that respawns every 15 seconds
# `/aa addSpawn wool 1 rs=15 i=3` : replaces whatever is at Index#3 ( now a log)
### More Examples
# `/aa addSpawn bow fs=30 rs=50 1`: Spawns one bow 30 seconds into the game, and respawns it every 50 seconds after that.
# `/aa addSpawn diamond rs=50 fs=30 1` if you wanted.
# `/aa addSpawn diamond_sword sharp:1 1` also works to add enchants.

## Deleting Spawn
# `/aa deleteSpawn <index>` : Delete the spawn at the specified index

## List Spawns
# `/aa listSpawns` : List the spawns for this arena

