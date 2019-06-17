---
id: debug
title: Debug Commands & Options
sidebar_label: Debug
---

### Debug Commands
* `/battleArenaDebug giveTeam <team index>`
* `/battleArenaDebug giveTeam <player> <team index>`
* `/battleArenaDebug addKill <player>`
* `/battleArenaDebug giveHelm <item>`
* `/battleArenaDebug showSpawns <arena>`
* `/battleArenaDebug showListeners`
* `/battleArenaDebug enableDebugging <section> <on/off>`
  
**[enableDebugging sections](https://github.com/BattlePlugins/BattleArena/blob/master/src/java/mc/alk/arena/executors/BattleArenaDebugExecutor.java#L59-L84)**:
* `transitions`
* `virtualplayer`
* `tracking`
* `storage`
* ~~`damage`~~
* `commands`
* `debug`
* `teams`

### Inventory Commands
Listing a players saved inventories:
* `/ba listInv <player>`
* `/ba listInv <player> <index>`
  
Restoring a players inventory from a saved inventory. Make sure you first run `/ba listInv` to find which index you want to restore. 
* `/ba restoreInv <player> <index>`

