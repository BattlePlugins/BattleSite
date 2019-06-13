---
id: debug
title: Debug Commands & Options
sidebar_label: Debug
---

## Debug Commands
* /battleArenaDebug giveTeam <player> <team index>
* /battleArenaDebug addKill <player>
* /battleArenaDebug giveHelm <item>
* /battleArenaDebug showspawns <arena>
* /battleArenaDebug showListeners
* /battleArenaDebug giveTeam <team index>
* /battleArenaDebug enableDebugging <section> <on off>

enableDebugging <section> values:

https://github.com/BattlePlugins/BattleArena/blob/master/src/java/mc/alk/arena/executors/BattleArenaDebugExecutor.java#L59-L84

* transitions
* virtualplayer
* tracking
* storage
* <strike>damage</strike>
* commands
* debug
* teams

## Inventory Commands

Listing a players saved inventories:
* /ba listInv <player>
* /ba listInv <player> <index>

Restoring a players inventory from a saved inventory:
First do /ba listInv to find which inventory index you wantto restore
* /ba restoreInv <player> <index>


